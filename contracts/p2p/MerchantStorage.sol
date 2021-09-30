//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract MerchantStorage is Ownable{

    mapping (address => uint256) public shopBalance;
    mapping (address => uint256) public shopLockBalance;
    mapping (address => uint256) public successTransactionCount;

    function getShopBalance(address _owner) external view returns(uint256){
        return shopBalance[_owner];
    }

    function setShopBalance(address _owner,uint256 _balance) external onlyOwner{
        shopBalance[_owner] = _balance;
    }

    function getShopLockBalance(address _owner) external view returns(uint256){
        return shopLockBalance[_owner];
    }

    function getAddress() public view returns (address){
        return address(this);
    }

    function setShopLockBalance(address _owner, uint256 _balance) external onlyOwner{
        shopLockBalance[_owner] = _balance;
    }

    function getTransactionSuccessCount(address _owner) external view returns(uint256){
        return successTransactionCount[_owner];
    }
    
    function setTransactionSuccessCount(address _owner,uint256 _count) external onlyOwner{
        successTransactionCount[_owner] = _count;
    }
}