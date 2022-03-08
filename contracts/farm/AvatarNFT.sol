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

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract AvatarNFT is Ownable, ERC721URIStorage {
  using SafeMath for uint256;
  using Counters for Counters.Counter;
  using Strings for uint256;

  event Mint(address user, uint256 tokenId);
  event SetPrice(address user, uint256 price);
  event Claim(address user, uint256 amount);
  event SetBaseURI(address user, string uri);
  event UpdatePriceFeed(address user, address feed);

  Counters.Counter private _tokenIds;
  string public baseURI;
  uint256 private nftPrice;
  mapping(address => uint256) public userOwnerTokenId;

  AggregatorV3Interface internal onePriceFeed;

  constructor(
    string memory _name,
    string memory _symbol,
    uint256 _price
  ) ERC721(_name, _symbol) {
    _setPrice(_price);
    onePriceFeed = AggregatorV3Interface(0xdCD81FbbD6c4572A69a534D8b8152c562dA8AbEF);
  }

  function setPriceFeed(address _address) external onlyOwner {
    onePriceFeed = AggregatorV3Interface(_address);

    emit UpdatePriceFeed(msg.sender, _address);
  }

  function _setPrice(uint256 _price) internal {
    nftPrice = _price;
  }

  function getONERate() public view returns (uint256) {
    (, int256 price, , , ) = onePriceFeed.latestRoundData();
    return uint256(price);
  }

  function setPrice(uint256 _price) external onlyOwner {
    _setPrice(_price);

    emit SetPrice(msg.sender, _price);
  }

  function getPrice() public view returns (uint256) {
    uint256 rate = getONERate();
    require(rate != 0, "Not found rate for swap.");

    uint256 payAmountPerDollar = uint256((1000000000000000000 / uint256(rate))).mul(100000000);
    return nftPrice.mul(payAmountPerDollar);
  }

  // Mint all NFT on deploy and keep data for treading
  function mint(address _receiver) external payable {
    require(userOwnerTokenId[msg.sender] == 0, "Maximun to mint");

    uint256 payAmount = getPrice();
    require(msg.value >= payAmount, "pay amount mismatch");

    uint256 newItemId = _tokenIds.current();
    _mint(_receiver, newItemId);
    _tokenIds.increment();

    userOwnerTokenId[msg.sender] = newItemId;

    emit Mint(msg.sender, newItemId);
  }

  function claim() external onlyOwner {
    uint256 _amount = address(this).balance;
    (bool sent, ) = payable(owner()).call{ value: _amount }("");
    require(sent, "Failed to send Ether");

    emit Claim(msg.sender, _amount);
  }

  function getWeight() external pure returns (uint256) {
    return 10;
  }

  function tokenURI(uint256 _tokenId) public view override returns (string memory) {
    require(_exists(_tokenId), "URI query for nonexistent token");
    return string(abi.encodePacked(baseURI, _tokenId.toString(), ".json"));
  }

  function setBaseURI(string memory _uri) external onlyOwner {
    baseURI = _uri;

    emit SetBaseURI(msg.sender, _uri);
  }

  /**
   * @dev See {IERC721-transferFrom}.
   */
  function transferFrom(
    address from,
    address to,
    uint256 tokenId
  ) public virtual override {
    //solhint-disable-next-line max-line-length
    require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");
    _transfer(from, to, tokenId);
  }

  /**
   * @dev See {IERC721-safeTransferFrom}.
   */
  function safeTransferFrom(
    address from,
    address to,
    uint256 tokenId
  ) public virtual override {
    safeTransferFrom(from, to, tokenId, "");
  }

  /**
   * @dev See {IERC721-safeTransferFrom}.
   */
  function safeTransferFrom(
    address from,
    address to,
    uint256 tokenId,
    bytes memory _data
  ) public virtual override {
    require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");
    _safeTransfer(from, to, tokenId, _data);
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }
}
