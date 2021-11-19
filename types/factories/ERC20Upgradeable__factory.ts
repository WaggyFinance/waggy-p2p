/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20Upgradeable,
  ERC20UpgradeableInterface,
} from "../ERC20Upgradeable";

const _abi = [
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
  "0x608060405234801561001057600080fd5b506109cd806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610167578063a9059cbb1461017a578063dd62ed3e1461018d576100b9565b8063395093511461013957806370a082311461014c57806395d89b411461015f576100b9565b806306fdde03146100be578063095ea7b3146100dc57806318160ddd146100fc57806323b872dd14610111578063313ce56714610124575b600080fd5b6100c66101a0565b6040516100d391906106ed565b60405180910390f35b6100ef6100ea3660046106b9565b610232565b6040516100d391906106e2565b61010461024f565b6040516100d39190610921565b6100ef61011f36600461067e565b610255565b61012c6102ee565b6040516100d3919061092a565b6100ef6101473660046106b9565b6102f3565b61010461015a36600461062b565b610347565b6100c6610366565b6100ef6101753660046106b9565b610375565b6100ef6101883660046106b9565b6103ee565b61010461019b36600461064c565b610402565b6060603680546101af9061095c565b80601f01602080910402602001604051908101604052809291908181526020018280546101db9061095c565b80156102285780601f106101fd57610100808354040283529160200191610228565b820191906000526020600020905b81548152906001019060200180831161020b57829003601f168201915b5050505050905090565b600061024661023f61042d565b8484610431565b50600192915050565b60355490565b60006102628484846104e5565b6001600160a01b03841660009081526034602052604081208161028361042d565b6001600160a01b03166001600160a01b03168152602001908152602001600020549050828110156102cf5760405162461bcd60e51b81526004016102c69061080b565b60405180910390fd5b6102e3856102db61042d565b858403610431565b506001949350505050565b601290565b600061024661030061042d565b84846034600061030e61042d565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546103429190610938565b610431565b6001600160a01b0381166000908152603360205260409020545b919050565b6060603780546101af9061095c565b6000806034600061038461042d565b6001600160a01b03908116825260208083019390935260409182016000908120918816815292529020549050828110156103d05760405162461bcd60e51b81526004016102c6906108dc565b6103e46103db61042d565b85858403610431565b5060019392505050565b60006102466103fb61042d565b84846104e5565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166104575760405162461bcd60e51b81526004016102c690610898565b6001600160a01b03821661047d5760405162461bcd60e51b81526004016102c690610783565b6001600160a01b0380841660008181526034602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906104d8908590610921565b60405180910390a3505050565b6001600160a01b03831661050b5760405162461bcd60e51b81526004016102c690610853565b6001600160a01b0382166105315760405162461bcd60e51b81526004016102c690610740565b61053c83838361060f565b6001600160a01b038316600090815260336020526040902054818110156105755760405162461bcd60e51b81526004016102c6906107c5565b6001600160a01b038085166000908152603360205260408082208585039055918516815290812080548492906105ac908490610938565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516105f69190610921565b60405180910390a361060984848461060f565b50505050565b505050565b80356001600160a01b038116811461036157600080fd5b60006020828403121561063c578081fd5b61064582610614565b9392505050565b6000806040838503121561065e578081fd5b61066783610614565b915061067560208401610614565b90509250929050565b600080600060608486031215610692578081fd5b61069b84610614565b92506106a960208501610614565b9150604084013590509250925092565b600080604083850312156106cb578182fd5b6106d483610614565b946020939093013593505050565b901515815260200190565b6000602080835283518082850152825b81811015610719578581018301518582016040015282016106fd565b8181111561072a5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616040820152676c6c6f77616e636560c01b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b90815260200190565b60ff91909116815260200190565b6000821982111561095757634e487b7160e01b81526011600452602481fd5b500190565b60028104600182168061097057607f821691505b6020821081141561099157634e487b7160e01b600052602260045260246000fd5b5091905056fea264697066735822122036c957721a743a7983805e12800f3ed9d2412c7f60374d8e4af65dead6c09e8f64736f6c63430008000033";

export class ERC20Upgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC20Upgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20Upgradeable {
    return super.attach(address) as ERC20Upgradeable;
  }
  connect(signer: Signer): ERC20Upgradeable__factory {
    return super.connect(signer) as ERC20Upgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20UpgradeableInterface {
    return new utils.Interface(_abi) as ERC20UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC20Upgradeable;
  }
}
