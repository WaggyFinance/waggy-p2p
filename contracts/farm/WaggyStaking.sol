//SPDX-License-Identifier: Unlicense
/*
#   __      __    _____     ________   ________ _____.___.
#  /  \    /  \  /  _  \   /  _____/  /  _____/ \__  |   |
#  \   \/\/   / /  /_\  \ /   \  ___ /   \  ___  /   |   |
#   \        / /    |    \\    \_\  \\    \_\  \ \____   |
#    \__/\  /  \____|__  / \______  / \______  / / ______|
#         \/           \/         \/         \/  \/       
*/
pragma solidity 0.8.12;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "./../p2p/WaggyToken.sol";

// TODO Lock deposit time
contract WaggyStaking is OwnableUpgradeable {
  using SafeMath for uint256;

  // Info of each user.
  struct UserInfo {
    uint256 amount; // How many LP tokens the user has provided.
    uint256 rewardDebt; // Reward debt. See explanation below.
    uint256 depositBlock;
    bool inBlackList;
  }
  // Info of each pool.
  struct PoolInfo {
    ERC20 lpToken;
    uint256 endBlock;
    uint256 supply; // Supply this token
    uint256 allocPoint; // How many allocation points assigned to this pool. Wags to distribute per block.
    uint256 lastRewardBlock; // Last block number that Wags distribution occurs.
    uint256 accWagPerShare; // Accumulated Wags per share, times 1e12. See below.
  }

  // adminAddress
  address public adminAddress;
  // Info of each pool.
  PoolInfo[] public poolInfo;
  // Info of each user that stakes LP tokens.
  mapping(uint256 => mapping(address => UserInfo)) public userInfo;
  // Total allocation poitns. Must be the sum of all allocation points in all pools.
  uint256 public totalAllocPoint;

  WaggyToken public waggyToken;

  event Deposit(address indexed user, uint256 amount);
  event Withdraw(address indexed user, uint256 amount);
  event Claim(address indexed user, uint256 amount);
  event EmergencyWithdraw(address indexed user, uint256 amount);
  event AddPool(address user, address lpToken, uint256 allocPoint);
  event RemoveAllPool(address user);
  event SetAdmin(address user, address newAdmin);

  function initialize(
    ERC20 _lp,
    address _adminAddress,
    address _waggyToken
  ) public initializer {
    adminAddress = _adminAddress;
    waggyToken = WaggyToken(_waggyToken);
    __Ownable_init();
    // staking pool
    poolInfo.push(
      PoolInfo({ lpToken: _lp,endBlock:0, supply: 0, allocPoint: 1000, lastRewardBlock: block.number, accWagPerShare: 0 })
    );
    totalAllocPoint = 1000;
  }

  modifier onlyAdmin() {
    require(msg.sender == adminAddress, "admin: wut?");
    _;
  }

  function add(uint256 _allocPoint, ERC20 _lpToken) external onlyOwner {
    totalAllocPoint = totalAllocPoint.add(_allocPoint);
    poolInfo.push(
      PoolInfo({
        lpToken: _lpToken,
        endBlock:0,
        supply: 0,
        allocPoint: _allocPoint,
        lastRewardBlock: block.number,
        accWagPerShare: 0
      })
    );

    emit AddPool(msg.sender, address(_lpToken), _allocPoint);
  }

  function removeAllPool() external onlyOwner {
    delete poolInfo;

    emit RemoveAllPool(msg.sender);
  }

  // Update admin address by the previous dev.
  function setAdmin(address _adminAddress) external onlyOwner {
    adminAddress = _adminAddress;

    emit SetAdmin(msg.sender, _adminAddress);
  }

  // View function to see pending Reward on frontend.
  function pendingReward(uint256 _pid, address _user) public view returns (uint256) {
    PoolInfo memory pool = poolInfo[_pid];
    UserInfo memory user = userInfo[_pid][_user];

    if(user.depositBlock >= pool.endBlock) 
    {
      return 0;
    }

    uint256 fullPending = user.amount.mul(pool.accWagPerShare).div(1e12).sub(user.rewardDebt);

    uint256 rewardBlockRange = pool.endBlock - pool.lastRewardBlock;
    uint256 userStakeBlock = block.number - user.depositBlock;

    if(userStakeBlock >= rewardBlockRange){
      return fullPending;
    } 
    
    uint256 blockDiff = rewardBlockRange.sub(userStakeBlock); 
    uint256 multiplierDiff  = 100 - (blockDiff.mul(100).div(rewardBlockRange));

    return fullPending.mul(multiplierDiff).div(100);
  }

  // Refill reward in pool
  function refillPool(uint256 _pid, uint256 _amount,uint256 _endBlock) external {
    PoolInfo storage pool = poolInfo[_pid];
    pool.lpToken.transferFrom(msg.sender, address(this), _amount);
    pool.accWagPerShare = pool.accWagPerShare.add(_amount.mul(1e12).div(pool.supply));
    pool.lastRewardBlock = block.number;
    pool.endBlock =_endBlock;
  }

  function claimAll() public {
    for (uint256 index = 0; index < poolInfo.length; index++) {
      claim(index);
    }
  }

  function claim(uint256 _pid) public {
    PoolInfo storage pool = poolInfo[_pid];
    UserInfo storage user = userInfo[_pid][msg.sender];

    require(!user.inBlackList, "in black list");

    if (user.amount > 0) {
      uint256 pending = pendingReward(_pid,msg.sender);
      if (pending > 0) {
        user.rewardDebt = user.amount.mul(pool.accWagPerShare).div(1e12);
        pool.lpToken.transfer(address(msg.sender), pending);
      }

      emit Claim(msg.sender, pending);
    }
  }

  // Stake tokens to SmartChef
  function deposit(uint256 _pid, uint256 _amount) external {
    PoolInfo storage pool = poolInfo[_pid];
    UserInfo storage user = userInfo[_pid][msg.sender];

    require(!user.inBlackList, "in black list");

    if (user.amount > 0) {
      uint256 pending = pendingReward(_pid,msg.sender);
      if (pending > 0) {
        pool.lpToken.transfer(address(msg.sender), pending);
      }
    }
    if (_amount > 0) {
      pool.supply = pool.supply.add(_amount);
      waggyToken.transferFrom(msg.sender, address(this), _amount);
      user.amount = user.amount.add(_amount);
    }
    user.depositBlock = block.number;
    user.rewardDebt = user.amount.mul(pool.accWagPerShare).div(1e12);

    emit Deposit(msg.sender, _amount);
  }

  // Withdraw tokens from STAKING.
  function withdraw(uint256 _pid, uint256 _amount) external {
    PoolInfo storage pool = poolInfo[_pid];
    UserInfo storage user = userInfo[_pid][msg.sender];
    require(user.amount >= _amount, "withdraw: not good");
    // refillPool(_pid, _amount);
    uint256 pending = pendingReward(_pid,msg.sender);
    if (pending > 0 && !user.inBlackList) {
      pool.lpToken.transfer(address(msg.sender), pending);
    }
    if (_amount > 0) {
      pool.supply = pool.supply.sub(_amount);
      user.amount = user.amount.sub(_amount);
      waggyToken.transfer(msg.sender, _amount);
    }
    user.rewardDebt = user.amount.mul(pool.accWagPerShare).div(1e12);

    emit Withdraw(msg.sender, _amount);
  }

  // Withdraw without caring about rewards. EMERGENCY ONLY.
  function emergencyWithdraw(uint256 _pid) external {
    PoolInfo storage pool = poolInfo[_pid];
    UserInfo storage user = userInfo[_pid][msg.sender];
    waggyToken.transfer(msg.sender, user.amount);
    emit EmergencyWithdraw(msg.sender, user.amount);
    pool.supply = pool.supply.sub(user.amount);
    user.amount = 0;
    user.rewardDebt = 0;
  }
}
