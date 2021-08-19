//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RewardCalculator is Ownable {

    using SafeMath for uint256;

    uint256 payRate = 8; 

    function calculateReward(uint256 _amount) external view returns(uint256){
        return _amount.mul(payRate).div(100);
    }

    function updatePayRate(uint256 _rate) public onlyOwner{
        payRate = _rate;
    }
}