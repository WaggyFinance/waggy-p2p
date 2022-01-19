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
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./RewardCalculator.sol";
import "./FeeCalculator.sol";
import "./../BlackListUser.sol";
import "./WNativeRelayer.sol";

enum ValidatorRemark {
  NOT_TRANSFER,
  BUYER_APPEAL,
  SELLER_APPEAL,
  BUYER_CANCEL_TRANSACTION,
  SELLER_CANCEL_TRANSACTION
}

interface IValidator {
  function addCase(
    address _token,
    string memory _txId,
    address _seller,
    address _buyer,
    uint256 _remark,
    uint256 _amount
  ) external returns (string memory);
}

interface IWBNB {
  function deposit() external payable;

  function safeTransfer(address _receipt, uint256 amount) external;

  function withdraw(uint256 wad) external;
}

interface IGOV {
  function mint(address _receive, uint256 _amount) external;
}

// Not support deflationary token โทเคนที่มีการหัก%
contract QuickSwap is OwnableUpgradeable, AccessControlUpgradeable {
  using SafeMathUpgradeable for uint256;
  using SafeERC20Upgradeable for ERC20Upgradeable;

  bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

  event SetupShop(address seller, address token, uint256 amount);
  event Deposit(address seller, address token, uint256 amount);
  event Withdraw(address seller, address token, uint256 amount);
  event DeleteShop(address seller, address token, uint256 balance);
  event AppealTransaction(address seller, address buyer, uint256 balance);
  event PlaceOrder(address seller, address token, uint256 amount);
  event CancelOrder(address seller, address token, uint256 amount);
  event ReleaseToken(address seller, address buyer, address token, uint256 amount, uint256 reward);
  event SellerDeposit(address seller, address merchant, uint256 amount);
  event UnlockToken(address seller, address buyer, uint256 amount);

  enum TransactionStatus {
    INIT,
    PENDING_TRANSFER_FAIT,
    APPEAL,
    CANCELED,
    FINISH
  }
  struct Transaction {
    ERC20Upgradeable token;
    TransactionStatus status;
    uint256 amount;
    string remark;
    uint256 lockAmount;
    uint256 createdAt;
    uint256 updateAt;
    string appealTxId;
  }
  struct UserInfo {
    Transaction[] transactions;
  }


  // merchant-> buyer-> lock amount
  mapping(address => mapping(address => UserInfo)) internal buyerInfo;

  RewardCalculator public rewardCalculator;
  FeeCalculator public feeCalculator;
  address public feeCollector;
  BlackListUser public blackListUser;
  IValidator public validator;

  address[] public admins;
  IGOV public gov;

  // create merchant with token for p2p transaction
  function initialize(
    address _gov,
    address _rewardCalculator,
    address _feeCalculator,
    address _feeCollector,
    address _blackListUser
  ) public initializer {
    __Ownable_init();
    gov = IGOV(_gov);
    rewardCalculator = RewardCalculator(_rewardCalculator);
    feeCalculator = FeeCalculator(_feeCalculator);
    feeCollector = _feeCollector;
    blackListUser = BlackListUser(_blackListUser);

    _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
  }

  function setValidator(address _validator) external onlyOwner {
    validator = IValidator(_validator);
  }

  function setAdmins(address[] memory _admins) external onlyOwner {
    revokeRoles(admins);
    delete admins;
    for (uint256 i = 0; i < _admins.length; ++i) {
      admins.push(_admins[i]);
      _setupRole(ADMIN_ROLE, _admins[i]);
    }
  }

  function revokeRoles(address[] memory _admins) public onlyOwner {
    for (uint256 i = 0; i < _admins.length; ++i) {
      revokeRole(ADMIN_ROLE, _admins[i]);
    }
  }

  /*
    Step 2
    When buyer is request to buy the token is had action to approve at seller
    The seller to call function approveTransaction for lock balance, it ready for wait to fait transfer.
    _amount is value of buyer want it.
    */
  function placeOrder(ERC20Upgradeable _token, uint256 _amount) public {
    _token.safeTransferFrom(msg.sender, address(this), _amount);

    UserInfo storage buyerInfoData = buyerInfo[msg.sender][address(_token)];
    uint256 transactionLength = buyerInfoData.transactions.length;
    Transaction storage transaction;
    // check last transaction is finish
    if (transactionLength != 0) {
      transaction = buyerInfoData.transactions[transactionLength.sub(1)];
      require(
        transaction.status == TransactionStatus.FINISH || transaction.status == TransactionStatus.CANCELED,
        "Transaction status mismatch"
      );
    }
    // create new transaction pending add push in transaction list
    buyerInfoData.transactions.push(
      Transaction(_token, TransactionStatus.PENDING_TRANSFER_FAIT, _amount, "", _amount, block.number, block.number, "")
    );
    emit PlaceOrder(msg.sender, address(_token), _amount);
  }

  function cancelOrder(ERC20Upgradeable _token) public {
    UserInfo storage buyerInfoData = buyerInfo[msg.sender][address(_token)];

    uint256 transactionLength = buyerInfoData.transactions.length;
    Transaction storage transaction;
    // check last transaction is finish
    if (transactionLength != 0) {
      transaction = buyerInfoData.transactions[transactionLength.sub(1)];
      require(
        transaction.status != TransactionStatus.FINISH || transaction.status != TransactionStatus.CANCELED,
        "Transaction already finish"
      );

      transaction.status = TransactionStatus.CANCELED;
      _token.safeTransfer(msg.sender, transaction.amount);

      emit CancelOrder(msg.sender, address(_token), transaction.amount);
    }
  }

  /* 
    Step 3
    For seller release token to buyer when the seller approve a evidence of faite transfer slip 
    _address is a receipt waller address
    _amount is value of token to transfer
    */
  function releaseTokenBySeller(ERC20Upgradeable _token, address _buyer) public {
    UserInfo storage buyerInfoData = buyerInfo[msg.sender][address(_token)];
    uint256 transactionLength = buyerInfoData.transactions.length;
    require(transactionLength != 0, "Not found transaction");
    Transaction storage transaction = buyerInfoData.transactions[transactionLength.sub(1)];
    require(transaction.status == TransactionStatus.PENDING_TRANSFER_FAIT, "Transaction missmatch");
    transaction.lockAmount = 0;
    transaction.status = TransactionStatus.FINISH;
    transaction.updateAt = block.number;

    uint256 fee = feeCalculator.calculateFee(transaction.amount);
    uint256 receiverAmount = transaction.amount.sub(fee);
    _token.safeTransfer(feeCollector, fee);
    _token.safeTransfer(_buyer, receiverAmount);

    // pay reward after complete transaction
    uint256 reward = getReward(transaction.amount);
    gov.mint(msg.sender, reward);
    emit ReleaseToken(msg.sender, _buyer, address(_token), transaction.amount, reward);
  }

  /* 
    Option admin manual release it not has reward and statistics
    For seller release token to buyer when the seller approve a evidence of faite transfer slip 
    _address is a receipt waller address
    _amount is value of token to transfer
    */
  function releaseTokenByAdmin(
    ERC20Upgradeable _token,
    address _seller,
    address _buyer
  ) external {
    require(hasRole(ADMIN_ROLE, msg.sender), "DOES_NOT_HAVE_ADMIN_ROLE");
    UserInfo storage buyerInfoData = buyerInfo[_seller][_buyer];
    uint256 transactionLength = buyerInfoData.transactions.length;
    require(transactionLength != 0, "Not found transaction");
    Transaction storage transaction = buyerInfoData.transactions[transactionLength.sub(1)];
    // require(transaction.status == TransactionStatus.PENDING_TRANSFER_FAIT, "Transaction is not pending");
    transaction.lockAmount = 0;
    transaction.status = TransactionStatus.FINISH;
    transaction.updateAt = block.number;
    transaction.remark = "Release by admin";

    uint256 fee = feeCalculator.calculateFee(transaction.amount);
    uint256 receiverAmount = transaction.amount.sub(fee);

    _token.safeTransfer(feeCollector, fee);
    _token.safeTransfer(_buyer, receiverAmount);

    emit ReleaseToken(_seller, _buyer, address(_token), transaction.amount, 0);
  }

  /* 
    Option 
  Seller or buyer appeal this transaction
    _seller is a seller waller address
    _buyer is a buyer waller address
    _remark is value of 1 is buyer is appeal 2 is seller is appeal
    */
  function appeal(
    string memory _txId,
    address _seller,
    address _buyer,
    uint256 _remark
  ) external {
    require(msg.sender == _seller || msg.sender == _buyer, "Not allow other appeal.");
    UserInfo storage buyerInfoData = buyerInfo[_seller][_buyer];
    uint256 transactionLength = buyerInfoData.transactions.length;
    require(transactionLength != 0, "Not found transaction");
    Transaction storage transaction = buyerInfoData.transactions[transactionLength.sub(1)];
    require(transaction.status != TransactionStatus.CANCELED, "Transaction is Cancelled.");
    transaction.status = TransactionStatus.APPEAL;
    transaction.updateAt = block.number;
    transaction.appealTxId = validator.addCase(
      address(transaction.token),
      _txId,
      _seller,
      _buyer,
      _remark,
      transaction.amount
    );

    emit AppealTransaction(_seller, _buyer, transaction.amount);
  }

  function getTransactionByIndex(
    address _seller,
    address _token,
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
    UserInfo storage buyerInfoData = buyerInfo[_seller][_token];
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

  function getTransaction(address _seller, address _token)
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
    UserInfo storage buyerInfoData = buyerInfo[_seller][_token];
    uint256 transactionLength = buyerInfoData.transactions.length;
    require(transactionLength != 0, "Not found transaction");
    return getTransactionByIndex(_seller, _token, transactionLength.sub(1));
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
  function ownerClaimToken(ERC20Upgradeable _token) public onlyOwner {
    _token.transfer(owner(), _token.balanceOf(address(this)));
  }

  // update RewardCalculator
  function updateRewardCalculator(address _rewardCalculator) public onlyOwner {
    rewardCalculator = RewardCalculator(_rewardCalculator);
  }

  // update RewardCalculator
  function updateFeeCalculator(address _feeCalculator) public onlyOwner {
    feeCalculator = FeeCalculator(_feeCalculator);
  }

  function getBuyerTransaction(address _seller, address _token)
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
    (status, amount, remark, lockAmount, createdAt, updatedAt) = getTransaction(_seller, _token);
  }

  /*
    Internal calculate reward for send to seller.
    _amount is value of transaction.
    */
  function getReward(uint256 _amount) internal view returns (uint256) {
    return rewardCalculator.calculateReward(_amount);
  }

  receive() external payable {}

  fallback() external payable {}
}
