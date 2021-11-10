//SPDX-License-Identifier: Unlicense
/*
#   __      __    _____     ________   ________ _____.___.
#  /  \    /  \  /  _  \   /  _____/  /  _____/ \__  |   |
#  \   \/\/   / /  /_\  \ /   \  ___ /   \  ___  /   |   |
#   \        / /    |    \\    \_\  \\    \_\  \ \____   |
#    \__/\  /  \____|__  / \______  / \______  / / ______|
#         \/           \/         \/         \/  \/       
*/
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Validator is Ownable {
  using SafeMath for uint256;
  using SafeERC20 for ERC20;

  enum CaseStatus {
    START,
    INPROGRESS,
    SUMMARY,
    DONE
  }

  bytes32 internal constant BUYYER = "BUYYER";
  bytes32 internal constant SELLER = "SELLER";
  bytes32 internal constant EQUIVALENT = "EQUIVALENT";

  struct UserReplyAnswer {
    bytes32 answer;
    uint256 amount;
    string remark;
    uint256 createdAt;
    bool claimed;
  }

  struct CaseInfo {
    mapping(address => UserReplyAnswer) usersReplyAnswer;
    address[] users;
    address[] winners;
    address seller;
    address buyer;
    address token;
    uint256 currentValue;
    uint256 totalValue;
    uint256 fund;
    bytes32 result;
    uint256 resultAt;
    bytes32 randomness;
    uint256 remark;
    CaseStatus status;
  }

  event USER_DECISION(address _sender, uint256 _caseId, uint256 _amount, bytes32 _answer, string _remark);
  event CASE_VOTE_DONE(uint256 _caseId);
  event CASE_GEN_RESULT(address _sender, uint256 _caseId, uint256 _amount, bytes32 _answer, string _remark);

  ERC20 public erc20Interface;

  mapping(uint256 => CaseInfo) internal casesInfo;

  uint256 public totalCollateral;
  uint256 public maxPercentValue;
  uint256 public minPercentValue;
  uint256 public fee; //20%

  constructor(
    uint256 _maxPercentValue,
    uint256 _minPercentValue,
    uint256 _fee
  ) {
    minPercentValue = _minPercentValue;
    maxPercentValue = _maxPercentValue;
    fee = _fee;
  }

  function addCase(
    uint256 _blockNumber,
    address _token,
    address _seller,
    address _buyer,
    uint256 _remark,
    uint256 _amount
  ) external {
    CaseInfo storage caseInfo = casesInfo[_blockNumber];
    caseInfo.seller = _seller;
    caseInfo.buyer = _buyer;
    caseInfo.token = _token;
    caseInfo.remark = _remark;
    caseInfo.totalValue = _amount;
  }

  function getTotalCollateral() external view returns (uint256) {
    return totalCollateral;
  }

  function getUserReply(uint256 _blockNumber, address _user)
    external
    view
    returns (
      bytes32 answer,
      uint256 amount,
      string memory remark,
      uint256 createdAt,
      bool claimed
    )
  {
    CaseInfo storage caseInfo = casesInfo[_blockNumber];
    UserReplyAnswer memory userReply = caseInfo.usersReplyAnswer[_user];
    answer = userReply.answer;
    amount = userReply.amount;
    remark = userReply.remark;
    createdAt = userReply.createdAt;
    claimed = userReply.claimed;
  }

  function getCaseInfo(uint256 _blockNumber)
    external
    view
    returns (
      address seller,
      address buyer,
      address token,
      uint256 currentValue,
      uint256 totalValue,
      uint256 fund,
      bytes32 result,
      uint256 resultAt,
      bytes32 randomness,
      uint256 remark,
      uint256 status
    )
  {
    CaseInfo storage caseInfo = casesInfo[_blockNumber];
    seller = caseInfo.seller;
    buyer = caseInfo.buyer;
    token = caseInfo.token;
    currentValue = caseInfo.currentValue;
    totalValue = caseInfo.totalValue;
    fund = caseInfo.fund;
    result = caseInfo.result;
    resultAt = caseInfo.resultAt;
    randomness = caseInfo.randomness;
    remark = caseInfo.remark;
    status = uint256(caseInfo.status);
  }

  function getUserDecision(uint256 _blockNumber, address _userReply) external view returns (bool) {
    CaseInfo storage caseInfo = casesInfo[_blockNumber];
    return (caseInfo.usersReplyAnswer[_userReply].createdAt != 0);
  }

  function getUserResultInCase(uint256 _blockNumber, address _userAddress)
    public
    view
    returns (bool _isWin, uint256 _betAmount)
  {
    CaseInfo storage caseInfo = casesInfo[_blockNumber];

    UserReplyAnswer memory userReplyAnswer = caseInfo.usersReplyAnswer[_userAddress];
    bytes32 answer = keccak256(abi.encodePacked(userReplyAnswer.answer, caseInfo.randomness));
    _isWin = (answer == caseInfo.result);
    _betAmount = userReplyAnswer.amount;
  }

  function claimReward(uint256 _blockNumber) public {
    CaseInfo storage caseInfo = casesInfo[_blockNumber];
    bool isWin;
    uint256 betAmount;
    require(caseInfo.usersReplyAnswer[msg.sender].claimed != true);
    (isWin, betAmount) = getUserResultInCase(_blockNumber, msg.sender);

    if (isWin) {
      uint256 fundAferSubFee = caseInfo.fund.sub(caseInfo.fund.mul(fee).div(100));
      uint256 fundPerUser = fundAferSubFee.div(caseInfo.winners.length);
      uint256 totalPay = betAmount.add(fundPerUser);
      caseInfo.usersReplyAnswer[msg.sender].claimed = true;

      erc20Interface.safeTransferFrom(address(this), msg.sender, totalPay);
    }
  }

  function evaluate(uint256 _blockNumber, bytes32 _randomness) external onlyOwner returns (bytes32) {
    CaseInfo storage caseInfo = casesInfo[_blockNumber];
    require(caseInfo.result[0] == 0, "This case already had result.");
    uint256 buyyerValueCount;
    uint256 sellerValueCount;
    for (uint256 i = 0; i < caseInfo.users.length; i++) {
      address userAddress = caseInfo.users[i];
      UserReplyAnswer memory userReplyAnswer = caseInfo.usersReplyAnswer[userAddress];
      bytes32 answer = keccak256(abi.encodePacked(userReplyAnswer.answer, _randomness));
      if (answer == BUYYER) {
        buyyerValueCount = buyyerValueCount.add(userReplyAnswer.amount);
      } else {
        sellerValueCount = sellerValueCount.add(userReplyAnswer.amount);
      }
    }
    if (buyyerValueCount > sellerValueCount) {
      caseInfo.result = BUYYER;
    } else if (buyyerValueCount < sellerValueCount) {
      caseInfo.result = SELLER;
    } else {
      caseInfo.result = EQUIVALENT;
    }

    uint256 fund;
    for (uint256 i = 0; i < caseInfo.users.length; i++) {
      address userAddress = caseInfo.users[i];
      UserReplyAnswer memory userReplyAnswer = caseInfo.usersReplyAnswer[userAddress];
      bytes32 answer = keccak256(abi.encodePacked(userReplyAnswer.answer, _randomness));
      if (answer != caseInfo.result) {
        fund = fund.add(userReplyAnswer.amount);
      } else {
        caseInfo.winners.push(userAddress);
      }
    }
    caseInfo.fund = fund;
    caseInfo.resultAt = block.timestamp;
    totalCollateral = totalCollateral.sub(caseInfo.currentValue);
    return caseInfo.result;
  }

  function play(
    uint256 _blockNumber,
    uint256 _amount,
    bytes32 _answer,
    string memory _remark
  ) external {
    CaseInfo storage caseInfo = casesInfo[_blockNumber];
    require(caseInfo.totalValue > caseInfo.currentValue, "The case is closed");
    UserReplyAnswer memory userReplyAnswer = caseInfo.usersReplyAnswer[msg.sender];
    require(userReplyAnswer.createdAt == 0, "Not allow user reply again");

    uint256 totalValue = caseInfo.totalValue;
    uint256 maxAmount = totalValue.mul(maxPercentValue).div(100);
    uint256 minAmount = totalValue.mul(minPercentValue).div(100);
    // check amount in range
    require(_amount <= maxAmount && _amount >= minAmount, "amount is not in range limit.");
    // transfer
    erc20Interface.safeTransferFrom(msg.sender, address(this), _amount);
    // add collateral
    totalCollateral = totalCollateral.add(_amount);
    // save reply
    userReplyAnswer.amount = _amount;
    userReplyAnswer.answer = _answer;
    userReplyAnswer.remark = _remark;
    userReplyAnswer.createdAt = block.timestamp;
    caseInfo.usersReplyAnswer[msg.sender] = userReplyAnswer;
    caseInfo.users.push(msg.sender);
    // update progress
    caseInfo.currentValue = caseInfo.currentValue.add(_amount);
    // emit event
    emit USER_DECISION(msg.sender, _blockNumber, _amount, _answer, _remark);

    if (caseInfo.currentValue >= caseInfo.totalValue) {
      emit CASE_VOTE_DONE(_blockNumber);
    }
  }
}
