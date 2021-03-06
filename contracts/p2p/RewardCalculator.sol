//SPDX-License-Identifier: Unlicense
/*
#   __      __    _____     ________   ________ _____.___.
#  /  \    /  \  /  _  \   /  _____/  /  _____/ \__  |   |
#  \   \/\/   / /  /_\  \ /   \  ___ /   \  ___  /   |   |
#   \        / /    |    \\    \_\  \\    \_\  \ \____   |
#    \__/\  /  \____|__  / \______  / \______  / / ______|
#         \/           \/         \/         \/  \/       
*/
pragma solidity 0.8.11;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RewardCalculator is Ownable {

    using SafeMath for uint256;

    uint256 public payRate = 800; //8%

    event UpdateRewardCalculatorRate(address user, uint256 rate);

    function calculateReward(uint256 _amount) external view returns(uint256){
        return _amount.mul(payRate).div(10000);
    }

    function updateRewardRate(uint256 _rate) external onlyOwner{
        payRate = _rate;

        emit UpdateRewardCalculatorRate(msg.sender, _rate);
    }
}