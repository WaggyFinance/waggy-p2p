//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./RewardCalculator.sol";
import "./MerchantStorage.sol";

contract Merchant is Ownable{

    using SafeMath for uint256;

    ERC20 token;
    ERC20 gov;

    event SetupShop( address owner ,address token,uint256 amount);
    event DeleteShop(address owner ,address token,uint256 balance);
    event ApproveTransaction(address owner ,address token,uint256 amount);
    event CancelTransaction(address owner ,address token,uint256 amount);
    event ReleaseToken(address sender,address receipt ,address token,uint256 amount,uint256 reward);

    MerchantStorage  merchantStorage;
    RewardCalculator rewardCalculator;

    modifier isCanDeleteShop() {
        require(merchantStorage.getShopLockBalance(msg.sender) == 0);
        _;
    }

    function getMerchantStorage() public view returns(address){
        return address(merchantStorage);
    }

    // create merchant with token for p2p transaction
    constructor(address _token,address _gov,address _rewardCalculator,address _merchantStorage){
        token = ERC20(_token);
        gov = ERC20(_gov);
        rewardCalculator = RewardCalculator(_rewardCalculator);
        merchantStorage = MerchantStorage(_merchantStorage);
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
        require(merchantStorage.getShopLockBalance(msg.sender) >= _amount);
        token.transferFrom(msg.sender, _receipt, _amount);
        merchantStorage.setShopLockBalance(msg.sender, merchantStorage.getShopLockBalance(msg.sender).sub(_amount));
        merchantStorage.setTransactionSuccessCount(msg.sender, merchantStorage.getTransactionSuccessCount(msg.sender).add(1));
        // pay reward after complete transaction
        uint256 reward = getReward(_amount);
        gov.transfer(msg.sender, reward);

        emit ReleaseToken(msg.sender,_receipt,address(token),_amount,reward);
    }

    /*
    For admin or owner when the transaction had problem, it can cancel the transaction.
    _address is address of seller 
    _amount is value of transaction 
    */ 
    function cancelTransaction(address _address ,uint256 _amount) public onlyOwner{
        require(merchantStorage.getShopLockBalance(_address)>= _amount);
        merchantStorage.setShopLockBalance(_address, merchantStorage.getShopLockBalance(_address).sub(_amount));
        merchantStorage.setShopBalance(_address, merchantStorage.getShopBalance(_address).add(_amount));

        emit CancelTransaction(_address,address(token),_amount);
    }

    /*
    When buyer is request to buy the token is had action to approve at seller
    The seller to call function approveTransaction for lock balance, it ready for wait to fait transfer.
    _amount is value of buyer want it.
    */
    function approveTransaction(uint256 _amount) public {
        require(merchantStorage.getShopBalance(msg.sender) >= _amount);
        merchantStorage.setShopBalance(msg.sender, merchantStorage.getShopBalance(msg.sender).sub(_amount));
        merchantStorage.setShopLockBalance(msg.sender, merchantStorage.getShopBalance(msg.sender).add(_amount));

        emit ApproveTransaction(msg.sender,address(token),_amount);
    }

    /*
    It first function for setup merchant of seller ,it deposit amount of token to sell
    _amount is value of token to want a sell 
    */
    function setupShop(uint256 _amount) public payable{
        require(token.allowance(msg.sender, address(this)) > _amount);
        token.transferFrom(msg.sender, address(this), _amount);
        merchantStorage.setShopBalance(msg.sender, _amount);

        emit SetupShop(msg.sender,address(token),_amount);
    }

    /*
    The seller request delete a shop but is not had any value in lock balance, It will can delete the shop.
    */
    function deleteShop() public isCanDeleteShop{
        require( merchantStorage.getShopBalance(msg.sender) > 0);
        uint256 totalBalance = merchantStorage.getShopBalance(msg.sender);
        token.transferFrom(address(this),msg.sender, totalBalance);
        merchantStorage.setShopBalance(msg.sender, 0);

        emit DeleteShop(msg.sender,address(token),totalBalance);
    }

    /*
    Internal calculate reward for send to seller.
    _amount is value of transaction.
    */
    function getReward(uint256 _amount) internal view returns(uint256){
        return rewardCalculator.calculateReward(_amount);
    }
}