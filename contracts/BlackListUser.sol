//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract BlackListUser is Ownable {
  address[] public users;

  function addBlackListUser(address _user) external onlyOwner {
    users.push(_user);
  }

  function checkUserInBlackList(address _user) external view returns (bool) {
    bool foundedUser;
    for (uint256 i = 0; i < users.length; i++) {
        if(users[i] == _user) return true;
    }
    return foundedUser;
  }
}
