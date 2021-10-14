//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract MerchantStorage is Ownable {
  using SafeMath for uint256;
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
  mapping(address => mapping(address => UserInfo)) sellerInfo;

  function setTotalLockBalance(address _owner, uint256 _amount) external {
    totalLockBalance[_owner] = _amount;
  }

  function getTotalLockBalance(address _owner) external view returns (uint256) {
    return totalLockBalance[_owner];
  }

  function getShopBalance(address _owner) external view returns (uint256) {
    return shopBalance[_owner];
  }

  function setShopBalance(address _owner, uint256 _balance) external onlyOwner {
    shopBalance[_owner] = _balance;
  }

  function getShopLockBalance(address _owner, address _buyer) external view returns (uint256) {
    return lockTokenInfo[_owner][_buyer];
  }

  function getUserLockBalance(address _owner, address _buyer) external view returns (uint256) {
    return lockUserTokenInfo[_owner][_buyer];
  }

  function getAddress() public view returns (address) {
    return address(this);
  }

  function checkTransactionApproved(
    address _owner,
    address _buyer,
    uint256 _amount
  ) external view returns (uint256) {
    UserInfo storage buyerInfoData = buyerInfo[_owner][_buyer];
    uint256 transactionLength = buyerInfoData.transactions.length;
    require(transactionLength > 0, "Buyer never had transaction before.");
    Transaction storage transaction = buyerInfoData.transactions[transactionLength.sub(1)];
    require(transaction.lockAmount == _amount, "Amount is mismatch.");
    require(transaction.status == TransactionStatus.PENDING_TRANSFER_FAIT, "Transaction status is outof flow.");
    return transaction.lockAmount;
  }

  function cancelSellTransaction(
    address _seller,
    address _buyer,
    uint256 _amount,
    string memory _remark
  ) external onlyOwner {
    UserInfo storage sellerInfoData = sellerInfo[_seller][_buyer];
    uint256 transactionLength = sellerInfoData.transactions.length;
    require(transactionLength != 0, "Not found transaction");
    Transaction storage transaction = sellerInfoData.transactions[transactionLength.sub(1)];
    require(transaction.amount == _amount, "Transaction is mismatch.");
    require(transaction.status != TransactionStatus.FINISH, "Can't cancel finish transaction.");
    transaction.remark = _remark;
    transaction.status = TransactionStatus.CANCELED;
  }

  function cancelTransaction(
    address _owner,
    address _buyer,
    uint256 _amount,
    string memory _remark
  ) external onlyOwner {
    UserInfo storage buyerInfoData = buyerInfo[_owner][_buyer];
    uint256 transactionLength = buyerInfoData.transactions.length;
    require(transactionLength != 0, "Not found transaction");
    Transaction storage transaction = buyerInfoData.transactions[transactionLength.sub(1)];
    require(transaction.amount == _amount, "Transaction is mismatch.");
    require(transaction.status != TransactionStatus.FINISH, "Can't cancel finish transaction.");
    transaction.remark = _remark;
    transaction.status = TransactionStatus.CANCELED;
  }

  function releaseToken(
    address _owner,
    address _buyer,
    uint256 _amount
  ) external onlyOwner {
    UserInfo storage buyerInfoData = buyerInfo[_owner][_buyer];
    uint256 transactionLength = buyerInfoData.transactions.length;
    require(transactionLength != 0, "Not found transaction");
    Transaction storage transaction = buyerInfoData.transactions[transactionLength.sub(1)];
    require(
      transaction.status == TransactionStatus.PENDING_TRANSFER_FAIT,
      "Not allow do this transaction because transaction is not waiting transfer fait."
    );
    require(transaction.amount == _amount, "Transaction is mismatch.");
    transaction.lockAmount = 0;
    transaction.status = TransactionStatus.FINISH;
  }

  function getTransactionByIndex(
    address _owner,
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
    UserInfo storage buyerInfoData = buyerInfo[_owner][_buyer];
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

  function getTransaction(address _owner, address _buyer)
    external
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
    UserInfo storage buyerInfoData = buyerInfo[_owner][_buyer];
    uint256 transactionLength = buyerInfoData.transactions.length;
    require(transactionLength != 0, "Not found transaction");
    return getTransactionByIndex(_owner, _buyer, transactionLength.sub(1));
  }

  function appealSellToken(
    address _owner,
    address _buyer,
    uint256 _amount
  ) external onlyOwner {
    UserInfo storage sellerInfoData = sellerInfo[_owner][_buyer];
    uint256 transactionLength = sellerInfoData.transactions.length;
    require(transactionLength != 0, "Not found transaction");
    Transaction storage transaction = sellerInfoData.transactions[transactionLength.sub(1)];
    require(
      transaction.status == TransactionStatus.APPEAL,
      "Not allow do this transaction because transaction is already appeal"
    );
    require(transaction.amount == _amount, "Transaction is mismatch.");
    transaction.status = TransactionStatus.APPEAL;
  }

  function releaseSellToken(  
    address _owner,
    address _buyer,
    uint256 _amount
  ) external onlyOwner {
    UserInfo storage sellerInfoData = sellerInfo[_owner][_buyer];
    uint256 transactionLength = sellerInfoData.transactions.length;
    require(transactionLength != 0, "Not found transaction");
    Transaction storage transaction = sellerInfoData.transactions[transactionLength.sub(1)];
    require(
      transaction.status == TransactionStatus.PENDING_TRANSFER_FAIT,
      "Not allow do this transaction because transaction is not waiting transfer fait."
    );
    require(transaction.amount == _amount, "Transaction is mismatch.");
    transaction.lockAmount = 0;
    transaction.status = TransactionStatus.FINISH;
  }

  function checkSellTransactionReady(
    address _owner,
    address _buyer,
    uint256 _amount
  ) external view returns (uint256) {
    UserInfo storage sellerInfoData = sellerInfo[_owner][_buyer];
    uint256 transactionLength = sellerInfoData.transactions.length;
    require(transactionLength > 0, "Seller never had transaction before.");
    Transaction storage transaction = sellerInfoData.transactions[transactionLength.sub(1)];
    require(transaction.lockAmount == _amount, "Amount is mismatch.");
    require(transaction.status == TransactionStatus.PENDING_TRANSFER_FAIT, "Transaction status is outof flow.");
    return transaction.lockAmount;
  }

  function requestSell(
    address _owner,
    address _buyer,
    uint256 _amount
  ) external onlyOwner {
    UserInfo storage sellerInfoData = sellerInfo[_owner][_buyer];
    uint256 transactionLength = sellerInfoData.transactions.length;
    Transaction storage transaction;
    if (transactionLength != 0) {
      transaction = sellerInfoData.transactions[transactionLength.sub(1)];
      require(
        transaction.status == TransactionStatus.FINISH,
        "Not allow do this transaction because transaction before is not done."
      );
    }
    sellerInfoData.transactions.push(
      Transaction(TransactionStatus.PENDING_TRANSFER_FAIT, _amount, "", _amount, block.timestamp, block.timestamp)
    );
  }

  function approveBuy(
    address _owner,
    address _buyer,
    uint256 _amount
  ) external onlyOwner {
    UserInfo storage buyerInfoData = buyerInfo[_owner][_buyer];
    uint256 transactionLength = buyerInfoData.transactions.length;
    Transaction storage transaction;
    if (transactionLength != 0) {
      transaction = buyerInfoData.transactions[transactionLength.sub(1)];
      require(
        transaction.status == TransactionStatus.FINISH,
        "Not allow do this transaction because transaction before is not done."
      );
    }
    buyerInfoData.transactions.push(
      Transaction(TransactionStatus.PENDING_TRANSFER_FAIT, _amount, "", _amount, block.timestamp, block.timestamp)
    );
  }

  function setUserLockBalance(
    address _owner,
    address _buyer,
    uint256 _balance
  ) external onlyOwner {
    lockUserTokenInfo[_owner][_buyer] = _balance;
  }

  function setShopLockBalance(
    address _owner,
    address _buyer,
    uint256 _balance
  ) external onlyOwner {
    lockTokenInfo[_owner][_buyer] = _balance;
  }

  function getTransactionSuccessCount(address _owner) external view returns (uint256) {
    return successTransactionCount[_owner];
  }

  function setTransactionSuccessCount(address _owner, uint256 _count) external onlyOwner {
    successTransactionCount[_owner] = _count;
  }
}
