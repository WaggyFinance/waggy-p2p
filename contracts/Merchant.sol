//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./RewardCalculator.sol";

contract Merchant is Ownable{

    enum TransactionStatus { IDLE,INPROCESS,FINISH }
    using SafeMath for uint256;

    ERC20 token;
    ERC20 gov;

    RewardCalculator rewardCalculator;

    mapping (address => uint256) public shopBalance;
    mapping (address => uint256) public shopLockBalance;
    mapping (address => uint256) public successTransactionCount;
    mapping (address => mapping(string=>TransactionStatus)) public transactionStatus;

    modifier isCanDeleteShop() {
        require(shopLockBalance[msg.sender] == 0);
        _;
    }

    // create merchant with token for p2p transaction
    constructor(address _token,address _gov,address _rewardCalculator){
        token = ERC20(_token);
        gov = ERC20(_gov);
        rewardCalculator = RewardCalculator(_rewardCalculator);
    }

    // owner claimToken for emergency event.
    function ownerClaimToken() public onlyOwner{
        token.transfer(owner(), token.balanceOf(address(this)));
    }

    // update RewardCalculator 
    function updateRewardCalculator(address _rewardCalculator) public onlyOwner{
        rewardCalculator = RewardCalculator(_rewardCalculator);
    }

    /* 
    For seller release token to buyer when the seller approve a evidence of faite transfer slip 
    _address is a receipt waller address
    _amount is value of token to transfer
    */
    function releaseToken(address _receipt ,uint256 _amount) public {
        require(shopLockBalance[msg.sender]>= _amount);
        token.transferFrom(msg.sender, _receipt, _amount);
        shopLockBalance[msg.sender]  =  shopLockBalance[msg.sender].sub(_amount);
        successTransactionCount[msg.sender]  = successTransactionCount[msg.sender].add(1);
        // pay reward after complete transaction
        gov.transfer(msg.sender, getReward(_amount));
    }

    /*
    For admin or owner when the transaction had problem, it can cancel the transaction.
    _address is address of seller 
    _amount is value of transaction 
    */ 
    function cancelTransaction(address _address ,uint256 _amount) public onlyOwner{
        require(shopLockBalance[_address]>= _amount);
        shopLockBalance[_address]  =  shopLockBalance[_address].sub(_amount);
        shopBalance[_address]  =  shopBalance[_address].add(_amount);
    }

    /*
    When buyer is request to buy the token is had action to approve at seller
    The seller to call function approveTransaction for lock balance, it ready for wait to fait transfer.
    _amount is value of buyer want it.
    */
    function approveTransaction(uint256 _amount) public {
        require(shopBalance[msg.sender]>= _amount);
        shopBalance[msg.sender]  =  shopBalance[msg.sender].sub(_amount);
        shopLockBalance[msg.sender]  =  shopLockBalance[msg.sender].add(_amount);
    }

    /*
    It first function for setup merchant of seller ,it deposit amount of token to sell
    _amount is value of token to want a sell 
    */
    function setupShop(uint256 _amount) public payable{
        require(token.allowance(msg.sender, address(this)) > _amount);
        token.transferFrom(msg.sender, address(this), _amount);
        shopBalance[msg.sender] = _amount;
    }

    /*
    The seller request delete a shop but is not had any value in lock balance, It will can delete the shop.
    */
    function deleteShop() public isCanDeleteShop{
        require(shopBalance[msg.sender] > 0);
        token.transferFrom(address(this),msg.sender, shopBalance[msg.sender]);
        shopBalance[msg.sender] = 0;
    }

    /*
    Internal calculate reward for send to seller.
    _amount is value of transaction.
    */
    function getReward(uint256 _amount) internal view returns(uint256){
        return rewardCalculator.calculateReward(_amount);
    }
}