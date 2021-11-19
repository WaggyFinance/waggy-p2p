/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Merchant, MerchantInterface } from "../Merchant";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "AppealTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ApproveTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "DeleteShop",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "ReleaseToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "merchant",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SellerDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SetupShop",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_seller",
        type: "address",
      },
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_remark",
        type: "uint256",
      },
    ],
    name: "appeal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
    ],
    name: "approveTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "blackListUser",
    outputs: [
      {
        internalType: "contract BlackListUser",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        internalType: "string",
        name: "_remark",
        type: "string",
      },
    ],
    name: "cancelTransactionSeller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeCalculator",
    outputs: [
      {
        internalType: "contract FeeCalculator",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeCollector",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_seller",
        type: "address",
      },
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
    ],
    name: "fetchTransactionApproved",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_merchant",
        type: "address",
      },
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
    ],
    name: "getBuyerTransaction",
    outputs: [
      {
        internalType: "uint256",
        name: "status",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "remark",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "lockAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFeeCollector",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_seller",
        type: "address",
      },
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getTransactionByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "status",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "remark",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "lockAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updateAt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gov",
    outputs: [
      {
        internalType: "contract ERC20Upgradeable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gov",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardCalculator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeCalculator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeCollector",
        type: "address",
      },
      {
        internalType: "address",
        name: "_blackListUser",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lockTokenInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lockUserTokenInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerClaimToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_seller",
        type: "address",
      },
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
    ],
    name: "releaseTokenByAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
    ],
    name: "releaseTokenBySeller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardCalculator",
    outputs: [
      {
        internalType: "contract RewardCalculator",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_blackList",
        type: "address",
      },
    ],
    name: "setBlackList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_validator",
        type: "address",
      },
    ],
    name: "setValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "shopBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "shopLockBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "successTransactionCount",
    outputs: [
      {
        internalType: "uint256",
        name: "totalSellAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalSellCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract ERC20Upgradeable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "totalLockBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeCalculator",
        type: "address",
      },
    ],
    name: "updateFeeCalculator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardCalculator",
        type: "address",
      },
    ],
    name: "updateRewardCalculator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "validator",
    outputs: [
      {
        internalType: "contract IValidator",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612995806100206000396000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c806370942d211161011a578063b6b55f25116100ad578063d6f8bd431161007c578063d6f8bd43146103eb578063deddcdc2146103fe578063f2fde38b14610411578063f5f871f314610424578063fc0c546a14610437576101fb565b8063b6b55f251461039c578063c415b95c146103af578063c61cfdc7146103b7578063cc2a9a5b146103d8576101fb565b80638da5cb5b116100e95780638da5cb5b1461037157806396769e8914610379578063b00eb9fe14610381578063b59cf5a714610389576101fb565b806370942d2114610330578063715018a614610343578063727002411461034b5780638ceba87e1461035e576101fb565b80632e1a7d4d1161019257806349f4cd251161016157806349f4cd25146102e45780635554ba02146102f7578063648614d41461030a5780636c87f2981461031d576101fb565b80632e1a7d4d146102ae57806333bd789a146102c15780633a5381b5146102d457806342d8a9da146102dc576101fb565b80631327d3d8116101ce5780631327d3d81461026057806315b5bc991461027357806321044ed314610293578063236192701461029b576101fb565b8063045e4659146102005780631108ced91461021557806312d43a511461024357806312fde4b714610258575b600080fd5b61021361020e3660046120a8565b61043f565b005b61022861022336600461214d565b6106ab565b60405161023a96959493929190612860565b60405180910390f35b61024b61089a565b60405161023a91906122f6565b61024b6108a9565b61021361026e36600461208e565b6108b8565b6102866102813660046120a8565b610919565b60405161023a9190612849565b61024b610936565b6102866102a936600461208e565b610945565b6102136102bc36600461225c565b610957565b6102136102cf36600461208e565b610aa9565b61024b610b0a565b610213610b19565b6102866102f236600461208e565b610c63565b61021361030536600461208e565b610c75565b6102286103183660046120a8565b610ef7565b61028661032b36600461208e565b610f20565b61028661033e3660046120a8565b610f32565b610213611006565b61021361035936600461208e565b611051565b61021361036c36600461208e565b6110b2565b61024b611113565b61024b611122565b61024b611131565b61021361039736600461214d565b611140565b6102136103aa36600461225c565b61130b565b61024b6114c3565b6103ca6103c536600461208e565b6114d2565b60405161023a929190612852565b6102136103e63660046120da565b6114eb565b6102866103f93660046120a8565b6115cf565b61021361040c366004612188565b6115ec565b61021361041f36600461208e565b6117c4565b61021361043236600461228c565b611832565b61024b611a2d565b610447611a3c565b6001600160a01b0316610458611113565b6001600160a01b0316146104875760405162461bcd60e51b815260040161047e90612680565b60405180910390fd5b6001600160a01b038083166000908152606b602090815260408083209385168352929052208054806104cb5760405162461bcd60e51b815260040161047e90612484565b6000826104d9836001611a40565b815481106104f757634e487b7160e01b600052603260045260246000fd5b6000918252602090912060069091020190506001815460ff16600481111561052f57634e487b7160e01b600052602160045260246000fd5b1461054c5760405162461bcd60e51b815260040161047e906125ec565b60006003820155805460ff191660041781554360058201556040805180820190915260108082527f52656c656173652062792061646d696e0000000000000000000000000000000060209092019182526105aa916002840191611fde565b50606d5460018201546040516399a5d74760e01b81526000926001600160a01b0316916399a5d747916105e09190600401612849565b60206040518083038186803b1580156105f857600080fd5b505afa15801561060c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106309190612274565b9050600061064b828460010154611a4090919063ffffffff16565b606e5460715491925061066b916001600160a01b03908116911684611a53565b607154610682906001600160a01b03168783611a53565b6106a28761069d85600101546106978b611adb565b90611a40565b611afa565b50505050505050565b6001600160a01b038084166000908152606b6020908152604080832093861683529290529081208054829160609183918291829190806106fd5760405162461bcd60e51b815260040161047e90612484565b6000826000018a8154811061072257634e487b7160e01b600052603260045260246000fd5b600091825260209091206040805160c081019091526006909202018054829060ff16600481111561076357634e487b7160e01b600052602160045260246000fd5b600481111561078257634e487b7160e01b600052602160045260246000fd5b8152602001600182015481526020016002820180546107a0906128f8565b80601f01602080910402602001604051908101604052809291908181526020018280546107cc906128f8565b80156108195780601f106107ee57610100808354040283529160200191610819565b820191906000526020600020905b8154815290600101906020018083116107fc57829003601f168201915b50505050508152602001600382015481526020016004820154815260200160058201548152505090508060000151600481111561086657634e487b7160e01b600052602160045260246000fd5b9850806020015197508060400151965080606001519550806080015194508060a00151935050505093975093979195509350565b6072546001600160a01b031681565b606e546001600160a01b031690565b6108c0611a3c565b6001600160a01b03166108d1611113565b6001600160a01b0316146108f75760405162461bcd60e51b815260040161047e90612680565b607080546001600160a01b0319166001600160a01b0392909216919091179055565b606960209081526000928352604080842090915290825290205481565b606f546001600160a01b031681565b60656020526000908152604090205481565b606f5460405163410e938560e01b81526001600160a01b039091169063410e9385906109879033906004016122f6565b602060405180830381600087803b1580156109a157600080fd5b505af11580156109b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d99190612274565b156109f65760405162461bcd60e51b815260040161047e906126ec565b336000908152606560205260409020548015801590610a155750818110155b610a315760405162461bcd60e51b815260040161047e906126b5565b610a4733610a428461069733611b16565b611b31565b607154610a5e906001600160a01b03163384611a53565b6071546040517f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb91610a9d9133916001600160a01b0316908690612358565b60405180910390a15050565b610ab1611a3c565b6001600160a01b0316610ac2611113565b6001600160a01b031614610ae85760405162461bcd60e51b815260040161047e90612680565b606c80546001600160a01b0319166001600160a01b0392909216919091179055565b6070546001600160a01b031681565b610b21611a3c565b6001600160a01b0316610b32611113565b6001600160a01b031614610b585760405162461bcd60e51b815260040161047e90612680565b6071546001600160a01b031663a9059cbb610b71611113565b6071546040516370a0823160e01b81526001600160a01b03909116906370a0823190610ba19030906004016122f6565b60206040518083038186803b158015610bb957600080fd5b505afa158015610bcd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf19190612274565b6040518363ffffffff1660e01b8152600401610c0e92919061237c565b602060405180830381600087803b158015610c2857600080fd5b505af1158015610c3c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c60919061223c565b50565b606a6020526000908152604090205481565b336000908152606b602090815260408083206001600160a01b03851684529091529020805480610cb75760405162461bcd60e51b815260040161047e90612484565b600082610cc5836001611a40565b81548110610ce357634e487b7160e01b600052603260045260246000fd5b6000918252602090912060069091020190506001815460ff166004811115610d1b57634e487b7160e01b600052602160045260246000fd5b14610d385760405162461bcd60e51b815260040161047e9061244d565b600060038201819055815460ff191660049081178355436005840155606d5460018401546040516399a5d74760e01b81526001600160a01b03909216926399a5d74792610d86929101612849565b60206040518083038186803b158015610d9e57600080fd5b505afa158015610db2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd69190612274565b90506000610df1828460010154611a4090919063ffffffff16565b606e54607154919250610e11916001600160a01b03908116911684611a53565b607154610e28906001600160a01b03168783611a53565b33600090815260676020526040902060018401548154610e4791611b4d565b8155600180820154610e5891611b4d565b8160010181905550610e753361069d866001015461069733611adb565b6000610e848560010154611b59565b607254909150610e9e906001600160a01b03163383611a53565b60715460018601546040517f8fb99e20c1bbe800e8357ab5ea1db03d70ed059c2582a11772e4f38d304687b892610ee59233928d926001600160a01b031691908790612324565b60405180910390a15050505050505050565b60008060606000806000610f0b8888611be0565b949d939c50919a509850965090945092505050565b60666020526000908152604090205481565b6001600160a01b038083166000908152606b602090815260408083209385168352929052908120805480610f785760405162461bcd60e51b815260040161047e9061256f565b600082610f86836001611a40565b81548110610fa457634e487b7160e01b600052603260045260246000fd5b6000918252602090912060069091020190506001815460ff166004811115610fdc57634e487b7160e01b600052602160045260246000fd5b14610ff95760405162461bcd60e51b815260040161047e90612501565b6003015495945050505050565b61100e611a3c565b6001600160a01b031661101f611113565b6001600160a01b0316146110455760405162461bcd60e51b815260040161047e90612680565b61104f6000611c59565b565b611059611a3c565b6001600160a01b031661106a611113565b6001600160a01b0316146110905760405162461bcd60e51b815260040161047e90612680565b606f80546001600160a01b0319166001600160a01b0392909216919091179055565b6110ba611a3c565b6001600160a01b03166110cb611113565b6001600160a01b0316146110f15760405162461bcd60e51b815260040161047e90612680565b606d80546001600160a01b0319166001600160a01b0392909216919091179055565b6033546001600160a01b031690565b606c546001600160a01b031681565b606d546001600160a01b031681565b336001600160a01b038416148061115f5750336001600160a01b038316145b61117b5760405162461bcd60e51b815260040161047e906123df565b6001600160a01b038084166000908152606b602090815260408083209386168352929052208054806111bf5760405162461bcd60e51b815260040161047e90612484565b6000826111cd836001611a40565b815481106111eb57634e487b7160e01b600052603260045260246000fd5b6000918252602090912060069091020190506003815460ff16600481111561122357634e487b7160e01b600052602160045260246000fd5b14156112415760405162461bcd60e51b815260040161047e9061275a565b805460ff191660021781554360058201556070546071546001830154604051634a55e96560e11b81526001600160a01b03938416936394abd2ca93611292939116918b918b918b9190600401612324565b600060405180830381600087803b1580156112ac57600080fd5b505af11580156112c0573d6000803e3d6000fd5b505050507f0d37708392f7281623702f6e994aa5eb15b7124abddf9ebe10c3474250af68f9868683600101546040516112fb93929190612358565b60405180910390a1505050505050565b606f5460405163410e938560e01b81526001600160a01b039091169063410e93859061133b9033906004016122f6565b602060405180830381600087803b15801561135557600080fd5b505af1158015611369573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138d9190612274565b156113aa5760405162461bcd60e51b815260040161047e906126ec565b607154604051636eb1769f60e11b815282916001600160a01b03169063dd62ed3e906113dc903390309060040161230a565b60206040518083038186803b1580156113f457600080fd5b505afa158015611408573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142c9190612274565b101561144a5760405162461bcd60e51b815260040161047e906123a8565b607154611462906001600160a01b0316333084611cab565b61147933610a428361147333611b16565b90611b4d565b6071546040517f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f62916114b89133916001600160a01b0316908590612358565b60405180910390a150565b606e546001600160a01b031681565b6067602052600090815260409020805460019091015482565b600054610100900460ff1680611504575060005460ff16155b6115205760405162461bcd60e51b815260040161047e90612623565b600054610100900460ff1615801561154b576000805460ff1961ff0019909116610100171660011790555b611553611cd2565b607180546001600160a01b03199081166001600160a01b038a811691909117909255607280548216898416179055606c80548216888416179055606d80548216878416179055606e80548216868416179055606f805490911691841691909117905580156106a2576000805461ff001916905550505050505050565b606860209081526000928352604080842090915290825290205481565b336000908152606b602090815260408083206001600160a01b0386168452909152902080548061162e5760405162461bcd60e51b815260040161047e90612484565b60008261163c836001611a40565b8154811061165a57634e487b7160e01b600052603260045260246000fd5b6000918252602090912060069091020190506001815460ff16600481111561169257634e487b7160e01b600052602160045260246000fd5b146116af5760405162461bcd60e51b815260040161047e90612723565b600f8160050154436116c191906128b5565b10156116df5760405162461bcd60e51b815260040161047e90612538565b83516116f49060028301906020870190611fde565b50805460ff191660031781556070546071546001830154604051634a55e96560e11b81526001600160a01b03938416936394abd2ca936117409391169133918b91600491908201612324565b600060405180830381600087803b15801561175a57600080fd5b505af115801561176e573d6000803e3d6000fd5b505060715460018401546040517fd7fdcbe857ef16de1f0a207eb35c38c87d607ace3dc4b0cba3f5cf0fe661b31a94506117b5935089926001600160a01b03169190612358565b60405180910390a15050505050565b6117cc611a3c565b6001600160a01b03166117dd611113565b6001600160a01b0316146118035760405162461bcd60e51b815260040161047e90612680565b6001600160a01b0381166118295760405162461bcd60e51b815260040161047e906124bb565b610c6081611c59565b8161183c33611b16565b101561185a5760405162461bcd60e51b815260040161047e90612416565b61186b33610a428461069733611b16565b336000908152606b602090815260408083206001600160a01b0385168452909152812080549091811561191757826118a4836001611a40565b815481106118c257634e487b7160e01b600052603260045260246000fd5b6000918252602090912060069091020190506004815460ff1660048111156118fa57634e487b7160e01b600052602160045260246000fd5b146119175760405162461bcd60e51b815260040161047e90612812565b6040805160c081018252600180825260208083018990528351808201855260008082529484015260608301899052436080840181905260a084015286548083018855878552932082516006909402018054929390929091839160ff19169083600481111561199557634e487b7160e01b600052602160045260246000fd5b02179055506020828101516001830155604083015180516119bc9260028501920190611fde565b50606082015181600301556080820151816004015560a0820151816005015550506119ee3361069d8761147333611adb565b6071546040517ffd3e2035cd4b82435ab9216a224c21a535587ce9d4c25298c6508917093b0c50916117b59133916001600160a01b0316908990612358565b6071546001600160a01b031681565b3390565b6000611a4c82846128b5565b9392505050565b611ad68363a9059cbb60e01b8484604051602401611a7292919061237c565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d56565b505050565b6001600160a01b0381166000908152606a60205260409020545b919050565b6001600160a01b039091166000908152606a6020526040902055565b6001600160a01b031660009081526065602052604090205490565b6001600160a01b03909116600090815260656020526040902055565b6000611a4c828461289d565b606c5460405163d2d7231f60e01b81526000916001600160a01b03169063d2d7231f90611b8a908590600401612849565b60206040518083038186803b158015611ba257600080fd5b505afa158015611bb6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bda9190612274565b92915050565b6001600160a01b038083166000908152606b602090815260408083209385168352929052908120805482916060918391829182919080611c325760405162461bcd60e51b815260040161047e90612484565b611c428a8a610223846001611a40565b949f939e50919c509a509850909650945050505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b611ccc846323b872dd60e01b858585604051602401611a7293929190612358565b50505050565b600054610100900460ff1680611ceb575060005460ff16155b611d075760405162461bcd60e51b815260040161047e90612623565b600054610100900460ff16158015611d32576000805460ff1961ff0019909116610100171660011790555b611d3a611de5565b611d42611e58565b8015610c60576000805461ff001916905550565b6000611dab826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611ec89092919063ffffffff16565b805190915015611ad65780806020019051810190611dc9919061223c565b611ad65760405162461bcd60e51b815260040161047e906127c8565b600054610100900460ff1680611dfe575060005460ff16155b611e1a5760405162461bcd60e51b815260040161047e90612623565b600054610100900460ff16158015611d42576000805460ff1961ff0019909116610100171660011790558015610c60576000805461ff001916905550565b600054610100900460ff1680611e71575060005460ff16155b611e8d5760405162461bcd60e51b815260040161047e90612623565b600054610100900460ff16158015611eb8576000805460ff1961ff0019909116610100171660011790555b611d42611ec3611a3c565b611c59565b6060611ed78484600085611edf565b949350505050565b606082471015611f015760405162461bcd60e51b815260040161047e906125a6565b611f0a85611f9f565b611f265760405162461bcd60e51b815260040161047e90612791565b600080866001600160a01b03168587604051611f4291906122da565b60006040518083038185875af1925050503d8060008114611f7f576040519150601f19603f3d011682016040523d82523d6000602084013e611f84565b606091505b5091509150611f94828286611fa5565b979650505050505050565b3b151590565b60608315611fb4575081611a4c565b825115611fc45782518084602001fd5b8160405162461bcd60e51b815260040161047e9190612395565b828054611fea906128f8565b90600052602060002090601f01602090048101928261200c5760008555612052565b82601f1061202557805160ff1916838001178555612052565b82800160010185558215612052579182015b82811115612052578251825591602001919060010190612037565b5061205e929150612062565b5090565b5b8082111561205e5760008155600101612063565b80356001600160a01b0381168114611af557600080fd5b60006020828403121561209f578081fd5b611a4c82612077565b600080604083850312156120ba578081fd5b6120c383612077565b91506120d160208401612077565b90509250929050565b60008060008060008060c087890312156120f2578182fd5b6120fb87612077565b955061210960208801612077565b945061211760408801612077565b935061212560608801612077565b925061213360808801612077565b915061214160a08801612077565b90509295509295509295565b600080600060608486031215612161578283fd5b61216a84612077565b925061217860208501612077565b9150604084013590509250925092565b6000806040838503121561219a578182fd5b6121a383612077565b915060208084013567ffffffffffffffff808211156121c0578384fd5b818601915086601f8301126121d3578384fd5b8135818111156121e5576121e5612949565b604051601f8201601f191681018501838111828210171561220857612208612949565b604052818152838201850189101561221e578586fd5b81858501868301378585838301015280955050505050509250929050565b60006020828403121561224d578081fd5b81518015158114611a4c578182fd5b60006020828403121561226d578081fd5b5035919050565b600060208284031215612285578081fd5b5051919050565b6000806040838503121561229e578182fd5b823591506120d160208401612077565b600081518084526122c68160208601602086016128cc565b601f01601f19169290920160200192915050565b600082516122ec8184602087016128cc565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b03958616815293851660208501529190931660408301526060820192909252608081019190915260a00190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b600060208252611a4c60208301846122ae565b60208082526012908201527f637265646974206e6f7420656e6f756774680000000000000000000000000000604082015260600190565b60208082526017908201527f4e6f7420616c6c6f77206f746865722061707065616c2e000000000000000000604082015260600190565b60208082526013908201527f42616c616e6365206e6f7420656e6f7567746800000000000000000000000000604082015260600190565b60208082526015908201527f5472616e73616374696f6e206d6973736d617463680000000000000000000000604082015260600190565b60208082526015908201527f4e6f7420666f756e64207472616e73616374696f6e0000000000000000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601d908201527f5472616e73616374696f6e20737461747573206d6973736d617463682e000000604082015260600190565b60208082526012908201527f52657175696572656420313520626c6f636b0000000000000000000000000000604082015260600190565b60208082526015908201527f5472616e73616374696f6e206e6f742065786973740000000000000000000000604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b6020808252601a908201527f5472616e73616374696f6e206973206e6f742070656e64696e67000000000000604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526013908201527f62616c616e6365206e6f7420656e6f7567746800000000000000000000000000604082015260600190565b60208082526017908201527f4e6f7420616c6c6f772073757370656e6420757365722e000000000000000000604082015260600190565b60208082526018908201527f5472616e73616374696f6e207374617475732077726f6e670000000000000000604082015260600190565b60208082526019908201527f5472616e73616374696f6e2069732043616e63656c6c65642e00000000000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252601c908201527f5472616e73616374696f6e20737461747573206d6973736d6174636800000000604082015260600190565b90815260200190565b918252602082015260400190565b600087825286602083015260c0604083015261287f60c08301876122ae565b606083019590955250608081019290925260a0909101529392505050565b600082198211156128b0576128b0612933565b500190565b6000828210156128c7576128c7612933565b500390565b60005b838110156128e75781810151838201526020016128cf565b83811115611ccc5750506000910152565b60028104600182168061290c57607f821691505b6020821081141561292d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212203939b075497b1cd988d6dcb4d1e626239f014f928f3cc52534c270257b2c9cbb64736f6c63430008000033";

export class Merchant__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Merchant> {
    return super.deploy(overrides || {}) as Promise<Merchant>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Merchant {
    return super.attach(address) as Merchant;
  }
  connect(signer: Signer): Merchant__factory {
    return super.connect(signer) as Merchant__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerchantInterface {
    return new utils.Interface(_abi) as MerchantInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Merchant {
    return new Contract(address, _abi, signerOrProvider) as Merchant;
  }
}
