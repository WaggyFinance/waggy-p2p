//SPDX-License-Identifier: Unlicense
/*
#   __      __    _____     ________   ________ _____.___.
#  /  \    /  \  /  _  \   /  _____/  /  _____/ \__  |   |
#  \   \/\/   / /  /_\  \ /   \  ___ /   \  ___  /   |   |
#   \        / /    |    \\    \_\  \\    \_\  \ \____   |
#    \__/\  /  \____|__  / \______  / \______  / / ______|
#         \/           \/         \/         \/  \/       
*/

pragma solidity 0.8.11;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Timelock is ReentrancyGuard {
  using SafeMath for uint;

  event NewAdmin(address indexed newAdmin);
  event NewPendingAdmin(address indexed newPendingAdmin);
  event NewDelay(uint indexed newDelay);
  event CancelTransaction(bytes32 indexed txHash, address indexed target, uint value, string signature,  bytes data, uint eta);
  event ExecuteTransaction(bytes32 indexed txHash, address indexed target, uint value, string signature,  bytes data, uint eta);
  event QueueTransaction(bytes32 indexed txHash, address indexed target, uint value, string signature, bytes data, uint eta);

  uint public constant GRACE_PERIOD = 14 days;
  uint public constant MINIMUM_DELAY = 6 hours;
  uint public constant MAXIMUM_DELAY = 30 days;

  address public admin;
  address public pendingAdmin;
  uint public delay;
  bool public admin_initialized;

  mapping (bytes32 => bool) public queuedTransactions;

  // delay_ in seconds
  constructor(address admin_, uint delay_) {
    require(delay_ >= MINIMUM_DELAY, "Timelock::constructor: Delay must exceed minimum delay.");
    require(delay_ <= MAXIMUM_DELAY, "Timelock::constructor: Delay must not exceed maximum delay.");

    admin = admin_;
    delay = delay_;
    admin_initialized = false;
  }
  receive() external payable { }

  function setDelay(uint delay_) external {
    require(msg.sender == address(this), "Timelock::setDelay: Call must come from Timelock.");
    require(delay_ >= MINIMUM_DELAY, "Timelock::setDelay: Delay must exceed minimum delay.");
    require(delay_ <= MAXIMUM_DELAY, "Timelock::setDelay: Delay must not exceed maximum delay.");
    delay = delay_;

    emit NewDelay(delay);
  }

  function acceptAdmin() external {
    require(msg.sender == pendingAdmin, "Timelock::acceptAdmin: Call must come from pendingAdmin.");
    admin = msg.sender;
    pendingAdmin = address(0);

    emit NewAdmin(admin);
  }

  function setPendingAdmin(address pendingAdmin_) external {
    // allows one time setting of admin for deployment purposes
    if (admin_initialized) {
      require(msg.sender == address(this), "Timelock::setPendingAdmin: Call must come from Timelock.");
    } else {
      require(msg.sender == admin, "Timelock::setPendingAdmin: First call must come from admin.");
      admin_initialized = true;
    }
    pendingAdmin = pendingAdmin_;

    emit NewPendingAdmin(pendingAdmin);
  }

  function queueTransaction(
    address target,
    uint value,
    string calldata signature,
    bytes calldata data,
    uint eta
  ) external returns (bytes32) {
    require(msg.sender == admin, "Timelock::queueTransaction: Call must come from admin.");
    require(eta >= getBlockTimestamp().add(delay), "Timelock::queueTransaction: Estimated execution block must satisfy delay.");

    bytes32 txHash = keccak256(abi.encode(target, value, signature, data, eta));
    queuedTransactions[txHash] = true;

    emit QueueTransaction(txHash, target, value, signature, data, eta);
    return txHash;
  }

  function cancelTransaction(
    address target,
    uint value,
    string calldata signature,
    bytes calldata data,
    uint eta
  ) external {
    require(msg.sender == admin, "Timelock::cancelTransaction: Call must come from admin.");

    bytes32 txHash = keccak256(abi.encode(target, value, signature, data, eta));
    queuedTransactions[txHash] = false;

    emit CancelTransaction(txHash, target, value, signature, data, eta);
  }

  function _getRevertMsg(bytes memory _returnData) internal pure returns (string memory) {
    // If the _res length is less than 68, then the transaction failed silently (without a revert message)
    if (_returnData.length < 68) return "Transaction reverted silently";

    assembly {
        // Slice the sighash.
        _returnData := add(_returnData, 0x04)
    }
    return abi.decode(_returnData, (string)); // All that remains is the revert string
  }

  function executeTransaction(
    address target,
    uint value,
    string calldata signature,
    bytes calldata data,
    uint eta
  ) external payable nonReentrant returns (bytes memory) {
    require(msg.sender == admin, "Timelock::executeTransaction: Call must come from admin.");

    bytes32 txHash = keccak256(abi.encode(target, value, signature, data, eta));
    require(queuedTransactions[txHash], "Timelock::executeTransaction: Transaction hasn't been queued.");
    require(getBlockTimestamp() >= eta, "Timelock::executeTransaction: Transaction hasn't surpassed time lock.");
    require(getBlockTimestamp() <= eta.add(GRACE_PERIOD), "Timelock::executeTransaction: Transaction is stale.");

    queuedTransactions[txHash] = false;

    bytes memory callData;

    if (bytes(signature).length == 0) {
      callData = data;
    } else {
      callData = abi.encodePacked(bytes4(keccak256(bytes(signature))), data);
    }

    // solium-disable-next-line security/no-call-value
    (bool success, bytes memory returnData) = target.call{value: value}(callData);
    require(success, _getRevertMsg(returnData));

    emit ExecuteTransaction(txHash, target, value, signature, data, eta);

    return returnData;
  }

  function getBlockTimestamp() internal view returns (uint) {
    // solium-disable-next-line security/no-block-members
    return block.timestamp;
  }
}