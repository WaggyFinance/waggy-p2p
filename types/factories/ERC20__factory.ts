/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20, ERC20Interface } from "../ERC20";

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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000c5038038062000c508339810160408190526200003491620001b9565b81516200004990600390602085019062000068565b5080516200005f90600490602084019062000068565b50505062000273565b828054620000769062000220565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b600082601f8301126200011f578081fd5b81516001600160401b03808211156200013c576200013c6200025d565b6040516020601f8401601f19168201810183811183821017156200016457620001646200025d565b60405283825285840181018710156200017b578485fd5b8492505b838310156200019e57858301810151828401820152918201916200017f565b83831115620001af57848185840101525b5095945050505050565b60008060408385031215620001cc578182fd5b82516001600160401b0380821115620001e3578384fd5b620001f1868387016200010e565b9350602085015191508082111562000207578283fd5b5062000216858286016200010e565b9150509250929050565b6002810460018216806200023557607f821691505b602082108114156200025757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6109cd80620002836000396000f3fe608060405234801561001057600080fd5b50600436106100b95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610167578063a9059cbb1461017a578063dd62ed3e1461018d576100b9565b8063395093511461013957806370a082311461014c57806395d89b411461015f576100b9565b806306fdde03146100be578063095ea7b3146100dc57806318160ddd146100fc57806323b872dd14610111578063313ce56714610124575b600080fd5b6100c66101a0565b6040516100d391906106ed565b60405180910390f35b6100ef6100ea3660046106b9565b610232565b6040516100d391906106e2565b61010461024f565b6040516100d39190610921565b6100ef61011f36600461067e565b610255565b61012c6102ee565b6040516100d3919061092a565b6100ef6101473660046106b9565b6102f3565b61010461015a36600461062b565b610347565b6100c6610366565b6100ef6101753660046106b9565b610375565b6100ef6101883660046106b9565b6103ee565b61010461019b36600461064c565b610402565b6060600380546101af9061095c565b80601f01602080910402602001604051908101604052809291908181526020018280546101db9061095c565b80156102285780601f106101fd57610100808354040283529160200191610228565b820191906000526020600020905b81548152906001019060200180831161020b57829003601f168201915b5050505050905090565b600061024661023f61042d565b8484610431565b50600192915050565b60025490565b60006102628484846104e5565b6001600160a01b03841660009081526001602052604081208161028361042d565b6001600160a01b03166001600160a01b03168152602001908152602001600020549050828110156102cf5760405162461bcd60e51b81526004016102c69061080b565b60405180910390fd5b6102e3856102db61042d565b858403610431565b506001949350505050565b601290565b600061024661030061042d565b84846001600061030e61042d565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546103429190610938565b610431565b6001600160a01b0381166000908152602081905260409020545b919050565b6060600480546101af9061095c565b6000806001600061038461042d565b6001600160a01b03908116825260208083019390935260409182016000908120918816815292529020549050828110156103d05760405162461bcd60e51b81526004016102c6906108dc565b6103e46103db61042d565b85858403610431565b5060019392505050565b60006102466103fb61042d565b84846104e5565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166104575760405162461bcd60e51b81526004016102c690610898565b6001600160a01b03821661047d5760405162461bcd60e51b81526004016102c690610783565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906104d8908590610921565b60405180910390a3505050565b6001600160a01b03831661050b5760405162461bcd60e51b81526004016102c690610853565b6001600160a01b0382166105315760405162461bcd60e51b81526004016102c690610740565b61053c83838361060f565b6001600160a01b038316600090815260208190526040902054818110156105755760405162461bcd60e51b81526004016102c6906107c5565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906105ac908490610938565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516105f69190610921565b60405180910390a361060984848461060f565b50505050565b505050565b80356001600160a01b038116811461036157600080fd5b60006020828403121561063c578081fd5b61064582610614565b9392505050565b6000806040838503121561065e578081fd5b61066783610614565b915061067560208401610614565b90509250929050565b600080600060608486031215610692578081fd5b61069b84610614565b92506106a960208501610614565b9150604084013590509250925092565b600080604083850312156106cb578182fd5b6106d483610614565b946020939093013593505050565b901515815260200190565b6000602080835283518082850152825b81811015610719578581018301518582016040015282016106fd565b8181111561072a5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616040820152676c6c6f77616e636560c01b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b90815260200190565b60ff91909116815260200190565b6000821982111561095757634e487b7160e01b81526011600452602481fd5b500190565b60028104600182168061097057607f821691505b6020821081141561099157634e487b7160e01b600052602260045260246000fd5b5091905056fea264697066735822122011cca126e454b0217a265436679427eca81095a24a996f6f071d4245de16ba5564736f6c63430008000033";

export class ERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC20>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}
