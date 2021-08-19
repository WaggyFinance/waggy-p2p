//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract MerchantData {
    mapping (address => address) public merchant;
    address[] public merchants;

    function setMerchantToken(address _token,address _merchantAddress) external {
        merchant[_token] = _merchantAddress;
    }

    function getMerchantToken(address _token) external view returns(address){
        return merchant[_token];
    }

    function addMerchantAddress(address _merchantAddress) external {
        merchants.push(_merchantAddress);
    }

    function getMerchantCount() external view returns(uint256 length){
        length = merchants.length;
    }

    function getMerchantAtIndex(uint index) external view returns(address){
        return merchants[index];
    }
}