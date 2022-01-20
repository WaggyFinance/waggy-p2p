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

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

interface AvatarNFT {
  function balanceOf(address _address) external returns (uint256);

  function getApproved(uint256 tokenId) external returns (address);

  function safeTransferFrom(
    address from,
    address to,
    uint256 tokenId
  ) external;
}

contract WaggyNFT is Ownable, ERC721URIStorage, ERC721Holder {
  using SafeMath for uint256;
  using Counters for Counters.Counter;
  using Strings for uint256;

  event Mint(address receiver, uint256 tokenId);
  event BuyAvatar(address buyer, uint256 tokenId);
  event SwapOldAvatar(address owner, uint256 newTokenId, uint256 oldTokenId);

  Counters.Counter private _tokenIds;
  Counters.Counter private _sellIndex;
  string public baseURI;
  mapping(uint256 => string) private uri;
  uint256 private nftPrice;
  uint256[] public mintTokenIds;

  mapping(uint256 => address) public nftOwner;
  AvatarNFT private oldAvatarNFT;

  constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

  function setPrice(uint256 _price) external onlyOwner {
    nftPrice = _price;
  }

  function setOldAvatar(address _oldAvatar) external onlyOwner {
    oldAvatarNFT = AvatarNFT(_oldAvatar);
  }

  function mintAvatar() external payable {
    require(oldAvatarNFT.balanceOf(msg.sender) == 0, "User swapOldAvatar instead.");
    require(balanceOf(msg.sender) == 0, "Maximun to mint.");
    require(msg.value == nftPrice, "Price missmatch");
    uint256 index = _sellIndex.current();
    require(index < mintTokenIds.length, "Avatar not enought.");
    uint256 tokenId = mintTokenIds[index];
    _mint(msg.sender, tokenId);
    nftOwner[tokenId] = msg.sender;

    _sellIndex.increment();

    emit BuyAvatar(msg.sender, tokenId);
  }

  // Mint all NFT on deploy and keep data for treading
  function mint(string memory _uri) external onlyOwner {
    uint256 newItemId = _tokenIds.current();
    uri[newItemId] = _uri;
    mintTokenIds.push(newItemId);
    _tokenIds.increment();

    emit Mint(address(this), newItemId);
  }

  function claim() external onlyOwner {
    (bool sent, ) = payable(owner()).call{ value: address(this).balance }("");
    require(sent, "Failed to send Ether");
  }

  function swapOldAvatar(uint256 _oldTokenId) external {
    require(balanceOf(msg.sender) == 0, "Maximun to mint.");
    require(oldAvatarNFT.balanceOf(msg.sender) > 0, "Only owner old avatar.");
    oldAvatarNFT.safeTransferFrom(msg.sender, address(this), _oldTokenId);

    uint256 index = _sellIndex.current();
    require(index < mintTokenIds.length, "Avatar not enought.");
    uint256 tokenId = mintTokenIds[index];

    _mint(msg.sender, tokenId);

    nftOwner[tokenId] = msg.sender;

    _sellIndex.increment();

    emit SwapOldAvatar(msg.sender, tokenId, _oldTokenId);
  }

  function getLastTokenId() external view returns (uint256) {
    return _tokenIds.current();
  }

  function tokenURI(uint256 _tokenId) public view override returns (string memory) {
    require(_exists(_tokenId), "URI query for nonexistent token");
    return string(abi.encodePacked(baseURI, uri[_tokenId]));
  }

  function setBaseURI(string memory _uri) external onlyOwner {
    baseURI = _uri;
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
    require(balanceOf(to) == 0, "Target already had.");
    nftOwner[tokenId] = to;
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
    require(balanceOf(to) == 0, "Target already had.");
     nftOwner[tokenId] = to;
    _safeTransfer(from, to, tokenId, _data);
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }
}
