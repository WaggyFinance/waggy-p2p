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
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
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
        internalType: "contract ERC20",
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
        internalType: "contract ERC20",
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
  "0x608060405234801561001057600080fd5b50612b67806100206000396000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c806370942d211161011a578063b6b55f25116100ad578063d6f8bd431161007c578063d6f8bd43146104a5578063deddcdc2146104d0578063f2fde38b146104e3578063f5f871f3146104f6578063fc0c546a1461050957600080fd5b8063b6b55f2514610430578063c415b95c14610443578063c61cfdc714610456578063cc2a9a5b1461049257600080fd5b80638da5cb5b116100e95780638da5cb5b146103e657806396769e89146103f7578063b00eb9fe1461040a578063b59cf5a71461041d57600080fd5b806370942d21146103a5578063715018a6146103b857806372700241146103c05780638ceba87e146103d357600080fd5b80632e1a7d4d1161019257806349f4cd251161016157806349f4cd251461033f5780635554ba021461035f578063648614d4146103725780636c87f2981461038557600080fd5b80632e1a7d4d146102fe57806333bd789a146103115780633a5381b51461032457806342d8a9da1461033757600080fd5b80631327d3d8116101ce5780631327d3d81461027f57806315b5bc991461029257806321044ed3146102cb57806323619270146102de57600080fd5b8063045e4659146102005780631108ced91461021557806312d43a511461024357806312fde4b71461026e575b600080fd5b61021361020e3660046127a8565b61051c565b005b61022861022336600461284d565b61084e565b60405161023a96959493929190612a12565b60405180910390f35b607254610256906001600160a01b031681565b6040516001600160a01b03909116815260200161023a565b606e546001600160a01b0316610256565b61021361028d36600461278e565b610a65565b6102bd6102a03660046127a8565b606960209081526000928352604080842090915290825290205481565b60405190815260200161023a565b606f54610256906001600160a01b031681565b6102bd6102ec36600461278e565b60656020526000908152604090205481565b61021361030c366004612965565b610acf565b61021361031f36600461278e565b610cbb565b607054610256906001600160a01b031681565b610213610d25565b6102bd61034d36600461278e565b606a6020526000908152604090205481565b61021361036d36600461278e565b610e8c565b6102286103803660046127a8565b6111ba565b6102bd61039336600461278e565b60666020526000908152604090205481565b6102bd6103b33660046127a8565b6111e3565b61021361132d565b6102136103ce36600461278e565b611381565b6102136103e136600461278e565b6113eb565b6033546001600160a01b0316610256565b606c54610256906001600160a01b031681565b606d54610256906001600160a01b031681565b61021361042b36600461284d565b611455565b61021361043e366004612965565b6116fd565b606e54610256906001600160a01b031681565b61047d61046436600461278e565b6067602052600090815260409020805460019091015482565b6040805192835260208301919091520161023a565b6102136104a03660046127da565b611924565b6102bd6104b33660046127a8565b606860209081526000928352604080842090915290825290205481565b6102136104de366004612888565b611a46565b6102136104f136600461278e565b611ce6565b610213610504366004612995565b611d9c565b607154610256906001600160a01b031681565b6033546001600160a01b031633146105695760405162461bcd60e51b81526020600482018190526024820152600080516020612b1283398151915260448201526064015b60405180910390fd5b6001600160a01b038083166000908152606b602090815260408083209385168352929052208054806105d55760405162461bcd60e51b81526020600482015260156024820152742737ba103337bab732103a3930b739b0b1ba34b7b760591b6044820152606401610560565b6000826105e3836001612025565b8154811061060157634e487b7160e01b600052603260045260246000fd5b6000918252602090912060069091020190506001815460ff16600481111561063957634e487b7160e01b600052602160045260246000fd5b146106c45760405162461bcd60e51b815260206004820152604f60248201527f4e6f7420616c6c6f7720646f2074686973207472616e73616374696f6e20626560448201527f6361757365207472616e73616374696f6e206973206e6f742077616974696e6760648201526e103a3930b739b332b9103330b4ba1760891b608482015260a401610560565b60006003820155805460ff191660041781554260058201556040805180820190915260108082527f52656c656173652062792061646d696e0000000000000000000000000000000060209092019182526107229160028401916126d9565b50606d5460018201546040516399a5d74760e01b815260048101919091526000916001600160a01b0316906399a5d7479060240160206040518083038186803b15801561076e57600080fd5b505afa158015610782573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a6919061297d565b905060006107c182846001015461202590919063ffffffff16565b606e546071549192506107e1916001600160a01b03908116911684612038565b6071546107f8906001600160a01b03168783612038565b6108458761082985600101546108238b6001600160a01b03166000908152606a602052604090205490565b90612025565b6001600160a01b039091166000908152606a6020526040902055565b50505050505050565b6001600160a01b038084166000908152606b6020908152604080832093861683529290529081208054829160609183918291829190806108c85760405162461bcd60e51b81526020600482015260156024820152742737ba103337bab732103a3930b739b0b1ba34b7b760591b6044820152606401610560565b6000826000018a815481106108ed57634e487b7160e01b600052603260045260246000fd5b600091825260209091206040805160c081019091526006909202018054829060ff16600481111561092e57634e487b7160e01b600052602160045260246000fd5b600481111561094d57634e487b7160e01b600052602160045260246000fd5b81526020016001820154815260200160028201805461096b90612aaa565b80601f016020809104026020016040519081016040528092919081815260200182805461099790612aaa565b80156109e45780601f106109b9576101008083540402835291602001916109e4565b820191906000526020600020905b8154815290600101906020018083116109c757829003601f168201915b505050505081526020016003820154815260200160048201548152602001600582015481525050905080600001516004811115610a3157634e487b7160e01b600052602160045260246000fd5b9850806020015197508060400151965080606001519550806080015194508060a00151935050505093975093979195509350565b6033546001600160a01b03163314610aad5760405162461bcd60e51b81526020600482018190526024820152600080516020612b128339815191526044820152606401610560565b607080546001600160a01b0319166001600160a01b0392909216919091179055565b606f5460405163410e938560e01b81523360048201526001600160a01b039091169063410e938590602401602060405180830381600087803b158015610b1457600080fd5b505af1158015610b28573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4c919061297d565b15610b995760405162461bcd60e51b815260206004820152601760248201527f4e6f7420616c6c6f772073757370656e6420757365722e0000000000000000006044820152606401610560565b33600090815260656020526040812054118015610bc55750336000908152606560205260409020548110155b610c115760405162461bcd60e51b815260206004820152601360248201527f62616c616e6365206e6f7420656e6f75677468000000000000000000000000006044820152606401610560565b610c5433610c3883610823336001600160a01b031660009081526065602052604090205490565b6001600160a01b03909116600090815260656020526040902055565b607154610c6b906001600160a01b03163383612038565b607154604080513381526001600160a01b03909216602083015281018290527f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb906060015b60405180910390a150565b6033546001600160a01b03163314610d035760405162461bcd60e51b81526020600482018190526024820152600080516020612b128339815191526044820152606401610560565b606c80546001600160a01b0319166001600160a01b0392909216919091179055565b6033546001600160a01b03163314610d6d5760405162461bcd60e51b81526020600482018190526024820152600080516020612b128339815191526044820152606401610560565b6071546001600160a01b031663a9059cbb610d906033546001600160a01b031690565b6071546040516370a0823160e01b81523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b158015610dd357600080fd5b505afa158015610de7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0b919061297d565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381600087803b158015610e5157600080fd5b505af1158015610e65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e899190612945565b50565b336000908152606b602090815260408083206001600160a01b03851684529091529020805480610ef65760405162461bcd60e51b81526020600482015260156024820152742737ba103337bab732103a3930b739b0b1ba34b7b760591b6044820152606401610560565b600082610f04836001612025565b81548110610f2257634e487b7160e01b600052603260045260246000fd5b6000918252602090912060069091020190506001815460ff166004811115610f5a57634e487b7160e01b600052602160045260246000fd5b14610fe55760405162461bcd60e51b815260206004820152604f60248201527f4e6f7420616c6c6f7720646f2074686973207472616e73616374696f6e20626560448201527f6361757365207472616e73616374696f6e206973206e6f742077616974696e6760648201526e103a3930b739b332b9103330b4ba1760891b608482015260a401610560565b600060038201819055815460ff191660049081178355426005840155606d5460018401546040516399a5d74760e01b8152928301526001600160a01b0316906399a5d7479060240160206040518083038186803b15801561104557600080fd5b505afa158015611059573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107d919061297d565b9050600061109882846001015461202590919063ffffffff16565b606e546071549192506110b8916001600160a01b03908116911684612038565b6071546110cf906001600160a01b03168783612038565b336000908152606760205260409020600184015481546110ee916120b5565b81556001808201546110ff916120b5565b600180830191909155840154336000818152606a60205260409020546111289261082991610823565b600061113785600101546120c1565b607254909150611151906001600160a01b03163383612038565b6071546001860154604080513381526001600160a01b03808d166020830152909316908301526060820152608081018290527f8fb99e20c1bbe800e8357ab5ea1db03d70ed059c2582a11772e4f38d304687b89060a00160405180910390a15050505050505050565b600080606060008060006111ce8888612144565b949d939c50919a509850965090945092505050565b6001600160a01b038083166000908152606b6020908152604080832093851683529290529081208054806112655760405162461bcd60e51b815260206004820152602360248201527f4275796572206e6576657220686164207472616e73616374696f6e206265666f60448201526239329760e91b6064820152608401610560565b600082611273836001612025565b8154811061129157634e487b7160e01b600052603260045260246000fd5b6000918252602090912060069091020190506001815460ff1660048111156112c957634e487b7160e01b600052602160045260246000fd5b146113205760405162461bcd60e51b815260206004820152602160248201527f5472616e73616374696f6e20737461747573206973206f75746f6620666c6f776044820152601760f91b6064820152608401610560565b6003015495945050505050565b6033546001600160a01b031633146113755760405162461bcd60e51b81526020600482018190526024820152600080516020612b128339815191526044820152606401610560565b61137f60006121e5565b565b6033546001600160a01b031633146113c95760405162461bcd60e51b81526020600482018190526024820152600080516020612b128339815191526044820152606401610560565b606f80546001600160a01b0319166001600160a01b0392909216919091179055565b6033546001600160a01b031633146114335760405162461bcd60e51b81526020600482018190526024820152600080516020612b128339815191526044820152606401610560565b606d80546001600160a01b0319166001600160a01b0392909216919091179055565b336001600160a01b03841614806114745750336001600160a01b038316145b6114c05760405162461bcd60e51b815260206004820152601760248201527f4e6f7420616c6c6f77206f746865722061707065616c2e0000000000000000006044820152606401610560565b6001600160a01b038084166000908152606b6020908152604080832093861683529290522080548061152c5760405162461bcd60e51b81526020600482015260156024820152742737ba103337bab732103a3930b739b0b1ba34b7b760591b6044820152606401610560565b60008261153a836001612025565b8154811061155857634e487b7160e01b600052603260045260246000fd5b6000918252602090912060069091020190506003815460ff16600481111561159057634e487b7160e01b600052602160045260246000fd5b14156116045760405162461bcd60e51b815260206004820152603c60248201527f4e6f7420616c6c6f7720646f2074686973207472616e73616374696f6e20626560448201527f6361757365207472616e73616374696f6e2069732063616e63656c2e000000006064820152608401610560565b805460ff19166002178155426005820155607054607154600183015460405163085031fd60e11b81524360048201526001600160a01b039283166024820152898316604482015288831660648201526084810188905260a48101919091529116906310a063fa9060c401600060405180830381600087803b15801561168857600080fd5b505af115801561169c573d6000803e3d6000fd5b505050506001810154604080514381526001600160a01b0389811660208301528816818301526060810192909252517fe466e46688da0fd28a831a5d94ad83ebc290ff594b2a35cc0cf1ea16f27902b79181900360800190a1505050505050565b606f5460405163410e938560e01b81523360048201526001600160a01b039091169063410e938590602401602060405180830381600087803b15801561174257600080fd5b505af1158015611756573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061177a919061297d565b156117c75760405162461bcd60e51b815260206004820152601760248201527f4e6f7420616c6c6f772073757370656e6420757365722e0000000000000000006044820152606401610560565b607154604051636eb1769f60e11b815233600482015230602482015282916001600160a01b03169063dd62ed3e9060440160206040518083038186803b15801561181057600080fd5b505afa158015611824573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611848919061297d565b10156118965760405162461bcd60e51b815260206004820152601260248201527f637265646974206e6f7420656e6f7567746800000000000000000000000000006044820152606401610560565b6071546118ae906001600160a01b0316333084612237565b6118db33610c38836118d5336001600160a01b031660009081526065602052604090205490565b906120b5565b607154604080513381526001600160a01b03909216602083015281018290527f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f6290606001610cb0565b600054610100900460ff168061193d575060005460ff16155b6119a05760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610560565b600054610100900460ff161580156119c2576000805461ffff19166101011790555b6119ca612275565b607180546001600160a01b03199081166001600160a01b038a811691909117909255607280548216898416179055606c80548216888416179055606d80548216878416179055606e80548216868416179055606f80549091169184169190911790558015610845576000805461ff001916905550505050505050565b336000908152606b602090815260408083206001600160a01b03861684529091529020805480611ab05760405162461bcd60e51b81526020600482015260156024820152742737ba103337bab732103a3930b739b0b1ba34b7b760591b6044820152606401610560565b600082611abe836001612025565b81548110611adc57634e487b7160e01b600052603260045260246000fd5b6000918252602090912060069091020190506001815460ff166004811115611b1457634e487b7160e01b600052602160045260246000fd5b14611b735760405162461bcd60e51b815260206004820152602960248201527f4f6e6c792070656e64696e67207472616e736665722066616974206974206361604482015268371031b0b731b2b61760b91b6064820152608401610560565b610384816005015442611b869190612a67565b1015611be05760405162461bcd60e51b815260206004820152602360248201527f43616e27742063616e63656c206265636175736520696e2064656c617920746960448201526236b29760e91b6064820152608401610560565b8351611bf590600283019060208701906126d9565b50805460ff19166003178155607054607154600183015460405163085031fd60e11b8152436004828101919091526001600160a01b0393841660248301523360448301528984166064830152608482015260a48101919091529116906310a063fa9060c401600060405180830381600087803b158015611c7457600080fd5b505af1158015611c88573d6000803e3d6000fd5b50506071546001840154604080516001600160a01b03808c16825290931660208401528201527fd7fdcbe857ef16de1f0a207eb35c38c87d607ace3dc4b0cba3f5cf0fe661b31a925060600190505b60405180910390a15050505050565b6033546001600160a01b03163314611d2e5760405162461bcd60e51b81526020600482018190526024820152600080516020612b128339815191526044820152606401610560565b6001600160a01b038116611d935760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610560565b610e89816121e5565b33600090815260656020526040902054821115611db857600080fd5b611ddf33610c3884610823336001600160a01b031660009081526065602052604090205490565b336000908152606b602090815260408083206001600160a01b03851684529091528120805490918115611eef5782611e18836001612025565b81548110611e3657634e487b7160e01b600052603260045260246000fd5b6000918252602090912060069091020190506004815460ff166004811115611e6e57634e487b7160e01b600052602160045260246000fd5b14611eef5760405162461bcd60e51b815260206004820152604560248201527f4e6f7420616c6c6f7720646f2074686973207472616e73616374696f6e20626560448201527f6361757365207472616e73616374696f6e206265666f7265206973206e6f74206064820152643237b7329760d91b608482015260a401610560565b6040805160c081018252600180825260208083018990528351808201855260008082529484015260608301899052426080840181905260a084015286548083018855878552932082516006909402018054929390929091839160ff191690836004811115611f6d57634e487b7160e01b600052602160045260246000fd5b0217905550602082810151600183015560408301518051611f9492600285019201906126d9565b50606082015181600301556080820151816004015560a082015181600501555050611fdc33610829876118d5336001600160a01b03166000908152606a602052604090205490565b607154604080513381526001600160a01b03909216602083015281018690527ffd3e2035cd4b82435ab9216a224c21a535587ce9d4c25298c6508917093b0c5090606001611cd7565b60006120318284612a67565b9392505050565b6040516001600160a01b0383166024820152604481018290526120b090849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166001600160e01b031990931692909217909152612337565b505050565b60006120318284612a4f565b606c5460405163d2d7231f60e01b8152600481018390526000916001600160a01b03169063d2d7231f9060240160206040518083038186803b15801561210657600080fd5b505afa15801561211a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061213e919061297d565b92915050565b6001600160a01b038083166000908152606b6020908152604080832093851683529290529081208054829160609183918291829190806121be5760405162461bcd60e51b81526020600482015260156024820152742737ba103337bab732103a3930b739b0b1ba34b7b760591b6044820152606401610560565b6121ce8a8a610223846001612025565b949f939e50919c509a509850909650945050505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6040516001600160a01b038085166024830152831660448201526064810182905261226f9085906323b872dd60e01b90608401612064565b50505050565b600054610100900460ff168061228e575060005460ff16155b6122f15760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610560565b600054610100900460ff16158015612313576000805461ffff19166101011790555b61231b612409565b6123236124ba565b8015610e89576000805461ff001916905550565b600061238c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166125619092919063ffffffff16565b8051909150156120b057808060200190518101906123aa9190612945565b6120b05760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610560565b600054610100900460ff1680612422575060005460ff16155b6124855760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610560565b600054610100900460ff16158015612323576000805461ffff19166101011790558015610e89576000805461ff001916905550565b600054610100900460ff16806124d3575060005460ff16155b6125365760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610560565b600054610100900460ff16158015612558576000805461ffff19166101011790555b612323336121e5565b60606125708484600085612578565b949350505050565b6060824710156125d95760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610560565b843b6126275760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610560565b600080866001600160a01b0316858760405161264391906129e3565b60006040518083038185875af1925050503d8060008114612680576040519150601f19603f3d011682016040523d82523d6000602084013e612685565b606091505b50915091506126958282866126a0565b979650505050505050565b606083156126af575081612031565b8251156126bf5782518084602001fd5b8160405162461bcd60e51b815260040161056091906129ff565b8280546126e590612aaa565b90600052602060002090601f016020900481019282612707576000855561274d565b82601f1061272057805160ff191683800117855561274d565b8280016001018555821561274d579182015b8281111561274d578251825591602001919060010190612732565b5061275992915061275d565b5090565b5b80821115612759576000815560010161275e565b80356001600160a01b038116811461278957600080fd5b919050565b60006020828403121561279f578081fd5b61203182612772565b600080604083850312156127ba578081fd5b6127c383612772565b91506127d160208401612772565b90509250929050565b60008060008060008060c087890312156127f2578182fd5b6127fb87612772565b955061280960208801612772565b945061281760408801612772565b935061282560608801612772565b925061283360808801612772565b915061284160a08801612772565b90509295509295509295565b600080600060608486031215612861578283fd5b61286a84612772565b925061287860208501612772565b9150604084013590509250925092565b6000806040838503121561289a578182fd5b6128a383612772565b9150602083013567ffffffffffffffff808211156128bf578283fd5b818501915085601f8301126128d2578283fd5b8135818111156128e4576128e4612afb565b604051601f8201601f19908116603f0116810190838211818310171561290c5761290c612afb565b81604052828152886020848701011115612924578586fd5b82602086016020830137856020848301015280955050505050509250929050565b600060208284031215612956578081fd5b81518015158114612031578182fd5b600060208284031215612976578081fd5b5035919050565b60006020828403121561298e578081fd5b5051919050565b600080604083850312156129a7578182fd5b823591506127d160208401612772565b600081518084526129cf816020860160208601612a7e565b601f01601f19169290920160200192915050565b600082516129f5818460208701612a7e565b9190910192915050565b60208152600061203160208301846129b7565b86815285602082015260c060408201526000612a3160c08301876129b7565b606083019590955250608081019290925260a0909101529392505050565b60008219821115612a6257612a62612ae5565b500190565b600082821015612a7957612a79612ae5565b500390565b60005b83811015612a99578181015183820152602001612a81565b8381111561226f5750506000910152565b600181811c90821680612abe57607f821691505b60208210811415612adf57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220f4dc383499f95eda6908e5c488230808595caeb0c58a45c13cf6abd20b60621264736f6c63430008040033";

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
