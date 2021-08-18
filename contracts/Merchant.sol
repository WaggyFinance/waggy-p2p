//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Merchant is Ownable{

    enum TransactionStatus { IDLE,INPROCESS,FINISH }
    using SafeMath for uint256;

    ERC20 token;
    mapping (address => uint256) public shopBalance;
    mapping (address => uint256) public shopLockBalance;
    mapping (address => uint256) public successTransactionCount;
    mapping (address => mapping(string=>TransactionStatus)) public transactionStatus;

    modifier isCanDeleteShop() {
        require( shopLockBalance[msg.sender] == 0);
        _;
    }

    constructor(address _token){
        token = ERC20(_token);
    }

    function releaseToken(address _receipt ,uint256 _amount) public {
        require(shopLockBalance[msg.sender]>= _amount);
        token.transferFrom(msg.sender, _receipt, _amount);
        shopLockBalance[msg.sender]  =  shopLockBalance[msg.sender].sub(_amount);
        successTransactionCount[msg.sender]  = successTransactionCount[msg.sender].add(1);
    }

    function cancelTransaction(address _address ,uint256 _amount) public onlyOwner{
        require(shopLockBalance[_address]>= _amount);
        shopLockBalance[_address]  =  shopLockBalance[_address].sub(_amount);
        shopBalance[_address]  =  shopBalance[_address].add(_amount);
    }

    function approveTransaction(uint256 _amount) public {
        require(shopBalance[msg.sender]>= _amount);
        shopBalance[msg.sender]  =  shopBalance[msg.sender].sub(_amount);
        shopLockBalance[msg.sender]  =  shopLockBalance[msg.sender].add(_amount);
    }

    function setupShop(uint256 _amount) public payable{
        require(token.allowance(msg.sender, address(this)) > _amount);
        token.transferFrom(msg.sender, address(this), _amount);
        shopBalance[msg.sender] = _amount;
    }

    function deleteShop() public isCanDeleteShop{
        require(shopBalance[msg.sender] > 0);
        token.transferFrom(address(this),msg.sender, shopBalance[msg.sender]);
        shopBalance[msg.sender] = 0;
    }
}