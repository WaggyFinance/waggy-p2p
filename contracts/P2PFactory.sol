//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";
import "./Merchant.sol";
import "./RewardCalculator.sol";

contract P2PFactory is Ownable{

    mapping (address => address) public merchant;
    address[] merchants;

    function updateGOVInMerchant(address _gov) public onlyOwner {
        for(uint i = 0; i < merchants.length ;i++){
            Merchant(merchants[i]).updateRewardCalculator(_gov);
        }
    }

    function updateRewardCalculatorInMerchant(address _rewardCalculator) public onlyOwner{
        for(uint i = 0; i < merchants.length ;i++){
            Merchant(merchants[i]).updateRewardCalculator(_rewardCalculator);
        }
    }

    function createNewMerchant(address _token,address _gov,address _rewardCalculator) public onlyOwner {
        require(merchant[_token] == address(0));
        merchant[_token] = address(new Merchant(_token,  _gov, _rewardCalculator));
        merchants.push(merchant[_token]);
    }

    function updateMechant(address _token,address _merchantAddress) public onlyOwner{
         merchant[_token] = _merchantAddress;
    }
}