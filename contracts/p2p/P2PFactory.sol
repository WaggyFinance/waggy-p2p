/*
#   __      __    _____     ________   ________ _____.___.
#  /  \    /  \  /  _  \   /  _____/  /  _____/ \__  |   |
#  \   \/\/   / /  /_\  \ /   \  ___ /   \  ___  /   |   |
#   \        / /    |    \\    \_\  \\    \_\  \ \____   |
#    \__/\  /  \____|__  / \______  / \______  / / ______|
#         \/           \/         \/         \/  \/       
*/

//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Merchant.sol"; //TODO Interface
import "./FactoryStorage.sol";//TODO Interface
import "./MerchantStorage.sol";//TODO Interface

contract P2PFactory is Ownable {
  event NewMerchantAddress(address merchantAddress);
  event NewMerchantStorageAddress(address merchantStorageAddress);
  event UpdateMerchantAddress(address token, address merchantAddress);
  event UpdateGOVInMerchant(address gov);
  event UpdateRewardCalculator(address rewardCalculator);
  event UpdateFeeCalculator(address feeCalculator);

  FactoryStorage factoryStorage;
  address public feeCollector;

  constructor(address _factoryData, address _feeCollector) {
    require(_feeCollector != address(0));
    factoryStorage = FactoryStorage(_factoryData);
    feeCollector = _feeCollector;
  }

  function getFactoryStorage() public view returns (address) {
    return address(factoryStorage);
  }

  function getMerchantByToken(address _token) public view returns (address) {
    require(factoryStorage.getMerchantToken(_token) != address(0));
    return factoryStorage.getMerchantToken(_token);
  }

// move to script deploy
  // function createNewMerchant(
  //   address _token,
  //   address _gov,
  //   address _rewardCalculator,
  //   address _feeCalculator,
  //   address _blackListUser
  // ) public onlyOwner {
  //   require(factoryStorage.getMerchantToken(_token) == address(0));
  //   console.log("New merchant stroage.");
  //   MerchantStorage merchantStorage = new MerchantStorage();
  //   console.log("Begin create merchant");
  //   Merchant merchant = new Merchant(
  //     _token,
  //     _gov,
  //     _rewardCalculator,
  //     _feeCalculator,
  //     address(merchantStorage),
  //     feeCollector,
  //     _blackListUser
  //   );
  //   console.log("Transfer owner to new merchant");
  //   merchantStorage.transferOwnership(address(merchant));
  //   merchant.transferOwnership(owner());
  //   factoryStorage.setMerchantToken(_token, address(merchant));
  //   factoryStorage.addMerchantAddress(address(merchant));
  //   console.log("Emit event");
  //   emit NewMerchantAddress(address(merchant));
  //   emit NewMerchantStorageAddress(address(merchantStorage));
  // }

  function updateMechant(address _token, address _merchantAddress) public onlyOwner {
    factoryStorage.setMerchantToken(_token, _merchantAddress);
    emit UpdateMerchantAddress(_token, _merchantAddress);
  }
}
