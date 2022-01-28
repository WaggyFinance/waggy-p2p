/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721, ERC721Interface } from "../ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200159f3803806200159f8339810160408190526200003491620001db565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b50505062000282565b828054620000769062000245565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013657600080fd5b81516001600160401b03808211156200015357620001536200010e565b604051601f8301601f19908116603f011681019082821181831017156200017e576200017e6200010e565b816040528381526020925086838588010111156200019b57600080fd5b600091505b83821015620001bf5785820183015181830184015290820190620001a0565b83821115620001d15760008385830101525b9695505050505050565b60008060408385031215620001ef57600080fd5b82516001600160401b03808211156200020757600080fd5b620002158683870162000124565b935060208501519150808211156200022c57600080fd5b506200023b8582860162000124565b9150509250929050565b600181811c908216806200025a57607f821691505b602082108114156200027c57634e487b7160e01b600052602260045260246000fd5b50919050565b61130d80620002926000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101c3578063b88d4fde146101d6578063c87b56dd146101e9578063e985e9c5146101fc57600080fd5b80636352211e1461018757806370a082311461019a57806395d89b41146101bb57600080fd5b8063095ea7b3116100bd578063095ea7b31461014c57806323b872dd1461016157806342842e0e1461017457600080fd5b806301ffc9a7146100e457806306fdde031461010c578063081812fc14610121575b600080fd5b6100f76100f2366004610ec1565b610238565b60405190151581526020015b60405180910390f35b61011461028a565b6040516101039190610f36565b61013461012f366004610f49565b61031c565b6040516001600160a01b039091168152602001610103565b61015f61015a366004610f7e565b6103b6565b005b61015f61016f366004610fa8565b6104cc565b61015f610182366004610fa8565b610547565b610134610195366004610f49565b610562565b6101ad6101a8366004610fe4565b6105d9565b604051908152602001610103565b610114610660565b61015f6101d1366004610fff565b61066f565b61015f6101e4366004611051565b610734565b6101146101f7366004610f49565b6107b6565b6100f761020a36600461112d565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061026957506001600160e01b03198216635b5e139f60e01b145b8061028457506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461029990611160565b80601f01602080910402602001604051908101604052809291908181526020018280546102c590611160565b80156103125780601f106102e757610100808354040283529160200191610312565b820191906000526020600020905b8154815290600101906020018083116102f557829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b031661039a5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006103c182610562565b9050806001600160a01b0316836001600160a01b0316141561042f5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610391565b336001600160a01b038216148061044b575061044b813361020a565b6104bd5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610391565b6104c783836108ac565b505050565b6104d63382610927565b61053c5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6044820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b6064820152608401610391565b6104c7838383610a1e565b6104c783838360405180602001604052806000815250610734565b6000818152600260205260408120546001600160a01b0316806102845760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610391565b60006001600160a01b0382166106445760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610391565b506001600160a01b031660009081526003602052604090205490565b60606001805461029990611160565b6001600160a01b0382163314156106c85760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610391565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61073e3383610927565b6107a45760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6044820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b6064820152608401610391565b6107b084848484610bcb565b50505050565b6000818152600260205260409020546060906001600160a01b03166108435760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006064820152608401610391565b600061085a60408051602081019091526000815290565b9050600081511161087a57604051806020016040528060008152506108a5565b8061088484610c49565b60405160200161089592919061119b565b6040516020818303038152906040525b9392505050565b6000818152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03841690811790915581906108ee82610562565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166109a05760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610391565b60006109ab83610562565b9050806001600160a01b0316846001600160a01b031614806109e65750836001600160a01b03166109db8461031c565b6001600160a01b0316145b80610a1657506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610a3182610562565b6001600160a01b031614610a995760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610391565b6001600160a01b038216610afb5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610391565b610b066000826108ac565b6001600160a01b0383166000908152600360205260408120805460019290610b2f9084906111e0565b90915550506001600160a01b0382166000908152600360205260408120805460019290610b5d9084906111f7565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610bd6848484610a1e565b610be284848484610d5f565b6107b05760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608401610391565b606081610c6d5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610c975780610c818161120f565b9150610c909050600a83611240565b9150610c71565b60008167ffffffffffffffff811115610cb257610cb261103b565b6040519080825280601f01601f191660200182016040528015610cdc576020820181803683370190505b5090505b8415610a1657610cf16001836111e0565b9150610cfe600a86611254565b610d099060306111f7565b60f81b818381518110610d1e57610d1e611268565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610d58600a86611240565b9450610ce0565b60006001600160a01b0384163b15610e9d57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610da390339089908890889060040161127e565b6020604051808303816000875af1925050508015610dde575060408051601f3d908101601f19168201909252610ddb918101906112ba565b60015b610e83573d808015610e0c576040519150601f19603f3d011682016040523d82523d6000602084013e610e11565b606091505b508051610e7b5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608401610391565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610a16565b506001949350505050565b6001600160e01b031981168114610ebe57600080fd5b50565b600060208284031215610ed357600080fd5b81356108a581610ea8565b60005b83811015610ef9578181015183820152602001610ee1565b838111156107b05750506000910152565b60008151808452610f22816020860160208601610ede565b601f01601f19169290920160200192915050565b6020815260006108a56020830184610f0a565b600060208284031215610f5b57600080fd5b5035919050565b80356001600160a01b0381168114610f7957600080fd5b919050565b60008060408385031215610f9157600080fd5b610f9a83610f62565b946020939093013593505050565b600080600060608486031215610fbd57600080fd5b610fc684610f62565b9250610fd460208501610f62565b9150604084013590509250925092565b600060208284031215610ff657600080fd5b6108a582610f62565b6000806040838503121561101257600080fd5b61101b83610f62565b91506020830135801515811461103057600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561106757600080fd5b61107085610f62565b935061107e60208601610f62565b925060408501359150606085013567ffffffffffffffff808211156110a257600080fd5b818701915087601f8301126110b657600080fd5b8135818111156110c8576110c861103b565b604051601f8201601f19908116603f011681019083821181831017156110f0576110f061103b565b816040528281528a602084870101111561110957600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561114057600080fd5b61114983610f62565b915061115760208401610f62565b90509250929050565b600181811c9082168061117457607f821691505b6020821081141561119557634e487b7160e01b600052602260045260246000fd5b50919050565b600083516111ad818460208801610ede565b8351908301906111c1818360208801610ede565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156111f2576111f26111ca565b500390565b6000821982111561120a5761120a6111ca565b500190565b6000600019821415611223576112236111ca565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261124f5761124f61122a565b500490565b6000826112635761126361122a565b500690565b634e487b7160e01b600052603260045260246000fd5b60006001600160a01b038087168352808616602084015250836040830152608060608301526112b06080830184610f0a565b9695505050505050565b6000602082840312156112cc57600080fd5b81516108a581610ea856fea2646970667358221220e9d984a614d4c7233d0568faadbb7254a2a675e1c04a4ab23a8e2cd7c240c25064736f6c634300080b0033";

export class ERC721__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
