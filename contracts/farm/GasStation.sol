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

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";

interface WNFT {
  function getWeight(uint256 tokenId) external returns (uint256);

  function transferFrom(
    address from,
    address to,
    uint256 tokenId
  ) external;
}

contract GasStation is OwnableUpgradeable, ERC721Holder, ReentrancyGuardUpgradeable {
  using SafeMath for uint256;
  using SafeERC20 for IERC20;

  // Info of each user.
  struct UserInfo {
    mapping(address => mapping(uint256 => bool)) stakedNFT; // user.stakedNFT[_nftAddress][_tokenId] = true;
    uint256 amount;
    uint256 depositBlock;
    uint256 rewardDebt; // Reward debt. See explanation below.
  }

  // Info of each reward distribution campaign.
  struct CampaignInfo {
    WNFT stakingToken; // Address of Staking token contract.
    IERC20 rewardToken; // Address of Reward token contract
    uint256 startBlock; // start block of the campaign
    uint256 lastRewardBlock; // Last block number that Reward Token distribution occurs.
    uint256 accRewardPerShare; // Accumulated Reward Token per share, times 1e12. See below.
    uint256 totalStaked; // total staked amount each campaign's stake token, typically, each campaign has the same stake token, so need to track it separatedly
    uint256 totalRewards;
  }

  // Reward info
  struct RewardInfo {
    uint256 endBlock;
    uint256 rewardPerBlock;
  }

  // @dev this is mostly used for extending reward period
  // @notice Reward info is a set of {endBlock, rewardPerBlock}
  // indexed by campaigh ID
  mapping(uint256 => RewardInfo[]) public campaignRewardInfo;

  // @notice Info of each campaign. mapped from campaigh ID
  CampaignInfo[] public campaignInfo;
  // Info of each user that stakes Staking tokens.
  mapping(uint256 => mapping(address => UserInfo)) public userInfo;

  // @dev reward holder account
  address public rewardHolder;

  event Deposit(address indexed user, uint256 amount, uint256 campaign);
  event Withdraw(address indexed user, uint256 amount, uint256 campaign);
  event EmergencyWithdraw(address indexed user, uint256 amount, uint256 indexed campaign);
  event AddCampaignInfo(uint256 indexed campaignID, address stakingToken, IERC20 rewardToken, uint256 startBlock);
  event AddRewardInfo(uint256 indexed campaignID, uint256 indexed phase, uint256 endBlock, uint256 rewardPerBlock);
  event SetRewardHolder(address rewardHolder);
  event Harvest(address indexed user, uint256 amount, uint256 campaign);

  function initialize(address _rewardHolder) public initializer {
    OwnableUpgradeable.__Ownable_init();
    ReentrancyGuardUpgradeable.__ReentrancyGuard_init();

    rewardHolder = _rewardHolder;
  }

  /// @notice function for setting a reward holder who is responsible for adding a reward info
  function setRewardHolder(address _rewardHolder) external onlyOwner {
    rewardHolder = _rewardHolder;
    emit SetRewardHolder(_rewardHolder);
  }

  /// @notice reward campaign, one campaign represents a pair of staking and reward token, last reward Block and acc reward Per Share
  function addCampaignInfo(
    WNFT _stakingToken,
    IERC20 _rewardToken,
    uint256 _startBlock
  ) external onlyOwner {
    campaignInfo.push(
      CampaignInfo({
        stakingToken: _stakingToken,
        rewardToken: _rewardToken,
        startBlock: _startBlock,
        lastRewardBlock: _startBlock,
        accRewardPerShare: 0,
        totalStaked: 0,
        totalRewards: 0
      })
    );
    emit AddCampaignInfo(campaignInfo.length - 1, address(_stakingToken), _rewardToken, _startBlock);
  }

  /// @notice if the new reward info is added, the reward & its end block will be extended by the newly pushed reward info.
  function addRewardInfo(
    uint256 _campaignID,
    uint256 _endBlock,
    uint256 _rewardPerBlock
  ) external onlyOwner {
    RewardInfo[] storage rewardInfo = campaignRewardInfo[_campaignID];
    CampaignInfo storage campaign = campaignInfo[_campaignID];
    require(
      rewardInfo.length == 0 || rewardInfo[rewardInfo.length - 1].endBlock >= block.number,
      "GS::addRewardInfo::reward period ended"
    );
    require(
      rewardInfo.length == 0 || rewardInfo[rewardInfo.length - 1].endBlock < _endBlock,
      "GS::addRewardInfo::bad new endblock"
    );
    uint256 startBlock = rewardInfo.length == 0 ? campaign.startBlock : rewardInfo[rewardInfo.length - 1].endBlock;
    uint256 blockRange = _endBlock.sub(startBlock);
    uint256 totalRewards = _rewardPerBlock.mul(blockRange);
    campaign.rewardToken.safeTransferFrom(rewardHolder, address(this), totalRewards);
    campaign.totalRewards = campaign.totalRewards.add(totalRewards);
    rewardInfo.push(RewardInfo({ endBlock: _endBlock, rewardPerBlock: _rewardPerBlock }));
    emit AddRewardInfo(_campaignID, rewardInfo.length - 1, _endBlock, _rewardPerBlock);
  }

  function rewardInfoLen(uint256 _campaignID) external view returns (uint256) {
    return campaignRewardInfo[_campaignID].length;
  }

  function campaignInfoLen() external view returns (uint256) {
    return campaignInfo.length;
  }

  /// @notice this will return  end block based on the current block number.
  function currentEndBlock(uint256 _campaignID) external view returns (uint256) {
    return _endBlockOf(_campaignID, block.number);
  }

  function _endBlockOf(uint256 _campaignID, uint256 _blockNumber) internal view returns (uint256) {
    RewardInfo[] memory rewardInfo = campaignRewardInfo[_campaignID];
    uint256 len = rewardInfo.length;
    if (len == 0) {
      return 0;
    }
    for (uint256 i = 0; i < len; ++i) {
      if (_blockNumber <= rewardInfo[i].endBlock) return rewardInfo[i].endBlock;
    }
    // @dev when couldn't find any reward info, it means that _blockNumber exceed endblock
    // so return the latest reward info.
    return rewardInfo[len - 1].endBlock;
  }

  /// @notice this will return reward per block based on the current block number.
  function currentRewardPerBlock(uint256 _campaignID) external view returns (uint256) {
    return _rewardPerBlockOf(_campaignID, block.number);
  }

  function _rewardPerBlockOf(uint256 _campaignID, uint256 _blockNumber) internal view returns (uint256) {
    RewardInfo[] memory rewardInfo = campaignRewardInfo[_campaignID];
    uint256 len = rewardInfo.length;
    if (len == 0) {
      return 0;
    }
    for (uint256 i = 0; i < len; ++i) {
      if (_blockNumber <= rewardInfo[i].endBlock) return rewardInfo[i].rewardPerBlock;
    }
    // @dev when couldn't find any reward info, it means that timestamp exceed endblock
    // so return 0
    return 0;
  }

  /// @notice Return reward multiplier over the given _from to _to block.
  function getMultiplier(
    uint256 _from,
    uint256 _to,
    uint256 _endBlock
  ) public pure returns (uint256) {
    if ((_from >= _endBlock) || (_from > _to)) {
      return 0;
    }
    if (_to <= _endBlock) {
      return _to.sub(_from);
    }
    return _endBlock.sub(_from);
  }

  /// @notice View function to see pending Reward on frontend.
  function pendingReward(uint256 _campaignID, address _user) external view returns (uint256) {
    return _pendingReward(_campaignID, userInfo[_campaignID][_user].amount, userInfo[_campaignID][_user].rewardDebt);
  }

  function _pendingReward(
    uint256 _campaignID,
    uint256 _amount,
    uint256 _rewardDebt
  ) internal view returns (uint256) {
    CampaignInfo memory campaign = campaignInfo[_campaignID];
    RewardInfo[] memory rewardInfo = campaignRewardInfo[_campaignID];
    uint256 accRewardPerShare = campaign.accRewardPerShare;
    if (block.number > campaign.lastRewardBlock && campaign.totalStaked != 0) {
      uint256 cursor = campaign.lastRewardBlock;
      for (uint256 i = 0; i < rewardInfo.length; ++i) {
        uint256 multiplier = getMultiplier(cursor, block.number, rewardInfo[i].endBlock);
        if (multiplier == 0) continue;
        cursor = rewardInfo[i].endBlock;
        accRewardPerShare = accRewardPerShare.add(
          multiplier.mul(rewardInfo[i].rewardPerBlock).mul(1e12).div(campaign.totalStaked)
        );
      }
    }
    return _amount.mul(accRewardPerShare).div(1e12).sub(_rewardDebt);
  }

  function updateCampaign(uint256 _campaignID) external nonReentrant {
    _updateCampaign(_campaignID);
  }

  /// @notice Update reward variables of the given campaign to be up-to-date.
  function _updateCampaign(uint256 _campaignID) internal {
    CampaignInfo storage campaign = campaignInfo[_campaignID];
    RewardInfo[] memory rewardInfo = campaignRewardInfo[_campaignID];
    if (block.number <= campaign.lastRewardBlock) {
      return;
    }
    if (campaign.totalStaked == 0) {
      // if there is no total supply, return and use the campaign's start block as the last reward block
      // so that ALL reward will be distributed.
      // however, if the first deposit is out of reward period, last reward block will be its block number
      // in order to keep the multiplier = 0
      if (block.number > _endBlockOf(_campaignID, block.number)) {
        campaign.lastRewardBlock = block.number;
      }
      return;
    }
    // @dev for each reward info
    for (uint256 i = 0; i < rewardInfo.length; ++i) {
      // @dev get multiplier based on current Block and rewardInfo's end block
      // multiplier will be a range of either (current block - campaign.lastRewardBlock)
      // or (reward info's endblock - campaign.lastRewardBlock) or 0
      uint256 multiplier = getMultiplier(campaign.lastRewardBlock, block.number, rewardInfo[i].endBlock);
      if (multiplier == 0) continue;
      // @dev if currentBlock exceed end block, use end block as the last reward block
      // so that for the next iteration, previous endBlock will be used as the last reward block
      if (block.number > rewardInfo[i].endBlock) {
        campaign.lastRewardBlock = rewardInfo[i].endBlock;
      } else {
        campaign.lastRewardBlock = block.number;
      }
      campaign.accRewardPerShare = campaign.accRewardPerShare.add(
        multiplier.mul(rewardInfo[i].rewardPerBlock).mul(1e12).div(campaign.totalStaked)
      );
    }
  }

  /// @notice Update reward variables for all campaigns. gas spending is HIGH in this method call, BE CAREFUL
  function massUpdateCampaigns() external nonReentrant {
    uint256 length = campaignInfo.length;
    for (uint256 pid = 0; pid < length; ++pid) {
      _updateCampaign(pid);
    }
  }

  /// @notice Stake Staking tokens to DripBar
  function deposit(uint256 _campaignID, uint256 _tokenId) external nonReentrant {
    CampaignInfo storage campaign = campaignInfo[_campaignID];
    UserInfo storage user = userInfo[_campaignID][msg.sender];
    require(!user.stakedNFT[address(campaign.stakingToken)][_tokenId], "GasStation::withdraw::TokenId already staked");
    _updateCampaign(_campaignID);
    if (user.amount > 0) {
      uint256 pending = user.amount.mul(campaign.accRewardPerShare).div(1e12).sub(user.rewardDebt);
      if (pending > 0) {
        campaign.rewardToken.safeTransfer(address(msg.sender), pending);
      }
    }

    uint256 _amount = campaign.stakingToken.getWeight(_tokenId);

    if (_amount > 0) {
      user.amount = user.amount.add(_amount);
      user.stakedNFT[address(campaign.stakingToken)][_tokenId] = true;
      campaign.totalStaked = campaign.totalStaked.add(_amount);
      campaign.stakingToken.transferFrom(address(msg.sender), address(this), _tokenId);
    }
    user.rewardDebt = user.amount.mul(campaign.accRewardPerShare).div(1e12);
    emit Deposit(msg.sender, _amount, _campaignID);
  }

  /// @notice Withdraw Staking tokens from STAKING.
  function withdraw(uint256 _campaignID, uint256 _tokenId) external nonReentrant {
    _withdraw(_campaignID, _tokenId);
  }

  /// @notice internal method for withdraw (withdraw and harvest method depend on this method)
  function _withdraw(uint256 _campaignID, uint256 _tokenId) internal {
    CampaignInfo storage campaign = campaignInfo[_campaignID];
    UserInfo storage user = userInfo[_campaignID][msg.sender];
    require(user.stakedNFT[address(campaign.stakingToken)][_tokenId], "GS::withdraw::bad withdraw tokenId");
    _updateCampaign(_campaignID);
    uint256 pending = user.amount.mul(campaign.accRewardPerShare).div(1e12).sub(user.rewardDebt);
    if (pending > 0) {
      campaign.rewardToken.safeTransfer(address(msg.sender), pending);
    }

    uint256 _amount = campaign.stakingToken.getWeight(_tokenId);

    if (_amount > 0) {
      user.amount = user.amount.sub(_amount);
      user.stakedNFT[address(campaign.stakingToken)][_tokenId] = false;
      campaign.stakingToken.transferFrom(address(this), msg.sender, _tokenId);
      campaign.totalStaked = campaign.totalStaked.sub(_amount);
    }
    user.rewardDebt = user.amount.mul(campaign.accRewardPerShare).div(1e12);

    emit Withdraw(msg.sender, _amount, _campaignID);
  }

  /// @notice method for harvest campaigns (used when the user want to claim their reward token based on specified campaigns)
  function harvest(uint256 _campaignID, uint256[] calldata _tokenIds) external nonReentrant {
    for (uint256 i = 0; i < _tokenIds.length; ++i) {
      _harvest(_campaignID, _tokenIds[i]);
    }
  }

  function _harvest(uint256 _campaignID, uint256 _tokenId) internal {
    CampaignInfo memory campaign = campaignInfo[_campaignID];
    UserInfo storage user = userInfo[_campaignID][msg.sender];
    require(user.stakedNFT[address(campaign.stakingToken)][_tokenId], "GS::havest::bad havest tokenId");
    _updateCampaign(_campaignID);
    uint256 pending = user.amount.mul(campaign.accRewardPerShare).div(1e12).sub(user.rewardDebt);
    if (pending > 0) {
      user.rewardDebt = user.amount.mul(campaign.accRewardPerShare).div(1e12);
      campaign.rewardToken.safeTransfer(address(msg.sender), pending);
    }

    emit Harvest(msg.sender, pending, _campaignID);
  }
}
