//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./../p2p/WaggyToken.sol";

contract MasterWaggy is Ownable {
    using SafeMath for uint256;

    // Info of each user.
    struct UserInfo {
        uint256 amount; // How many Staking tokens the user has provided.
        uint256 rewardDebt; // Reward debt. See explanation below.
        uint256 bonusDebt; // Last block that user exec something to the pool.
        address fundedBy;
        uint256 depositTime;
    }

    // Info of each pool.
    struct PoolInfo {
        ERC20 rewardToken;
        uint256 lastRewardBlock;
        uint256 totalDeposit;
        uint256 fund;
    }

    event ADD_POOL(address _rewardToken);
    event DEPOSIT(address _rewardToken,address _user,uint256 _amount);
    event WITHDRAW(address _rewardToken,address _user,uint256 _amount);

    mapping(address => PoolInfo) pools;
    mapping(address => mapping(address => UserInfo)) public userInfo;

    WaggyToken waggyToken;
    address[] poolsTokens;

    constructor(address _waggyToken) {
        waggyToken = WaggyToken(_waggyToken);
    }

    function addPool(address _rewardToken) external onlyOwner {
        require(_rewardToken != address(0), "Not allow address(0)");
        require(
            address(pools[_rewardToken].rewardToken) == address(0),
            "Pool already exist"
        );

        pools[_rewardToken] = PoolInfo({
            rewardToken: ERC20(_rewardToken),
            lastRewardBlock: block.number,
            totalDeposit: 0,
            fund: 0
        });

        poolsTokens.push(_rewardToken);

        emit ADD_POOL(_rewardToken);
    }

    function deposit(address _poolToken, uint256 _amount) external {
        require(
            waggyToken.balanceOf(msg.sender) >= _amount,
            "Balance not enougth"
        );
        require(
            address(pools[_poolToken].rewardToken) != address(0),
            "Pool is not exist"
        );

        PoolInfo storage pool = pools[_poolToken];
        UserInfo storage user = userInfo[msg.sender][_poolToken];

        if (user.amount > 0) harvest(msg.sender, _poolToken);
        waggyToken.transferFrom(msg.sender, address(this), _amount);
        user.depositTime = block.timestamp;
        user.amount = user.amount.add(_amount);

        pool.totalDeposit = pool.totalDeposit.add(_amount);

        emit DEPOSIT(_poolToken,msg.sender,_amount);
    }

    function withdraw(
        address _for,
        address _poolToken,
        uint256 _amount
    ) external {
        require(
            address(pools[_poolToken].rewardToken) != address(0),
            "Pool is not exist"
        );
        PoolInfo storage pool = pools[_poolToken];
        UserInfo storage user = userInfo[_for][_poolToken];

        require(_amount <= user.amount, "Balance not enougth");
        if (user.amount > 0) harvest(_for, _poolToken);
        user.depositTime = block.timestamp;
        user.amount = user.amount.sub(_amount);
        pool.totalDeposit = pool.totalDeposit.sub(_amount);
        waggyToken.transferFrom(address(this), _for, _amount);

        emit WITHDRAW(_poolToken,msg.sender,_amount);
    }

    function getPendingReward(address _for, address _poolToken) public view returns(uint256){
        PoolInfo storage pool = pools[_poolToken];
        UserInfo storage user = userInfo[_for][_poolToken];
        uint256 rewardPerWAG = pool.fund.div(pool.totalDeposit);
        uint256 reward = rewardPerWAG * user.amount;
        uint256 rewardDebt = block
            .timestamp
            .sub(user.depositTime)
            .mul(reward)
            .div(86400);

        return rewardDebt;
    }

    function harvest(address _for, address _poolToken) public {
        PoolInfo storage pool = pools[_poolToken];
        UserInfo storage user = userInfo[_for][_poolToken];
        uint256 rewardDebt = getPendingReward(_for,_poolToken);
        pool.rewardToken.transferFrom(address(this), _for, rewardDebt);
        user.rewardDebt = 0;
    }

    function claimAll() external {
        for(uint i =0 ;i< poolsTokens.length;i++){
            harvest(msg.sender,poolsTokens[i]);
        }
    }

    function getTotalValueLock() external view returns(uint256){
        uint256 total;
        for(uint i =0 ;i< poolsTokens.length;i++){
            total =total.add(pools[poolsTokens[i]].totalDeposit);
        }
        return total;
    }
}
