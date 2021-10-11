/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Validator, ValidatorInterface } from "../Validator";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxPercentValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minPercentValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_caseId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_answer",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_remark",
        type: "string",
      },
    ],
    name: "CASE_GEN_RESULT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_caseId",
        type: "uint256",
      },
    ],
    name: "CASE_VOTE_DONE",
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
        name: "_sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_caseId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_answer",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_remark",
        type: "string",
      },
    ],
    name: "USER_DECISION",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_totalValue",
        type: "uint256",
      },
    ],
    name: "addCase",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "_caseId",
        type: "uint256",
      },
    ],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "_caseId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_randomness",
        type: "bytes32",
      },
    ],
    name: "evaluate",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "_caseId",
        type: "uint256",
      },
    ],
    name: "getCaseTotalValue",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_caseId",
        type: "uint256",
      },
    ],
    name: "getCaseValue",
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
    name: "getTotalCollateral",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_caseId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getUserDecision",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        internalType: "uint256",
        name: "_caseId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "getUserResultInCase",
    outputs: [
      {
        internalType: "bool",
        name: "_isWin",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_betAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxPercentValue",
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
    name: "minPercentValue",
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
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_caseId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_answer",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_remark",
        type: "string",
      },
    ],
    name: "play",
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
    name: "totalCollateral",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200288538038062002885833981810160405281019062000037919062000158565b620000576200004b6200007560201b60201c565b6200007d60201b60201c565b816006819055508260058190555080600781905550505050620001d2565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000815190506200015281620001b8565b92915050565b6000806000606084860312156200016e57600080fd5b60006200017e8682870162000141565b9350506020620001918682870162000141565b9250506040620001a48682870162000141565b9150509250925092565b6000819050919050565b620001c381620001ae565b8114620001cf57600080fd5b50565b6126a380620001e26000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638da5cb5b11610097578063de2d17b911610066578063de2d17b914610276578063e5a86335146102a7578063f2fde38b146102d7578063f71e36e6146102f3576100f5565b80638da5cb5b146101fe578063bedf0e4a1461021c578063d0f2f3e01461023a578063d6eb591014610258576100f5565b806340d14167116100d357806340d14167146101765780634ac8eb5f146101a65780636bfbb12a146101c4578063715018a6146101f4576100f5565b806311682722146100fa578063174e31c41461012a578063277be57e14610146575b600080fd5b610114600480360381019061010f9190611be9565b61030f565b6040516101219190612113565b60405180910390f35b610144600480360381019061013f9190611be9565b6103c9565b005b610160600480360381019061015b9190611be9565b610666565b60405161016d9190612113565b60405180910390f35b610190600480360381019061018b9190611be9565b6106fe565b60405161019d9190612113565b60405180910390f35b6101ae610796565b6040516101bb9190612113565b60405180910390f35b6101de60048036038101906101d99190611c74565b61079c565b6040516101eb9190612018565b60405180910390f35b6101fc610edd565b005b610206610f65565b6040516102139190611f28565b60405180910390f35b610224610f8e565b6040516102319190612113565b60405180910390f35b610242610f94565b60405161024f9190612113565b60405180910390f35b610260610f9a565b60405161026d9190612113565b60405180910390f35b610290600480360381019061028b9190611c25565b610fa4565b60405161029e929190611fef565b60405180910390f35b6102c160048036038101906102bc9190611c25565b61119b565b6040516102ce9190611fd4565b60405180910390f35b6102f160048036038101906102ec9190611bc0565b611278565b005b61030d60048036038101906103089190611cc3565b611370565b005b600060016000815480929190610324906123ac565b91905055506000600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600154815481106103a4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060090201905082816004018190555060015491505092915050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610442577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600902019050600080600115158360000160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff16151514156104b857600080fd5b6104c3858533610fa4565b8092508193505050811561065f57600061051561050260646104f4600754886005015461193d90919063ffffffff16565b61195390919063ffffffff16565b856005015461196990919063ffffffff16565b9050600061053385600201805490508361195390919063ffffffff16565b9050600061054a828561197f90919063ffffffff16565b905060018660000160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160006101000a81548160ff021916908315150217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3033846040518463ffffffff1660e01b815260040161060893929190611f43565b602060405180830381600087803b15801561062257600080fd5b505af1158015610636573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065a9190611d52565b505050505b5050505050565b600080600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481106106e0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600902019050806004015491505092915050565b600080600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110610778577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600902019050806003015491505092915050565b60045481565b60006107a6611995565b73ffffffffffffffffffffffffffffffffffffffff166107c4610f65565b73ffffffffffffffffffffffffffffffffffffffff161461081a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610811906120b3565b60405180910390fd5b6000600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208481548110610893577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600902019050600060f81b81600601546000602081106108e6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461094c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094390612033565b60405180910390fd5b60008060005b8360010180549050811015610b8e57600084600101828154811061099f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008560000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a00160405290816000820154815260200160018201548152602001600282018054610a3e90612349565b80601f0160208091040260200160405190810160405280929190818152602001828054610a6a90612349565b8015610ab75780601f10610a8c57610100808354040283529160200191610ab7565b820191906000526020600020905b815481529060010190602001808311610a9a57829003601f168201915b50505050508152602001600382015481526020016004820160009054906101000a900460ff16151515158152505090506000816000015189604051602001610b00929190611efc565b6040516020818303038152906040528051906020012090507f4255595945520000000000000000000000000000000000000000000000000000811415610b5e57610b5782602001518761197f90919063ffffffff16565b9550610b78565b610b7582602001518661197f90919063ffffffff16565b94505b5050508080610b86906123ac565b915050610952565b5080821115610bc5577f42555959455200000000000000000000000000000000000000000000000000008360060181905550610c26565b80821015610bfb577f53454c4c455200000000000000000000000000000000000000000000000000008360060181905550610c25565b7f4551554956414c454e540000000000000000000000000000000000000000000083600601819055505b5b600080600090505b8460010180549050811015610e99576000856001018281548110610c7b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008660000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a00160405290816000820154815260200160018201548152602001600282018054610d1a90612349565b80601f0160208091040260200160405190810160405280929190818152602001828054610d4690612349565b8015610d935780601f10610d6857610100808354040283529160200191610d93565b820191906000526020600020905b815481529060010190602001808311610d7657829003601f168201915b50505050508152602001600382015481526020016004820160009054906101000a900460ff1615151515815250509050600081600001518a604051602001610ddc929190611efc565b60405160208183030381529060405280519060200120905087600601548114610e1d57610e1682602001518661197f90919063ffffffff16565b9450610e83565b87600201839080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5050508080610e91906123ac565b915050610c2e565b50808460050181905550428460070181905550610ec5846003015460045461196990919063ffffffff16565b60048190555083600601549450505050509392505050565b610ee5611995565b73ffffffffffffffffffffffffffffffffffffffff16610f03610f65565b73ffffffffffffffffffffffffffffffffffffffff1614610f59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f50906120b3565b60405180910390fd5b610f63600061199d565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60065481565b60055481565b6000600454905090565b6000806000600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208581548110611020577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060090201905060008160000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a001604052908160008201548152602001600182015481526020016002820180546110a290612349565b80601f01602080910402602001604051908101604052809291908181526020018280546110ce90612349565b801561111b5780601f106110f05761010080835404028352916020019161111b565b820191906000526020600020905b8154815290600101906020018083116110fe57829003601f168201915b50505050508152602001600382015481526020016004820160009054906101000a900460ff1615151515815250509050600081600001518360080154604051602001611168929190611efc565b60405160208183030381529060405280519060200120905082600601548114945081602001519350505050935093915050565b600080600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208481548110611215577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060090201905060008160000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015414159150509392505050565b611280611995565b73ffffffffffffffffffffffffffffffffffffffff1661129e610f65565b73ffffffffffffffffffffffffffffffffffffffff16146112f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112eb906120b3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611364576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135b90612053565b60405180910390fd5b61136d8161199d565b50565b6000600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002085815481106113e9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906009020190508060030154816004015411611443576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161143a906120f3565b60405180910390fd5b60008160000160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a001604052908160008201548152602001600182015481526020016002820180546114b590612349565b80601f01602080910402602001604051908101604052809291908181526020018280546114e190612349565b801561152e5780601f106115035761010080835404028352916020019161152e565b820191906000526020600020905b81548152906001019060200180831161151157829003601f168201915b50505050508152602001600382015481526020016004820160009054906101000a900460ff161515151581525050905060008160600151146115a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161159c90612073565b60405180910390fd5b60008260040154905060006115d860646115ca6005548561193d90919063ffffffff16565b61195390919063ffffffff16565b9050600061160460646115f66006548661193d90919063ffffffff16565b61195390919063ffffffff16565b90508188111580156116165750808810155b611655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161164c906120d3565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33308b6040518463ffffffff1660e01b81526004016116b493929190611f43565b602060405180830381600087803b1580156116ce57600080fd5b505af11580156116e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117069190611d52565b611745576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161173c90612093565b60405180910390fd5b61175a8860045461197f90919063ffffffff16565b600481905550878460200181815250508684600001818152505085846040018190525042846060018181525050838560000160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001015560408201518160020190805190602001906117f9929190611a61565b506060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555090505084600101339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506118a388866003015461197f90919063ffffffff16565b85600301819055507fbb45067d90eddb11ceffb606ce8d7f6d26b078295b1180a987973423631dd755338a8a8a8a6040516118e2959493929190611f7a565b60405180910390a18460040154856003015410611931577fbcbc308a5dd8d1168941e2bf5d378ddbab688ef0bb66a66622ca88104bd24457896040516119289190612113565b60405180910390a15b50505050505050505050565b6000818361194b9190612227565b905092915050565b6000818361196191906121f6565b905092915050565b600081836119779190612281565b905092915050565b6000818361198d91906121a0565b905092915050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054611a6d90612349565b90600052602060002090601f016020900481019282611a8f5760008555611ad6565b82601f10611aa857805160ff1916838001178555611ad6565b82800160010185558215611ad6579182015b82811115611ad5578251825591602001919060010190611aba565b5b509050611ae39190611ae7565b5090565b5b80821115611b00576000816000905550600101611ae8565b5090565b6000611b17611b1284612153565b61212e565b905082815260208101848484011115611b2f57600080fd5b611b3a848285612307565b509392505050565b600081359050611b5181612611565b92915050565b600081519050611b6681612628565b92915050565b600081359050611b7b8161263f565b92915050565b600082601f830112611b9257600080fd5b8135611ba2848260208601611b04565b91505092915050565b600081359050611bba81612656565b92915050565b600060208284031215611bd257600080fd5b6000611be084828501611b42565b91505092915050565b60008060408385031215611bfc57600080fd5b6000611c0a85828601611b42565b9250506020611c1b85828601611bab565b9150509250929050565b600080600060608486031215611c3a57600080fd5b6000611c4886828701611b42565b9350506020611c5986828701611bab565b9250506040611c6a86828701611b42565b9150509250925092565b600080600060608486031215611c8957600080fd5b6000611c9786828701611b42565b9350506020611ca886828701611bab565b9250506040611cb986828701611b6c565b9150509250925092565b600080600080600060a08688031215611cdb57600080fd5b6000611ce988828901611b42565b9550506020611cfa88828901611bab565b9450506040611d0b88828901611bab565b9350506060611d1c88828901611b6c565b925050608086013567ffffffffffffffff811115611d3957600080fd5b611d4588828901611b81565b9150509295509295909350565b600060208284031215611d6457600080fd5b6000611d7284828501611b57565b91505092915050565b611d84816122b5565b82525050565b611d93816122c7565b82525050565b611da2816122d3565b82525050565b611db9611db4826122d3565b6123f5565b82525050565b6000611dca82612184565b611dd4818561218f565b9350611de4818560208601612316565b611ded816124bb565b840191505092915050565b6000611e05601d8361218f565b9150611e10826124cc565b602082019050919050565b6000611e2860268361218f565b9150611e33826124f5565b604082019050919050565b6000611e4b601a8361218f565b9150611e5682612544565b602082019050919050565b6000611e6e600e8361218f565b9150611e798261256d565b602082019050919050565b6000611e9160208361218f565b9150611e9c82612596565b602082019050919050565b6000611eb4601d8361218f565b9150611ebf826125bf565b602082019050919050565b6000611ed760128361218f565b9150611ee2826125e8565b602082019050919050565b611ef6816122fd565b82525050565b6000611f088285611da8565b602082019150611f188284611da8565b6020820191508190509392505050565b6000602082019050611f3d6000830184611d7b565b92915050565b6000606082019050611f586000830186611d7b565b611f656020830185611d7b565b611f726040830184611eed565b949350505050565b600060a082019050611f8f6000830188611d7b565b611f9c6020830187611eed565b611fa96040830186611eed565b611fb66060830185611d99565b8181036080830152611fc88184611dbf565b90509695505050505050565b6000602082019050611fe96000830184611d8a565b92915050565b60006040820190506120046000830185611d8a565b6120116020830184611eed565b9392505050565b600060208201905061202d6000830184611d99565b92915050565b6000602082019050818103600083015261204c81611df8565b9050919050565b6000602082019050818103600083015261206c81611e1b565b9050919050565b6000602082019050818103600083015261208c81611e3e565b9050919050565b600060208201905081810360008301526120ac81611e61565b9050919050565b600060208201905081810360008301526120cc81611e84565b9050919050565b600060208201905081810360008301526120ec81611ea7565b9050919050565b6000602082019050818103600083015261210c81611eca565b9050919050565b60006020820190506121286000830184611eed565b92915050565b6000612138612149565b9050612144828261237b565b919050565b6000604051905090565b600067ffffffffffffffff82111561216e5761216d61248c565b5b612177826124bb565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60006121ab826122fd565b91506121b6836122fd565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156121eb576121ea6123ff565b5b828201905092915050565b6000612201826122fd565b915061220c836122fd565b92508261221c5761221b61242e565b5b828204905092915050565b6000612232826122fd565b915061223d836122fd565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612276576122756123ff565b5b828202905092915050565b600061228c826122fd565b9150612297836122fd565b9250828210156122aa576122a96123ff565b5b828203905092915050565b60006122c0826122dd565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612334578082015181840152602081019050612319565b83811115612343576000848401525b50505050565b6000600282049050600182168061236157607f821691505b602082108114156123755761237461245d565b5b50919050565b612384826124bb565b810181811067ffffffffffffffff821117156123a3576123a261248c565b5b80604052505050565b60006123b7826122fd565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156123ea576123e96123ff565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f54686973206361736520616c72656164792068616420726573756c742e000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4e6f7420616c6c6f772075736572207265706c7920616761696e000000000000600082015250565b7f43616e2774207472616e73666572000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f616d6f756e74206973206e6f7420696e2072616e6765206c696d69742e000000600082015250565b7f546865206361736520697320636c6f7365640000000000000000000000000000600082015250565b61261a816122b5565b811461262557600080fd5b50565b612631816122c7565b811461263c57600080fd5b50565b612648816122d3565b811461265357600080fd5b50565b61265f816122fd565b811461266a57600080fd5b5056fea2646970667358221220bd972c7e87666a2aaac1115cda5f0f0f76129b10b0f9527b8cf21c372d3c48f464736f6c63430008040033";

export class Validator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _maxPercentValue: BigNumberish,
    _minPercentValue: BigNumberish,
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Validator> {
    return super.deploy(
      _maxPercentValue,
      _minPercentValue,
      _fee,
      overrides || {}
    ) as Promise<Validator>;
  }
  getDeployTransaction(
    _maxPercentValue: BigNumberish,
    _minPercentValue: BigNumberish,
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _maxPercentValue,
      _minPercentValue,
      _fee,
      overrides || {}
    );
  }
  attach(address: string): Validator {
    return super.attach(address) as Validator;
  }
  connect(signer: Signer): Validator__factory {
    return super.connect(signer) as Validator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ValidatorInterface {
    return new utils.Interface(_abi) as ValidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Validator {
    return new Contract(address, _abi, signerOrProvider) as Validator;
  }
}
