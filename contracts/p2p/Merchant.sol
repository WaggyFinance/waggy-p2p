//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./RewardCalculator.sol";
import "./MerchantStorage.sol";
import "./FeeCalculator.sol";

contract Merchant is Ownable {
  using SafeMath for uint256;

  ERC20 token;
  ERC20 gov;

  event SetupShop(address owner, address token, uint256 amount);
  event DeleteShop(address owner, address token, uint256 balance);
  event ApproveTransaction(address owner, address token, uint256 amount);
  event CancelTransaction(address owner, address token, uint256 amount);
  event ReleaseToken(address sender, address receipt, address token, uint256 amount, uint256 reward);
  event SellerDeposit(address seller, address merchant, uint256 amount);

  MerchantStorage public merchantStorage;
  RewardCalculator public rewardCalculator;
  FeeCalculator public feeCalculator;
  address public feeCollector;

  enum BuyerStatus {
    INIT,
    PENDING_TRANSFER_FIAT,
    RELEASED_TRANSFER_TOKEN,
    FINISH
  }
  struct BuyerInfo {
    uint256 amount;
    BuyerStatus status;
  }

  mapping(address => BuyerInfo) buyerInfo;

  modifier isCanDeleteShop() {
    require(merchantStorage.getTotalLockBalance(msg.sender) == 0);
    _;
  }

  function getMerchantStorage() public view returns (address) {
    return address(merchantStorage);
  }

  function getFeeCollector() public view returns (address) {
    return feeCollector;
  }

  // create merchant with token for p2p transaction
  constructor(
    address _token,
    address _gov,
    address _rewardCalculator,
    address _feeCalculator,
    address _merchantStorage,
    address _feeCollector
  ) {
    token = ERC20(_token);
    gov = ERC20(_gov);
    rewardCalculator = RewardCalculator(_rewardCalculator);
    merchantStorage = MerchantStorage(_merchantStorage);
    feeCalculator = FeeCalculator(_feeCalculator);
    feeCollector = _feeCollector;
  }

  function sellerReleaseToken(
    address _seller,
    address _buyer,
    uint256 _amount
  ) public {
    require(msg.sender == _seller || msg.sender == owner());
    require(merchantStorage.checkSellTransactionReady(_seller, _buyer, _amount) == _amount);
    uint256 fee = feeCalculator.calculateFee(_amount);
    uint256 receiptAmount = _amount.sub(fee);
    token.transfer(feeCollector, fee);
    token.transfer(_buyer, receiptAmount);
    merchantStorage.releaseSellToken(_seller, _buyer, _amount);
    merchantStorage.setTransactionSuccessCount(
      msg.sender,
      merchantStorage.getTransactionSuccessCount(msg.sender).add(1)
    );
    // pay reward after complete transaction
    uint256 reward = getReward(_amount);
    gov.transfer(_buyer, reward);
    emit ReleaseToken(msg.sender, _buyer, address(token), _amount, reward);
  }

  function getSellerDeposit(address _seller,address _merchant) public view returns(uint256){
    return merchantStorage.getUserLockBalance(_seller,_merchant);
  }

  function sellerDeposit(address _merchant,uint256 _amount) external {
    require(token.balanceOf(msg.sender) >= _amount);
    require(token.allowance(msg.sender, address(this)) >= _amount);
    require(getSellerDeposit(msg.sender,_merchant) == 0);

    token.transferFrom(msg.sender,address(this),_amount);
    merchantStorage.setUserLockBalance(msg.sender,_merchant,_amount);
    merchantStorage.requestSell(msg.sender,_merchant,_amount);

    emit SellerDeposit(msg.sender , _merchant,_amount);
  }

  // for backend check correctly lock amount
  function getBuyerLockAmount() external view returns (uint256) {
    BuyerInfo memory userInfo = buyerInfo[msg.sender];
    return userInfo.amount;
  }

  // Merchant began create lock token prepare to sell
  function createLockTokenSell(uint256 _amount) external {
    BuyerInfo storage userInfo = buyerInfo[msg.sender];
    require(userInfo.status == BuyerStatus.INIT);
    require(token.allowance(msg.sender, address(this)) >= _amount);
    token.transferFrom(msg.sender, address(this), _amount);
    userInfo.amount = _amount;
    userInfo.status = BuyerStatus.PENDING_TRANSFER_FIAT;
  }

  // Backend recheck merchant released the token to buyer
  function getMerchantIsReleasedTokenTo(address _buyer) external view returns (bool) {
    BuyerInfo storage userInfo = buyerInfo[_buyer];
    return (userInfo.status == BuyerStatus.RELEASED_TRANSFER_TOKEN);
  }

  //  Merchant release token to buyer
  function merchantReleaseToken(address _buyer, uint256 _amount) external {
    BuyerInfo storage userInfo = buyerInfo[_buyer];
    require(userInfo.status == BuyerStatus.PENDING_TRANSFER_FIAT);
    require(userInfo.amount == _amount);
    token.transfer(_buyer, _amount);
    userInfo.status = BuyerStatus.RELEASED_TRANSFER_TOKEN;
  }

  // owner claimToken for emergency event.
  function ownerClaimToken() public onlyOwner {
    token.transfer(owner(), token.balanceOf(address(this)));
  }

  // update RewardCalculator
  function updateRewardCalculator(address _rewardCalculator) public onlyOwner {
    rewardCalculator = RewardCalculator(_rewardCalculator);
  }

  // update RewardCalculator
  function updateFeeCalculator(address _feeCalculator) public onlyOwner {
    feeCalculator = FeeCalculator(_feeCalculator);
  }

  /* 
    For seller release token to buyer when the seller approve a evidence of faite transfer slip 
    _address is a receipt waller address
    _amount is value of token to transfer
    */
  function releaseToken(
    address _seller,
    address _buyer,
    uint256 _amount
  ) public {
    require(msg.sender == _seller || msg.sender == owner());
    require(merchantStorage.checkTransactionApproved(_seller, _buyer, _amount) == _amount);

    // require(merchantStorage.getShopLockBalance(msg.sender,_buyer) >= _amount);
    uint256 fee = feeCalculator.calculateFee(_amount);
    uint256 receiptAmount = _amount.sub(fee);
    token.transfer(feeCollector, fee);
    token.transfer(_buyer, receiptAmount);

    // uint256 lockAmount = merchantStorage.getShopLockBalance(msg.sender,_buyer).sub(_amount);
    // merchantStorage.setShopLockBalance(msg.sender,_buyer, lockAmount);
    merchantStorage.releaseToken(_seller, _buyer, _amount);
    merchantStorage.setTransactionSuccessCount(
      msg.sender,
      merchantStorage.getTransactionSuccessCount(msg.sender).add(1)
    );

    uint256 totalLockAmount = merchantStorage.getTotalLockBalance(msg.sender).sub(_amount);
    merchantStorage.setTotalLockBalance(msg.sender, totalLockAmount);

    // pay reward after complete transaction
    uint256 reward = getReward(_amount);
    console.log("Reward ", reward);
    gov.transfer(msg.sender, reward);
    emit ReleaseToken(msg.sender, _buyer, address(token), _amount, reward);
  }

  /*
    For admin or owner when the transaction had problem, it can cancel the transaction.
    _address is address of seller 
    _amount is value of transaction 
    */
  function cancelTransaction(
    address _merchant,
    address _buyer,
    uint256 _amount,
    string memory _remark
  ) public onlyOwner {
    require(merchantStorage.checkTransactionApproved(_merchant, _buyer, _amount) == _amount);
    merchantStorage.cancelTransaction(_merchant, _buyer, _amount, _remark);
    merchantStorage.setShopBalance(_merchant, merchantStorage.getShopBalance(_merchant).add(_amount));

    uint256 totalLockAmount = merchantStorage.getTotalLockBalance(_merchant).sub(_amount);
    merchantStorage.setTotalLockBalance(_merchant, totalLockAmount);

    emit CancelTransaction(_buyer, address(token), _amount);
  }

  /*
    For admin or owner when the transaction had problem, it can cancel the transaction.
    _address is address of seller 
    _amount is value of transaction 
    */
  function cancelSellTransaction(
    address _seller,
    address _buyer,
    uint256 _amount,
    string memory _remark
  ) public {
    require(msg.sender == _seller || msg.sender == owner());
    require(merchantStorage.checkSellTransactionReady(_seller, _buyer, _amount) == _amount);

    merchantStorage.cancelSellTransaction(_seller, _buyer, _amount, _remark);
    token.transfer(_seller, _amount);

    emit CancelTransaction(_buyer, address(token), _amount);
  }


  function appealTransaction(
    address _merchant,
    address _buyer,
    uint256 _amount
  ) external {
// TODO
  }

  function getBuyerTransaction(address _merchant, address _buyer)
    public
    view
    returns (
      uint256 status,
      uint256 amount,
      string memory remark,
      uint256 lockAmount,
      uint256 createdAt,
      uint256 updatedAt
    )
  {
    (status, amount, remark, lockAmount, createdAt, updatedAt) = merchantStorage.getTransaction(_merchant, _buyer);
  }

  /*
    When buyer is request to buy the token is had action to approve at seller
    The seller to call function approveTransaction for lock balance, it ready for wait to fait transfer.
    _amount is value of buyer want it.
    */
  function approveTransaction(uint256 _amount, address _buyer) public {
    require(merchantStorage.getShopBalance(msg.sender) >= _amount);

    merchantStorage.setShopBalance(msg.sender, merchantStorage.getShopBalance(msg.sender).sub(_amount));
    merchantStorage.approveBuy(msg.sender, _buyer, _amount);
    // merchantStorage.setShopLockBalance(msg.sender,_buyer, _amount);

    uint256 totalLockAmount = merchantStorage.getTotalLockBalance(msg.sender).add(_amount);
    merchantStorage.setTotalLockBalance(msg.sender, totalLockAmount);
    emit ApproveTransaction(msg.sender, address(token), _amount);
  }

  // for dev recheck balance is realy lock .
  function getApproveTransaction(
    address _buyer,
    address _seller,
    uint256 _amount
  ) external view returns (uint256) {
    return merchantStorage.checkTransactionApproved(_seller, _buyer, _amount);
    // return merchantStorage.getShopLockBalance(_seller, _buyer);
  }

  /*
    It first function for setup merchant of seller ,it deposit amount of token to sell
    _amount is value of token to want a sell 
    */
  function setupShop(uint256 _amount) public payable {
    require(token.allowance(msg.sender, address(this)) >= _amount);
    token.transferFrom(msg.sender, address(this), _amount);
    merchantStorage.setShopBalance(msg.sender, _amount);

    emit SetupShop(msg.sender, address(token), _amount);
  }

  function getShopBalance(address owner) public view returns (uint256) {
    return merchantStorage.getShopBalance(owner);
  }

  /*
    The seller request delete a shop but is not had any value in lock balance, It will can delete the shop.
    */
  function deleteShop() public isCanDeleteShop {
    require(merchantStorage.getShopBalance(msg.sender) > 0);
    uint256 totalBalance = merchantStorage.getShopBalance(msg.sender);
    token.transferFrom(address(this), msg.sender, totalBalance);
    merchantStorage.setShopBalance(msg.sender, 0);

    emit DeleteShop(msg.sender, address(token), totalBalance);
  }

  /*
    Internal calculate reward for send to seller.
    _amount is value of transaction.
    */
  function getReward(uint256 _amount) internal view returns (uint256) {
    return rewardCalculator.calculateReward(_amount);
  }
}
