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

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract BlackListUser is Ownable {
  using SafeMath for uint256;

  enum STATUS {
    NORMAL,
    TEMPORARY,
    SUSPEND
  }

  uint256 private constant ALLOW_LIMIT_TEMPORARY = 2;
  uint256 private constant ALLOW_LIMIT_SUSPEND = 2;

  struct UserInfo {
    STATUS status;
    uint256 amount;
    uint256 totalWarning;
    uint256 lastWarning;
    uint256 suspendAt;
  }

  mapping(address => UserInfo) userInfo;

  // Status 0 normal, 1 temporary,2 suspend
  function setUserStatus(address _user, uint256 _status) external onlyOwner {
    userInfo[_user].status = STATUS(_status);
  }

  // set warning user count.
  function warningUser(address _user) external onlyOwner {
    UserInfo storage user = userInfo[_user];
    require(user.status == STATUS.NORMAL, "Can't warning not normal status user.");

    uint256 diffTime = block.timestamp.sub(user.lastWarning).div(1 days);
    if (diffTime == 0) {
      user.amount = user.amount.add(1);
      if (user.amount >= ALLOW_LIMIT_TEMPORARY) {
        user.status = STATUS.TEMPORARY;
        user.amount = 0;
        user.totalWarning = user.totalWarning.add(1);
        user.lastWarning = block.timestamp;
        if (user.totalWarning >= ALLOW_LIMIT_SUSPEND) {
          user.status = STATUS.SUSPEND;
          user.suspendAt = block.timestamp;
        }
      }
    } else {
      user.amount = 1;
    }
  }

  function checkUserStatus(address _user) external returns(uint256) {
    UserInfo storage user = userInfo[_user];
    if (user.status == STATUS.SUSPEND || user.status == STATUS.NORMAL) {
      return uint256(user.status);
    }
    uint256 diffTime = block.timestamp.sub(user.lastWarning).div(1 days);
    if (diffTime > 0 && user.status == STATUS.TEMPORARY) {
      user.status = STATUS.NORMAL;
      user.amount = 0;
      return uint256(user.status);
    }
    return uint256(user.status);
  }

  function getUserStatus(address _user) external view returns (uint256) {
    return uint256(userInfo[_user].status);
  }
}
