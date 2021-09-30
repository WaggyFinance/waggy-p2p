//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BUSD is ERC20,Ownable{
    constructor() ERC20("BUSD Token", "BUSD") {
        decimals();
        _mint(msg.sender, 100000000 * 10 **18);
    }
}