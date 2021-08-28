//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";
import "./Merchant.sol";
import "./RewardCalculator.sol";
import "./FeeCalculator.sol";
import "./FactoryStorage.sol";
import "./MerchantStorage.sol";

contract P2PFactory is Ownable{

    FactoryStorage factoryStorage;

    event NewMerchantAddress(address merchantAddress);
    event NewMerchantStorageAddress(address merchantStorageAddress);
    event UpdateMerchantAddress(address token ,address merchantAddress);
    event UpdateGOVInMerchant(address gov);
    event UpdateRewardCalculator(address rewardCalculator);
    event UpdateFeeCalculator(address feeCalculator);

    address public feeCollector;

    constructor(address _factoryData,address _feeCollector){
        require(_feeCollector != address(0));
        factoryStorage = FactoryStorage(_factoryData);
        feeCollector = _feeCollector;
    }

    function getFactoryStorage() public view returns(address){
        return address(factoryStorage);
    }

    function updateGOVInMerchant(address _gov) public onlyOwner {
        for(uint i = 0; i < factoryStorage.getMerchantCount() ;i++){
            Merchant(factoryStorage.getMerchantAtIndex(i)).updateRewardCalculator(_gov);
        }

        emit UpdateGOVInMerchant(_gov);
    }

    function updateRewardCalculatorInMerchant(address _rewardCalculator) public onlyOwner{
        for(uint i = 0; i < factoryStorage.getMerchantCount() ;i++){
             Merchant(factoryStorage.getMerchantAtIndex(i)).updateRewardCalculator(_rewardCalculator);
        }

        emit UpdateRewardCalculator(_rewardCalculator);
    }

    function updateFeeCalculatorInMerchant(address _feeCalculator) public onlyOwner{
        for(uint i = 0; i < factoryStorage.getMerchantCount() ;i++){
             Merchant(factoryStorage.getMerchantAtIndex(i)).updateFeeCalculator(_feeCalculator);
        }

        emit UpdateFeeCalculator(_feeCalculator);
    }

    function getMerchantByToken(address _token) public view returns(address){
        require(factoryStorage.getMerchantToken(_token) != address(0));
        return factoryStorage.getMerchantToken(_token);
    }

    function createNewMerchant(address _token,address _gov,address _rewardCalculator,address _feeCalculator) public {
        require(factoryStorage.getMerchantToken(_token) == address(0));
        MerchantStorage merchantStorage = new MerchantStorage();
        Merchant merchant = new Merchant(_token,  _gov, _rewardCalculator, _feeCalculator,address(merchantStorage),feeCollector);
        address merchantAddress = address(merchant);
        merchantStorage.transferOwnership(merchantAddress);
        merchant.transferOwnership(owner());
        factoryStorage.setMerchantToken(_token,merchantAddress);
        factoryStorage.addMerchantAddress(merchantAddress);

        console.log("Create new merchant at address %s",merchantAddress);
        emit NewMerchantAddress(merchantAddress);
        emit NewMerchantStorageAddress(address(merchantStorage));
    }

    function updateMechant(address _token,address _merchantAddress) public onlyOwner{
        factoryStorage.setMerchantToken(_token,_merchantAddress);

        emit UpdateMerchantAddress(_token,_merchantAddress);
    }
}