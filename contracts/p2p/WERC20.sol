//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WERC20 is ERC20,Ownable{
    constructor(string memory name,string memory name2) ERC20(name, name2) {
        decimals();
        _mint(msg.sender, 100000000 * 10 **18);
    }
}