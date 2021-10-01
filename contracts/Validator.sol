//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Validator is Ownable {
    using SafeMath for uint256;

    bytes32 constant BUYYER = "BUYYER";
    bytes32 constant SELLER = "SELLER";
    bytes32 constant EQUIVALENT = "EQUIVALENT";

    struct UserReplyAnswer {
        bytes32 answer;
        uint256 amount;
        string remark;
        uint256 createdAt;
        bool claimed;
    }

    uint256 autoNumberCaseId;

    struct CaseInfo {
        mapping(address => UserReplyAnswer) usersReplyAnswer;
        address[] users;
        address[] winners;
        uint256 currentValue;
        uint256 totalValue;
        uint256 fund;
        bytes32 result;
        uint256 resultAt;
        bytes32 randomness;
    }

    event USER_DECISION(
        address _sender,
        uint256 _caseId,
        uint256 _amount,
        bytes32 _answer,
        string _remark
    );
    event CASE_VOTE_DONE(uint256 _caseId);
    event CASE_GEN_RESULT(
        address _sender,
        uint256 _caseId,
        uint256 _amount,
        bytes32 _answer,
        string _remark
    );

    ERC20 erc20Interface;
    mapping(uint256 => CaseInfo) casesInfo;

    uint256 public maxPercentValue;
    uint256 public minPercentValue;
    uint256 fee;//20%

    constructor(
        address _erc20Address,
        uint256 _maxPercentValue,
        uint256 _minPercentValue,
        uint256 _fee
    ) {
        erc20Interface = ERC20(_erc20Address);
        minPercentValue = _minPercentValue;
        maxPercentValue = _maxPercentValue;
        fee = _fee;
    }

    function addCase(uint256 _totalValue) public returns (uint256) {
        autoNumberCaseId++;
        CaseInfo storage caseInfo = casesInfo[autoNumberCaseId];
        caseInfo.totalValue = _totalValue;

        return autoNumberCaseId;
    }

    function getTotalCollateral()external view returns(uint256){
        uint256 totalValue;
        for(uint256 i=1;i<= autoNumberCaseId;i++){
            CaseInfo storage caseInfo = casesInfo[autoNumberCaseId];
            totalValue = totalValue.add(caseInfo.currentValue);
        }
        return totalValue;
    }

    function getCaseTotalValue(uint256 _caseId)
        external
        view
        returns (uint256)
    {
        CaseInfo storage caseInfo = casesInfo[_caseId];
        return caseInfo.totalValue;
    }

    function getCaseValue(uint256 _caseId) external view returns (uint256) {
        CaseInfo storage caseInfo = casesInfo[_caseId];
        return caseInfo.currentValue;
    }

    function getUserDecision(uint256 _caseId, address _owner)
        external
        view
        returns (bool)
    {
        CaseInfo storage caseInfo = casesInfo[_caseId];
        return (caseInfo.usersReplyAnswer[_owner].createdAt != 0);
    }

    function getUserResultInCase(uint256 _caseId, address _userAddress)
        public
        view
        returns (bool _isWin, uint256 _betAmount)
    {
        CaseInfo storage caseInfo = casesInfo[_caseId];

        UserReplyAnswer memory userReplyAnswer = caseInfo.usersReplyAnswer[_userAddress];
        bytes32 answer = keccak256(
            abi.encodePacked(userReplyAnswer.answer, caseInfo.randomness)
        );
        _isWin = (answer == caseInfo.result);
        _betAmount = userReplyAnswer.amount;
    }

    function claimReward(uint256 _caseId) public {
         CaseInfo storage caseInfo = casesInfo[_caseId];
         bool isWin;
         uint256 betAmount;
         require(caseInfo.usersReplyAnswer[msg.sender].claimed != true);
         (isWin,betAmount) = getUserResultInCase(_caseId, msg.sender);

         if(isWin){
             uint256 fundAferSubFee = caseInfo.fund.sub(caseInfo.fund.mul(fee).div(100));
             uint256 fundPerUser  = fundAferSubFee.div(caseInfo.winners.length);
             uint256 totalPay = betAmount.add(fundPerUser);
             caseInfo.usersReplyAnswer[msg.sender].claimed = true;

             erc20Interface.transferFrom(address(this), msg.sender, totalPay);
         }
    }

    function evaluate(uint256 _caseId, bytes32 _randomness)
        external
        onlyOwner
        returns (bytes32)
    {
        CaseInfo storage caseInfo = casesInfo[_caseId];
        require(caseInfo.result[0] == 0, "This case already had result.");
        uint256 buyyerValueCount;
        uint256 sellerValueCount;
        for (uint256 i = 0; i < caseInfo.users.length; i++) {
            address userAddress = caseInfo.users[i];
            UserReplyAnswer memory userReplyAnswer = caseInfo.usersReplyAnswer[
                userAddress
            ];
            bytes32 answer = keccak256(
                abi.encodePacked(userReplyAnswer.answer, _randomness)
            );
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
            UserReplyAnswer memory userReplyAnswer = caseInfo.usersReplyAnswer[
                userAddress
            ];
            bytes32 answer = keccak256(
                abi.encodePacked(userReplyAnswer.answer, _randomness)
            );
            if (answer != caseInfo.result) {
               fund = fund.add(userReplyAnswer.amount);
            }else{
                caseInfo.winners.push(userAddress);
            }
        }
        caseInfo.fund = fund;
        caseInfo.resultAt = block.timestamp;

        return caseInfo.result;
    }

    function play(
        uint256 _caseId,
        uint256 _amount,
        bytes32 _answer,
        string memory _remark
    ) external {
        CaseInfo storage caseInfo = casesInfo[_caseId];
        require(
            caseInfo.totalValue > caseInfo.currentValue,
            "The case is closed"
        );
        UserReplyAnswer memory userReplyAnswer = caseInfo.usersReplyAnswer[
            msg.sender
        ];
        require(userReplyAnswer.createdAt == 0, "Not allow user reply again");

        uint256 totalValue = caseInfo.totalValue;
        uint256 maxAmount = totalValue.mul(maxPercentValue).div(100);
        uint256 minAmount = totalValue.mul(minPercentValue).div(100);
        // check amount in range
        require(
            _amount <= maxAmount && _amount >= minAmount,
            "amount is not in range limit."
        );
        // transfer
        require(
            erc20Interface.transferFrom(msg.sender, address(this), _amount),
            "Can't transfer"
        );
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
        emit USER_DECISION(msg.sender, _caseId, _amount, _answer, _remark);

        if (caseInfo.currentValue >= caseInfo.totalValue) {
            emit CASE_VOTE_DONE(_caseId);
        }
    }
}
