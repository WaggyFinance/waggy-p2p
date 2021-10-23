/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WERC20, WERC20Interface } from "../WERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "name2",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
  "0x60806040523480156200001157600080fd5b5060405162000ff538038062000ff5833981016040819052620000349162000336565b8151829082906200004d906003906020850190620001dd565b50805162000063906004906020840190620001dd565b505050620000806200007a6200009f60201b60201c565b620000a3565b62000097336a52b7d2dcc80cd2e4000000620000f5565b505062000415565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216620001505760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200016491906200039d565b90915550506001600160a01b03821660009081526020819052604081208054839290620001939084906200039d565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001eb90620003c2565b90600052602060002090601f0160209004810192826200020f57600085556200025a565b82601f106200022a57805160ff19168380011785556200025a565b828001600101855582156200025a579182015b828111156200025a5782518255916020019190600101906200023d565b50620002689291506200026c565b5090565b5b808211156200026857600081556001016200026d565b600082601f83011262000294578081fd5b81516001600160401b0380821115620002b157620002b1620003ff565b604051601f8301601f19908116603f01168101908282118183101715620002dc57620002dc620003ff565b81604052838152602092508683858801011115620002f8578485fd5b8491505b838210156200031b5785820183015181830184015290820190620002fc565b838211156200032c57848385830101525b9695505050505050565b6000806040838503121562000349578182fd5b82516001600160401b038082111562000360578384fd5b6200036e8683870162000283565b9350602085015191508082111562000384578283fd5b50620003938582860162000283565b9150509250929050565b60008219821115620003bd57634e487b7160e01b81526011600452602481fd5b500190565b600181811c90821680620003d757607f821691505b60208210811415620003f957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610bd080620004256000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d7146101eb578063a9059cbb146101fe578063dd62ed3e14610211578063f2fde38b1461024a57600080fd5b806370a0823114610197578063715018a6146101c05780638da5cb5b146101c857806395d89b41146101e357600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063395093511461016f57806340c10f191461018257600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b61010261025d565b60405161010f9190610ae8565b60405180910390f35b61012b610126366004610abf565b6102ef565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610a84565b610305565b6040516012815260200161010f565b61012b61017d366004610abf565b6103b4565b610195610190366004610abf565b6103f0565b005b61013f6101a5366004610a31565b6001600160a01b031660009081526020819052604090205490565b6101956103fe565b6005546040516001600160a01b03909116815260200161010f565b610102610464565b61012b6101f9366004610abf565b610473565b61012b61020c366004610abf565b61050c565b61013f61021f366004610a52565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610195610258366004610a31565b610519565b60606003805461026c90610b5f565b80601f016020809104026020016040519081016040528092919081815260200182805461029890610b5f565b80156102e55780601f106102ba576101008083540402835291602001916102e5565b820191906000526020600020905b8154815290600101906020018083116102c857829003601f168201915b5050505050905090565b60006102fc3384846105e4565b50600192915050565b6000610312848484610708565b6001600160a01b03841660009081526001602090815260408083203384529091529020548281101561039c5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103a985338584036105e4565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916102fc9185906103eb908690610b3b565b6105e4565b6103fa82826108d7565b5050565b6005546001600160a01b031633146104585760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610393565b61046260006109b6565b565b60606004805461026c90610b5f565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104f55760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610393565b61050233858584036105e4565b5060019392505050565b60006102fc338484610708565b6005546001600160a01b031633146105735760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610393565b6001600160a01b0381166105d85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610393565b6105e1816109b6565b50565b6001600160a01b0383166106465760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610393565b6001600160a01b0382166106a75760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610393565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03831661076c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610393565b6001600160a01b0382166107ce5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610393565b6001600160a01b038316600090815260208190526040902054818110156108465760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610393565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061087d908490610b3b565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108c991815260200190565b60405180910390a350505050565b6001600160a01b03821661092d5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610393565b806002600082825461093f9190610b3b565b90915550506001600160a01b0382166000908152602081905260408120805483929061096c908490610b3b565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600580546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80356001600160a01b0381168114610a2c57600080fd5b919050565b600060208284031215610a42578081fd5b610a4b82610a15565b9392505050565b60008060408385031215610a64578081fd5b610a6d83610a15565b9150610a7b60208401610a15565b90509250929050565b600080600060608486031215610a98578081fd5b610aa184610a15565b9250610aaf60208501610a15565b9150604084013590509250925092565b60008060408385031215610ad1578182fd5b610ada83610a15565b946020939093013593505050565b6000602080835283518082850152825b81811015610b1457858101830151858201604001528201610af8565b81811115610b255783604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610b5a57634e487b7160e01b81526011600452602481fd5b500190565b600181811c90821680610b7357607f821691505b60208210811415610b9457634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212200417567b664704ca2fcccc04c667ec1b57ee61efa84f62584bb08e747a856eb464736f6c63430008040033";

export class WERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    name2: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WERC20> {
    return super.deploy(name, name2, overrides || {}) as Promise<WERC20>;
  }
  getDeployTransaction(
    name: string,
    name2: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, name2, overrides || {});
  }
  attach(address: string): WERC20 {
    return super.attach(address) as WERC20;
  }
  connect(signer: Signer): WERC20__factory {
    return super.connect(signer) as WERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WERC20Interface {
    return new utils.Interface(_abi) as WERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WERC20 {
    return new Contract(address, _abi, signerOrProvider) as WERC20;
  }
}
