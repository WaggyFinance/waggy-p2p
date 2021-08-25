//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./Merchant.sol";
import "./MerchantStorage.sol";
import "./FactoryStorage.sol";

contract Greeter {
  string greeting;
  MerchantStorage merchant;
  Merchant m;

  constructor(string memory _greeting) {
    console.log("Deploying a Greeter with greeting:", _greeting);
    greeting = _greeting;
  }

  function log() public view returns(address){
    return address(merchant);
  }

  function greet(address token) public view returns (string memory) {
    require(token != address(0));
  //  merchant = new MerchantStorage();

  //  Merchant merchant = new Merchant(0x878c068d7eb19908375e5D9a9B9CaDCb5F03C5BB,0x878c068d7eb19908375e5D9a9B9CaDCb5F03C5BB,0xc2EFaB9aB2Fc6Bffd2635Aa650d8E250d97C0f7B,address(merchant));

    return greeting;
  }

  function setGreeting(string memory _greeting) public {
    console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
    greeting = _greeting;
  }
}
