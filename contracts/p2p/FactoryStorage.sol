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

contract FactoryStorage is Ownable{
    mapping (address => address) public merchant;
    address[] public merchants;

    function setMerchantToken(address _token,address _merchantAddress) external onlyOwner{
        merchant[_token] = _merchantAddress;
    }

    function getMerchantToken(address _token) external view returns(address){
        return merchant[_token];
    }

    function getMerchantsAddress() external view returns(address[] memory){
        return merchants;
    }

    function addMerchantAddress(address _merchantAddress) external onlyOwner{
        merchants.push(_merchantAddress);
    }

    function getMerchantCount() external view returns(uint256 length){
        length = merchants.length;
    }

    function getMerchantAtIndex(uint index) external view returns(address){
        return merchants[index];
    }
}