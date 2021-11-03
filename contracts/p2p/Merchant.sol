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
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./RewardCalculator.sol";
import "./FeeCalculator.sol";
import "./../BlackListUser.sol";

enum ValidatorRemark {
  NOT_TRANSFER,
  CANCEL_TRANSACTION
}

interface IValidator {
  function addCase(
    address _token,
    address _seller,
    address _buyer,
    uint256 _remark
  ) external returns (uint256);
}

// Not support deflationary token โทเคนที่มีการหัก%
contract Merchant is OwnableUpgradeable {
  using SafeMath for uint256;
  using SafeERC20 for ERC20;

  event SetupShop(address seller, address token, uint256 amount);
  event Deposit(address seller, address token, uint256 amount);
  event Withdraw(address seller, address token, uint256 amount);
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
  struct SuccessTransactionInfo {
    uint256 totalSellAmount;
    uint256 totalSellCount;
  }

  mapping(address => uint256) public shopBalance;
  mapping(address => uint256) public shopLockBalance;
  mapping(address => SuccessTransactionInfo) public successTransactionCount;
  // merchant-> buyer-> lock amount
  mapping(address => mapping(address => uint256)) public lockTokenInfo;
  mapping(address => mapping(address => uint256)) public lockUserTokenInfo;
  mapping(address => uint256) public totalLockBalance;
  mapping(address => mapping(address => UserInfo)) internal buyerInfo;

  RewardCalculator public rewardCalculator;
  FeeCalculator public feeCalculator;
  address public feeCollector;
  BlackListUser public blackListUser;
  IValidator public validator;

  ERC20 public token;
  ERC20 public gov;

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

  function setValidator(address _validator) external onlyOwner {
    validator = IValidator(_validator);
  }

  // Merchant increase balance.
  function deposit(uint256 _amount) public notSuspendUser {
    require(token.allowance(msg.sender, address(this)) >= _amount, "credit not enougth");
    token.safeTransferFrom(msg.sender, address(this), _amount);
    setShopBalance(msg.sender, getShopBalance(msg.sender).add(_amount));

    emit Deposit(msg.sender, address(token), _amount);
  }

  // merchant decrease balance
  function withdraw(uint256 _amount) public notSuspendUser {
    require(getShopBalance(msg.sender) > 0 && getShopBalance(msg.sender) <= _amount, "balance not enougth");
    setShopBalance(msg.sender, getShopBalance(msg.sender).sub(_amount));
    token.safeTransfer(msg.sender, _amount);

    emit Withdraw(msg.sender, address(token), _amount);
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
  function fetchTransactionApproved(address _seller, address _buyer) public view returns (uint256) {
    UserInfo storage buyerInfoData = buyerInfo[_seller][_buyer];
    uint256 transactionLength = buyerInfoData.transactions.length;
    require(transactionLength > 0, "Buyer never had transaction before.");
    Transaction storage transaction = buyerInfoData.transactions[transactionLength.sub(1)];
    require(transaction.status == TransactionStatus.PENDING_TRANSFER_FAIT, "Transaction status is outof flow.");
    return transaction.lockAmount;
  }

  /*
    For admin or owner when the transaction had problem, it can cancel the transaction.
    _address is address of seller 
    _amount is value of transaction 
    */
  function cancelTransactionSeller(address _buyer, string memory _remark) public {
    UserInfo storage buyerInfoData = buyerInfo[msg.sender][_buyer];
    uint256 transactionLength = buyerInfoData.transactions.length;
    require(transactionLength != 0, "Not found transaction");
    // get last transaction
    Transaction storage transaction = buyerInfoData.transactions[transactionLength.sub(1)];
    require(transaction.status == TransactionStatus.PENDING_TRANSFER_FAIT, "Only pending transfer fait it can cancel.");
    require(block.timestamp - transaction.updateAt >= 15 minutes, "Can't cancel because in delay time.");
    transaction.remark = _remark;
    transaction.status = TransactionStatus.CANCELED;
    // move to validator to decition
    validator.addCase(address(token), msg.sender, _buyer, uint256(ValidatorRemark.CANCEL_TRANSACTION));

    emit CancelTransaction(_buyer, address(token), transaction.amount);
  }

  /* 
    Step 3
    For seller release token to buyer when the seller approve a evidence of faite transfer slip 
    _address is a receipt waller address
    _amount is value of token to transfer
    */
  function releaseTokenBySeller(address _buyer) public {
    UserInfo storage buyerInfoData = buyerInfo[msg.sender][_buyer];
    uint256 transactionLength = buyerInfoData.transactions.length;
    require(transactionLength != 0, "Not found transaction");
    Transaction storage transaction = buyerInfoData.transactions[transactionLength.sub(1)];
    require(
      transaction.status == TransactionStatus.PENDING_TRANSFER_FAIT,
      "Not allow do this transaction because transaction is not waiting transfer fait."
    );
    transaction.lockAmount = 0;
    transaction.status = TransactionStatus.FINISH;
    transaction.updateAt = block.timestamp;

    uint256 fee = feeCalculator.calculateFee(transaction.amount);
    uint256 receiverAmount = transaction.amount.sub(fee);
    token.safeTransfer(feeCollector, fee);
    token.safeTransfer(_buyer, receiverAmount);

    SuccessTransactionInfo storage successTransactionInfo = successTransactionCount[msg.sender];
    successTransactionInfo.totalSellAmount = successTransactionInfo.totalSellAmount.add(transaction.amount);
    successTransactionInfo.totalSellCount = successTransactionInfo.totalSellCount.add(1);

    setTotalLockBalance(msg.sender, getTotalLockBalance(msg.sender).sub(transaction.amount));

    // pay reward after complete transaction
    uint256 reward = getReward(transaction.amount);
    gov.safeTransfer(msg.sender, reward);
    emit ReleaseToken(msg.sender, _buyer, address(token), transaction.amount, reward);
  }

  /* 
    Option 
  Seller or buyer appeal this transaction
    _seller is a seller waller address
    _buyer is a buyer waller address
    _amount is value of token to transfer
    */
  function appeal(address _seller, address _buyer) external {
    require(msg.sender == _seller || msg.sender == _buyer, "Not allow other appeal.");
    UserInfo storage buyerInfoData = buyerInfo[_seller][_buyer];
    uint256 transactionLength = buyerInfoData.transactions.length;
    require(transactionLength != 0, "Not found transaction");
    Transaction storage transaction = buyerInfoData.transactions[transactionLength.sub(1)];
    require(
      transaction.status != TransactionStatus.CANCELED,
      "Not allow do this transaction because transaction is cancel."
    );
    transaction.status = TransactionStatus.APPEAL;
    transaction.updateAt = block.timestamp;

    validator.addCase(address(token), _seller, _buyer, 0);

    emit AppealTransaction(_seller, _buyer, transaction.amount);
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

  function setShopLockBalance(
    address _seller,
    address _buyer,
    uint256 _balance
  ) internal {
    lockTokenInfo[_seller][_buyer] = _balance;
  }

  function getTransactionSuccessCount(address _seller)
    internal
    view
    returns (uint256 totalSellAmount, uint256 totalSellCount)
  {
    totalSellAmount = successTransactionCount[_seller].totalSellAmount;
    totalSellCount = successTransactionCount[_seller].totalSellCount;
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
