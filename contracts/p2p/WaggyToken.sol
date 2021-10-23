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

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WaggyToken is ERC20, Ownable, AccessControl {
  bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

  address[] public minters;

  constructor() ERC20("Waggy Token", "WAG") {
    decimals();
    _mint(msg.sender, 100000000 * 10**18);
  }

  function setMinter(address[] memory _minters) external onlyOwner {
    revokeRoles(minters);
    delete minters;
    for (uint256 i = 0; i < _minters.length; ++i) {
      minters.push(_minters[i]);
      _setupRole(MINTER_ROLE, _minters[i]);
    }
  }

  function revokeRoles(address[] memory _minters) public onlyOwner {
    for (uint256 i = 0; i < _minters.length; ++i) {
      revokeRole(MINTER_ROLE, _minters[i]);
    }
  }

  function mint(address _receiver, uint256 _amount) external {
    // Only minters can mint
    require(hasRole(MINTER_ROLE, msg.sender), "DOES_NOT_HAVE_MINTER_ROLE");
    _mint(_receiver, _amount);
  }
}
