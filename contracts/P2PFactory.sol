//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";
import "./Merchant.sol";
import "./RewardCalculator.sol";
import "./MerchantData.sol";

contract P2PFactory is Ownable{

    MerchantData merchantData;

    constructor(address _factoryData){
        merchantData = MerchantData(_factoryData);
    }

    function updateGOVInMerchant(address _gov) public onlyOwner {
        for(uint i = 0; i < merchantData.getMerchantCount() ;i++){
            Merchant(merchantData.getMerchantAtIndex(i)).updateRewardCalculator(_gov);
        }
    }

    function updateRewardCalculatorInMerchant(address _rewardCalculator) public onlyOwner{
        for(uint i = 0; i < merchantData.getMerchantCount() ;i++){
             Merchant(merchantData.getMerchantAtIndex(i)).updateRewardCalculator(_rewardCalculator);
        }
    }

    function getMerchantByToken(address _token) public view returns(address){
        require(merchantData.getMerchantToken(_token) != address(0));
        return merchantData.getMerchantToken(_token);
    }

    function createNewMerchant(address _token,address _gov,address _rewardCalculator) public onlyOwner returns(address) {
        require(merchantData.getMerchantToken(_token) == address(0));
        address merchantAddress = address(new Merchant(_token,  _gov, _rewardCalculator));
        merchantData.setMerchantToken(_token,merchantAddress);
        merchantData.addMerchantAddress(merchantAddress);
        return merchantAddress;
    }

    function updateMechant(address _token,address _merchantAddress) public onlyOwner{
        merchantData.setMerchantToken(_token,_merchantAddress);
    }
}