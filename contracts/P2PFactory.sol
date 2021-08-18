//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";
import "./Merchant.sol";

contract P2PFactory is Ownable{

    mapping (address => address) public merchant;

    function createNewMerchant(address _token) public onlyOwner{
        require(merchant[_token] == address(0));
        merchant[_token] = address(new Merchant(_token));
    }

    function updateMechant(address _token,address _merchantAddress) public onlyOwner{
         merchant[_token] = _merchantAddress;
    }
}