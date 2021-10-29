//SPDX-License-Identifier: Unlicense
/*
#   __      __    _____     ________   ________ _____.___.
#  /  \    /  \  /  _  \   /  _____/  /  _____/ \__  |   |
#  \   \/\/   / /  /_\  \ /   \  ___ /   \  ___  /   |   |
#   \        / /    |    \\    \_\  \\    \_\  \ \____   |
#    \__/\  /  \____|__  / \______  / \______  / / ______|
#         \/           \/         \/         \/  \/       
*/

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract WaggyToken is ERC20Upgradeable, OwnableUpgradeable, AccessControlUpgradeable {
  using SafeMath for uint256;

  bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

  modifier onlyGovernor() {
    require(_msgSender() == governor, "WAG::onlyGovernor::not governor");
    _;
  }

  /// @dev events
  event Lock(address indexed to, uint256 value);
  event CapChanged(uint256 prevCap, uint256 newCap);
  event GovernorChanged(address prevGovernor, address newGovernor);

  /// @dev private state variables
  uint256 private _totalLock;
  mapping(address => uint256) private _locks;
  mapping(address => uint256) private _lastUnlockBlock;

  uint256 public cap;
  address public governor;

  /// @dev public immutable state variables
  uint256 public startReleaseBlock;
  uint256 public endReleaseBlock;

  address[] public minters;

  function initialize(
    address _governor,
    uint256 _startReleaseBlock,
    uint256 _endReleaseBlock
  ) public initializer {
    __ERC20_init("Waggy Token", "WAG");
    __Ownable_init();
    __AccessControl_init();
    require(_endReleaseBlock > _startReleaseBlock, "WAG::constructor::endReleaseBlock < startReleaseBlock");
    cap = 100000000 * 10**18;
    governor = _governor;
    startReleaseBlock = _startReleaseBlock;
    endReleaseBlock = _endReleaseBlock;
  }

  /// @dev Set endReleaseBlock
  /// @param _endReleaseBlock The new endReleaseBlock
  function setEndReleaseBlock(uint256 _endReleaseBlock) external onlyOwner {
    endReleaseBlock = _endReleaseBlock;
  }

  /// @dev Set cap. Cap must lower than previous cap. Only Governor can adjust
  /// @param _cap The new cap
  function setCap(uint256 _cap) external onlyGovernor {
    require(_cap < cap, "WAG::setCap::_cap must < cap");
    uint256 prevCap = cap;
    cap = _cap;
    emit CapChanged(prevCap, cap);
  }

  /// @dev Set a new governor
  /// @param _governor The new governor
  function setGovernor(address _governor) external onlyGovernor {
    require(governor != _governor, "WAG::setGovernor::no self set");
    address prevGov = governor;
    governor = _governor;
    emit GovernorChanged(prevGov, governor);
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
    require(totalSupply().add(_amount) < cap, "WAG::mint::cap exceeded");
    _mint(_receiver, _amount);
    _moveDelegates(address(0), _delegates[_receiver], _amount);
  }

  /// @dev A generic transfer function with moveDelegates
  /// @param _recipient The address of the account that will be credited
  /// @param _amount The amount to be moved
  function transfer(address _recipient, uint256 _amount) public virtual override returns (bool) {
    _transfer(_msgSender(), _recipient, _amount);
    _moveDelegates(_delegates[_msgSender()], _delegates[_recipient], _amount);
    return true;
  }

  /// @dev A generic transferFrom function with moveDelegates
  /// @param _sender The address of the account that will be debited
  /// @param _recipient The address of the account that will be credited
  /// @param _amount The amount to be moved
  function transferFrom(
    address _sender,
    address _recipient,
    uint256 _amount
  ) public virtual override returns (bool) {
    _transfer(_sender, _recipient, _amount);
    _approve(
      _sender,
      _msgSender(),
      allowance(_sender, _msgSender()).sub(_amount, "WAG::transferFrom::transfer amount exceeds allowance")
    );
    _moveDelegates(_delegates[_sender], _delegates[_recipient], _amount);
    return true;
  }

  /// @dev Move both locked and unlocked WAG to another account
  /// @param _to The address to be received locked and unlocked WAG
  function transferAll(address _to) external {
    require(msg.sender != _to, "WAG::transferAll::no self-transferAll");

    _locks[_to] = _locks[_to].add(_locks[msg.sender]);

    if (_lastUnlockBlock[_to] < startReleaseBlock) {
      _lastUnlockBlock[_to] = startReleaseBlock;
    } else if (block.number < endReleaseBlock) {
      uint256 fromUnlocked = canUnlockAmount(msg.sender);
      uint256 toUnlocked = canUnlockAmount(_to);
      uint256 numerator = block
        .number
        .mul(_locks[msg.sender])
        .add(block.number.mul(_locks[_to]))
        .sub(endReleaseBlock.mul(fromUnlocked))
        .sub(endReleaseBlock.mul(toUnlocked));
      uint256 denominator = _locks[msg.sender].add(_locks[_to]).sub(fromUnlocked).sub(toUnlocked);
      _lastUnlockBlock[_to] = numerator.div(denominator);
    }

    _locks[msg.sender] = 0;
    _lastUnlockBlock[msg.sender] = 0;

    _moveDelegates(_delegates[_msgSender()], _delegates[_to], balanceOf(_msgSender()));
    _transfer(msg.sender, _to, balanceOf(_msgSender()));
  }

  /// @dev Return the total balance (locked + unlocked) of a given account
  /// @param _account The address that you want to know the total balance
  function totalBalanceOf(address _account) external view returns (uint256) {
    return _locks[_account].add(balanceOf(_account));
  }

  // Lock section

  /// @dev Return unlocked WAG
  function unlockedSupply() external view returns (uint256) {
    return totalSupply().sub(totalLock());
  }

  /// @dev Return totalLocked WAG
  function totalLock() public view returns (uint256) {
    return _totalLock;
  }

  /// @dev Return the locked WAG of a given account
  /// @param _account The address that you want to know the locked WAG
  function lockOf(address _account) external view returns (uint256) {
    return _locks[_account];
  }

  /// @dev Return unlock for a given account
  /// @param _account The address that you want to know the last unlock block
  function lastUnlockBlock(address _account) external view returns (uint256) {
    return _lastUnlockBlock[_account];
  }

  /// @dev Lock WAG based-on the command from MasterChef
  /// @param _account The address that will own this locked amount
  /// @param _amount The locked amount
  function lock(address _account, uint256 _amount) external onlyOwner {
    require(_account != address(this), "WAG::lock::no lock to token address");
    require(_account != address(0), "WAG::lock::no lock to address(0)");
    require(_amount <= balanceOf(_account), "WAG::lock::no lock over balance");

    _transfer(_account, address(this), _amount);

    _locks[_account] = _locks[_account].add(_amount);
    _totalLock = _totalLock.add(_amount);

    if (_lastUnlockBlock[_account] < startReleaseBlock) {
      _lastUnlockBlock[_account] = startReleaseBlock;
    }

    emit Lock(_account, _amount);
  }

  /// @dev Return how many WAG is unlocked for a given account
  /// @param _account The address that want to check canUnlockAmount
  function canUnlockAmount(address _account) public view returns (uint256) {
    // When block number less than startReleaseBlock, no WAG can be unlocked
    if (block.number < startReleaseBlock) {
      return 0;
    }
    // When block number more than endReleaseBlock, all locked WAG can be unlocked
    else if (block.number >= endReleaseBlock) {
      return _locks[_account];
    }
    // When block number is more than startReleaseBlock but less than endReleaseBlock,
    // some WAG can be released
    else {
      uint256 releasedBlock = block.number.sub(_lastUnlockBlock[_account]);
      uint256 blockLeft = endReleaseBlock.sub(_lastUnlockBlock[_account]);
      return _locks[_account].mul(releasedBlock).div(blockLeft);
    }
  }

  /// @dev Claim unlocked WAG after the release schedule is reached
  function unlock() external {
    require(_locks[msg.sender] > 0, "WAG::unlock::no locked WAG");

    uint256 amount = canUnlockAmount(msg.sender);

    _transfer(address(this), msg.sender, amount);
    _locks[msg.sender] = _locks[msg.sender].sub(amount);
    _lastUnlockBlock[msg.sender] = block.number;
    _totalLock = _totalLock.sub(amount);
  }

  // Copied and modified from YAM code:
  // https://github.com/yam-finance/yam-protocol/blob/master/contracts/token/YAMGovernanceStorage.sol
  // https://github.com/yam-finance/yam-protocol/blob/master/contracts/token/YAMGovernance.sol
  // Which is copied and modified from COMPOUND:
  // https://github.com/compound-finance/compound-protocol/blob/master/contracts/Governance/Comp.sol

  mapping(address => address) internal _delegates;

  /// @notice A checkpoint for marking number of votes from a given block
  struct Checkpoint {
    uint32 fromBlock;
    uint256 votes;
  }

  /// @notice A record of votes checkpoints for each account, by index
  mapping(address => mapping(uint32 => Checkpoint)) public checkpoints;

  /// @notice The number of checkpoints for each account
  mapping(address => uint32) public numCheckpoints;

  /// @notice The EIP-712 typehash for the contract's domain
  bytes32 public constant DOMAIN_TYPEHASH =
    keccak256("EIP712Domain(string name,uint256 chainId,address verifyingContract)");

  /// @notice The EIP-712 typehash for the delegation struct used by the contract
  bytes32 public constant DELEGATION_TYPEHASH = keccak256("Delegation(address delegatee,uint256 nonce,uint256 expiry)");

  /// @notice A record of states for signing / validating signatures
  mapping(address => uint256) public nonces;

  /// @notice An event thats emitted when an account changes its delegate
  event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate);

  /// @notice An event thats emitted when a delegate account's vote balance changes
  event DelegateVotesChanged(address indexed delegate, uint256 previousBalance, uint256 newBalance);

  /**
   * @notice Delegate votes from `msg.sender` to `delegatee`
   * @param delegator The address to get delegatee for
   */
  function delegates(address delegator) external view returns (address) {
    return _delegates[delegator];
  }

  /**
   * @notice Delegate votes from `msg.sender` to `delegatee`
   * @param delegatee The address to delegate votes to
   */
  function delegate(address delegatee) external {
    return _delegate(msg.sender, delegatee);
  }

  /**
   * @notice Delegates votes from signatory to `delegatee`
   * @param delegatee The address to delegate votes to
   * @param nonce The contract state required to match the signature
   * @param expiry The time at which to expire the signature
   * @param v The recovery byte of the signature
   * @param r Half of the ECDSA signature pair
   * @param s Half of the ECDSA signature pair
   */
  function delegateBySig(
    address delegatee,
    uint256 nonce,
    uint256 expiry,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external {
    bytes32 domainSeparator = keccak256(
      abi.encode(DOMAIN_TYPEHASH, keccak256(bytes(name())), getChainId(), address(this))
    );

    bytes32 structHash = keccak256(abi.encode(DELEGATION_TYPEHASH, delegatee, nonce, expiry));

    bytes32 digest = keccak256(abi.encodePacked("\x19\x01", domainSeparator, structHash));

    address signatory = ecrecover(digest, v, r, s);
    require(signatory != address(0), "WAG::delegateBySig: invalid signature");
    require(nonce == nonces[signatory]++, "WAG::delegateBySig: invalid nonce");
    require(block.timestamp <= expiry, "WAG::delegateBySig: signature expired");
    return _delegate(signatory, delegatee);
  }

  /**
   * @notice Gets the current votes balance for `account`
   * @param account The address to get votes balance
   * @return The number of current votes for `account`
   */
  function getCurrentVotes(address account) external view returns (uint256) {
    uint32 nCheckpoints = numCheckpoints[account];
    return nCheckpoints > 0 ? checkpoints[account][nCheckpoints - 1].votes : 0;
  }

  /**
   * @notice Determine the prior number of votes for an account as of a block number
   * @dev Block number must be a finalized block or else this function will revert to prevent misinformation.
   * @param account The address of the account to check
   * @param blockNumber The block number to get the vote balance at
   * @return The number of votes the account had as of the given block
   */
  function getPriorVotes(address account, uint256 blockNumber) external view returns (uint256) {
    require(blockNumber < block.number, "WAG::getPriorVotes: not yet determined");

    uint32 nCheckpoints = numCheckpoints[account];
    if (nCheckpoints == 0) {
      return 0;
    }

    // First check most recent balance
    if (checkpoints[account][nCheckpoints - 1].fromBlock <= blockNumber) {
      return checkpoints[account][nCheckpoints - 1].votes;
    }

    // Next check implicit zero balance
    if (checkpoints[account][0].fromBlock > blockNumber) {
      return 0;
    }

    uint32 lower = 0;
    uint32 upper = nCheckpoints - 1;
    while (upper > lower) {
      uint32 center = upper - (upper - lower) / 2; // ceil, avoiding overflow
      Checkpoint memory cp = checkpoints[account][center];
      if (cp.fromBlock == blockNumber) {
        return cp.votes;
      } else if (cp.fromBlock < blockNumber) {
        lower = center;
      } else {
        upper = center - 1;
      }
    }
    return checkpoints[account][lower].votes;
  }

  function _delegate(address delegator, address delegatee) internal {
    address currentDelegate = _delegates[delegator];
    uint256 delegatorBalance = balanceOf(delegator); // balance of underlying WAG (not scaled);
    _delegates[delegator] = delegatee;

    emit DelegateChanged(delegator, currentDelegate, delegatee);

    _moveDelegates(currentDelegate, delegatee, delegatorBalance);
  }

  function _moveDelegates(
    address srcRep,
    address dstRep,
    uint256 amount
  ) internal {
    if (srcRep != dstRep && amount > 0) {
      if (srcRep != address(0)) {
        // decrease old representative
        uint32 srcRepNum = numCheckpoints[srcRep];
        uint256 srcRepOld = srcRepNum > 0 ? checkpoints[srcRep][srcRepNum - 1].votes : 0;
        uint256 srcRepNew = srcRepOld.sub(amount);
        _writeCheckpoint(srcRep, srcRepNum, srcRepOld, srcRepNew);
      }

      if (dstRep != address(0)) {
        // increase new representative
        uint32 dstRepNum = numCheckpoints[dstRep];
        uint256 dstRepOld = dstRepNum > 0 ? checkpoints[dstRep][dstRepNum - 1].votes : 0;
        uint256 dstRepNew = dstRepOld.add(amount);
        _writeCheckpoint(dstRep, dstRepNum, dstRepOld, dstRepNew);
      }
    }
  }

  function _writeCheckpoint(
    address delegatee,
    uint32 nCheckpoints,
    uint256 oldVotes,
    uint256 newVotes
  ) internal {
    uint32 blockNumber = safe32(block.number, "WAG::_writeCheckpoint: block number exceeds 32 bits");

    if (nCheckpoints > 0 && checkpoints[delegatee][nCheckpoints - 1].fromBlock == blockNumber) {
      checkpoints[delegatee][nCheckpoints - 1].votes = newVotes;
    } else {
      checkpoints[delegatee][nCheckpoints] = Checkpoint(blockNumber, newVotes);
      numCheckpoints[delegatee] = nCheckpoints + 1;
    }

    emit DelegateVotesChanged(delegatee, oldVotes, newVotes);
  }

  function safe32(uint256 n, string memory errorMessage) internal pure returns (uint32) {
    require(n < 2**32, errorMessage);
    return uint32(n);
  }

  function getChainId() internal view returns (uint256) {
    uint256 chainId;
    assembly {
      chainId := chainid()
    }
    return chainId;
  }
}
