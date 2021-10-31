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

//import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./RewardCalculator.sol";
import "./MerchantStorage.sol";
import "./FeeCalculator.sol";
import "./../BlackListUser.sol";

contract Merchant is OwnableUpgradeable {
  using SafeMath for uint256;

  event SetupShop(address seller, address token, uint256 amount);
  event DeleteShop(address seller, address token, uint256 balance);
  event AppealTransaction(address seller, address buyer, uint256 balance);
  event ApproveTransaction(address seller, address token, uint256 amount);
  event CancelTransaction(address seller, address token, uint256 amount);
  event ReleaseToken(address seller, address buyer, address token, uint256 amount, uint256 reward);
  event SellerDeposit(address seller, address merchant, uint256 amount);

  enum TransactionStatus {
    INIT,
    PENDING_TRANSFER_FAIT,
    APPEAL,
    CANCELED,
    FINISH
  }
  struct Transaction {
    TransactionStatus status;
    uint256 amount;
    string remark;
    uint256 lockAmount;
    uint256 createdAt;
    uint256 updateAt;
  }
  struct UserInfo {
    Transaction[] transactions;
  }

  mapping(address => uint256) public shopBalance;
  mapping(address => uint256) public shopLockBalance;
  mapping(address => uint256) public successTransactionCount;
  // merchant-> buyer-> lock amount
  mapping(address => mapping(address => uint256)) lockTokenInfo;
  mapping(address => mapping(address => uint256)) lockUserTokenInfo;
  mapping(address => uint256) public totalLockBalance;
  mapping(address => mapping(address => UserInfo)) buyerInfo;

  RewardCalculator public rewardCalculator;
  FeeCalculator public feeCalculator;
  address public feeCollector;
  BlackListUser blackListUser;

  ERC20 token;
  ERC20 gov;

  // create merchant with token for p2p transaction
  function initialize(
    address _token,
    address _gov,
    address _rewardCalculator,
    address _feeCalculator,
    address _feeCollector,
    address _blackListUser
  ) public initializer {
    __Ownable_init();
    token = ERC20(_token);
    gov = ERC20(_gov);
    rewardCalculator = RewardCalculator(_rewardCalculator);
    feeCalculator = FeeCalculator(_feeCalculator);
    feeCollector = _feeCollector;
    blackListUser = BlackListUser(_blackListUser);
  }

  /*
    Step 1 
    It first function for setup merchant of seller ,it deposit amount of token to sell
    _amount is value of token to want a sell 
    */
  function setupShop(uint256 _amount) public notSuspendUser {
    require(token.allowance(msg.sender, address(this)) >= _amount);
    token.transferFrom(msg.sender, address(this), _amount);
    setShopBalance(msg.sender, _amount);

    emit SetupShop(msg.sender, address(token), _amount);
  }

  /*
    The seller request delete a shop but is not had any value in lock balance, It will can delete the shop.
    */
  function deleteShop() public isCanDeleteShop {
    require(getShopBalance(msg.sender) > 0);
    token.transfer(msg.sender, getShopBalance(msg.sender));
    setShopBalance(msg.sender, 0);

    emit DeleteShop(msg.sender, address(token), getShopBalance(msg.sender));
  }

  /*
    Step 2
    When buyer is request to buy the token is had action to approve at seller
    The seller to call function approveTransaction for lock balance, it ready for wait to fait transfer.
    _amount is value of buyer want it.
    */
  function approveTransaction(uint256 _amount, address _buyer) public {
    require(getShopBalance(msg.sender) >= _amount);
    // sub avalible shop balance
    setShopBalance(msg.sender, getShopBalance(msg.sender).sub(_amount));

    UserInfo storage buyerInfoData = buyerInfo[msg.sender][_buyer];
    uint256 transactionLength = buyerInfoData.transactions.length;
    Transaction storage transaction;
    // check last transaction is finish
    if (transactionLength != 0) {
      transaction = buyerInfoData.transactions[transactionLength.sub(1)];
      require(
        transaction.status == TransactionStatus.FINISH,
        "Not allow do this transaction because transaction before is not done."
      );
    }
    // create new transaction pending add push in transaction list
    buyerInfoData.transactions.push(
      Transaction(TransactionStatus.PENDING_TRANSFER_FAIT, _amount, "", _amount, block.timestamp, block.timestamp)
    );
    // update total lock balance
    setTotalLockBalance(msg.sender, getTotalLockBalance(msg.sender).add(_amount));
    emit ApproveTransaction(msg.sender, address(token), _amount);
  }

  // for dev recheck balance is realy lock .
  function getApproveTransaction(
    address _buyer,
    address _seller,
    uint256 _amount
  ) external view returns (uint256) {
    return checkTransactionApproved(_seller, _buyer, _amount);
  }

  /*
    For admin or owner when the transaction had problem, it can cancel the transaction.
    _address is address of seller 
    _amount is value of transaction 
    */
  function cancelTransaction(
    address _seller,
    address _buyer,
    uint256 _amount,
    string memory _remark
  ) public {
    require(msg.sender == _seller || msg.sender == owner(), "only owner.");
    require(checkTransactionApproved(_seller, _buyer, _amount) == _amount);
    UserInfo storage buyerInfoData = buyerInfo[_seller][_buyer];
    uint256 transactionLength = buyerInfoData.transactions.length;
    require(transactionLength != 0, "Not found transaction");
    // get last transaction
    Transaction storage transaction = buyerInfoData.transactions[transactionLength.sub(1)];
    require(transaction.amount == _amount, "Transaction is mismatch.");
    require(transaction.status == TransactionStatus.PENDING_TRANSFER_FAIT, "Only pending transfer fait it can cancel.");
    require(block.timestamp - transaction.updateAt >= 15 minutes, "Can't cancel because in delay time.");
    transaction.remark = _remark;
    transaction.status = TransactionStatus.CANCELED;

    if (msg.sender != owner()) {
      blackListUser.warningUser(msg.sender);
    }

    setShopBalance(_seller, getShopBalance(_seller).add(_amount));
    setTotalLockBalance(_seller, getTotalLockBalance(_seller).sub(_amount));

    emit CancelTransaction(_buyer, address(token), _amount);
  }

  /* 
    Step 3
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
    require(checkTransactionApproved(_seller, _buyer, _amount) == _amount);

    uint256 fee = feeCalculator.calculateFee(_amount);
    uint256 receiverAmount = _amount.sub(fee);
    token.transfer(feeCollector, fee);
    token.transfer(_buyer, receiverAmount);

    UserInfo storage buyerInfoData = buyerInfo[_seller][_buyer];
    uint256 transactionLength = buyerInfoData.transactions.length;
    require(transactionLength != 0, "Not found transaction");
    Transaction storage transaction = buyerInfoData.transactions[transactionLength.sub(1)];
    require(
      transaction.status == TransactionStatus.PENDING_TRANSFER_FAIT || transaction.status == TransactionStatus.APPEAL,
      "Not allow do this transaction because transaction is not waiting transfer fait."
    );
    require(transaction.amount == _amount, "Transaction is mismatch.");
    transaction.lockAmount = 0;
    transaction.status = TransactionStatus.FINISH;
    transaction.updateAt = block.timestamp;

    setTransactionSuccessCount(msg.sender, getTransactionSuccessCount(msg.sender).add(1));
    setTotalLockBalance(msg.sender, getTotalLockBalance(msg.sender).sub(_amount));

    // pay reward after complete transaction
    uint256 reward = getReward(_amount);
    gov.transfer(msg.sender, reward);
    emit ReleaseToken(msg.sender, _buyer, address(token), _amount, reward);
  }

  /* 
    Option 
  Seller or buyer appeal this transaction
    _seller is a seller waller address
    _buyer is a buyer waller address
    _amount is value of token to transfer
    */
  function appeal(
    address _seller,
    address _buyer,
    uint256 _amount
  ) external  {
    UserInfo storage buyerInfoData = buyerInfo[_seller][_buyer];
    uint256 transactionLength = buyerInfoData.transactions.length;
    require(transactionLength != 0, "Not found transaction");
    Transaction storage transaction = buyerInfoData.transactions[transactionLength.sub(1)];
    require(
      transaction.status != TransactionStatus.CANCELED,
      "Not allow do this transaction because transaction is cancel."
    );
    require(transaction.amount == _amount, "Transaction is mismatch.");
    transaction.status = TransactionStatus.APPEAL;
    transaction.updateAt = block.timestamp;

    emit AppealTransaction(_seller, _buyer, _amount);
  }

  function setTotalLockBalance(address _owner, uint256 _amount) internal {
    totalLockBalance[_owner] = _amount;
  }

  function getTotalLockBalance(address _owner) internal view returns (uint256) {
    return totalLockBalance[_owner];
  }

  function getShopBalance(address _owner) internal view returns (uint256) {
    return shopBalance[_owner];
  }

  function setShopBalance(address _owner, uint256 _balance) internal {
    shopBalance[_owner] = _balance;
  }

  function getShopLockBalance(address _owner, address _buyer) internal view returns (uint256) {
    return lockTokenInfo[_owner][_buyer];
  }

  function getUserLockBalance(address _owner, address _buyer) internal view returns (uint256) {
    return lockUserTokenInfo[_owner][_buyer];
  }

  function checkTransactionApproved(
    address _owner,
    address _buyer,
    uint256 _amount
  ) internal view returns (uint256) {
    UserInfo storage buyerInfoData = buyerInfo[_owner][_buyer];
    uint256 transactionLength = buyerInfoData.transactions.length;
    require(transactionLength > 0, "Buyer never had transaction before.");
    Transaction storage transaction = buyerInfoData.transactions[transactionLength.sub(1)];
    require(transaction.lockAmount == _amount, "Amount is mismatch.");
    require(transaction.status == TransactionStatus.PENDING_TRANSFER_FAIT, "Transaction status is outof flow.");
    return transaction.lockAmount;
  }

  function getTransactionByIndex(
    address _seller,
    address _buyer,
    uint256 _index
  )
    public
    view
    returns (
      uint256 status,
      uint256 amount,
      string memory remark,
      uint256 lockAmount,
      uint256 createdAt,
      uint256 updateAt
    )
  {
    UserInfo storage buyerInfoData = buyerInfo[_seller][_buyer];
    uint256 transactionLength = buyerInfoData.transactions.length;
    require(transactionLength != 0, "Not found transaction");
    Transaction memory transaction = buyerInfoData.transactions[_index];

    status = uint256(transaction.status);
    amount = transaction.amount;
    remark = transaction.remark;
    lockAmount = transaction.lockAmount;
    createdAt = transaction.createdAt;
    updateAt = transaction.updateAt;
  }

  function getTransaction(address _seller, address _buyer)
    internal
    view
    returns (
      uint256 status,
      uint256 amount,
      string memory remark,
      uint256 lockAmount,
      uint256 createdAt,
      uint256 updateAt
    )
  {
    UserInfo storage buyerInfoData = buyerInfo[_seller][_buyer];
    uint256 transactionLength = buyerInfoData.transactions.length;
    require(transactionLength != 0, "Not found transaction");
    return getTransactionByIndex(_seller, _buyer, transactionLength.sub(1));
  }

  function setUserLockBalance(
    address _seller,
    address _buyer,
    uint256 _balance
  ) internal  {
    lockUserTokenInfo[_seller][_buyer] = _balance;
  }

  function setShopLockBalance(
    address _seller,
    address _buyer,
    uint256 _balance
  ) internal  {
    lockTokenInfo[_seller][_buyer] = _balance;
  }

  function getTransactionSuccessCount(address _seller) internal view returns (uint256) {
    return successTransactionCount[_seller];
  }

  function setTransactionSuccessCount(address _seller, uint256 _count) internal  {
    successTransactionCount[_seller] = _count;
  }

  modifier isCanDeleteShop() {
    require(getTotalLockBalance(msg.sender) == 0);
    _;
  }

  modifier notSuspendUser() {
    require(blackListUser.checkUserStatus(msg.sender) == 0, "Not allow suspend user.");
    _;
  }

  function setBlackList(address _blackList) external onlyOwner {
    blackListUser = BlackListUser(_blackList);
  }

  function getFeeCollector() public view returns (address) {
    return feeCollector;
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
    (status, amount, remark, lockAmount, createdAt, updatedAt) = getTransaction(_merchant, _buyer);
  }

  /*
    Internal calculate reward for send to seller.
    _amount is value of transaction.
    */
  function getReward(uint256 _amount) internal view returns (uint256) {
    return rewardCalculator.calculateReward(_amount);
  }
}
