/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MerchantStorage,
  MerchantStorageInterface,
} from "../MerchantStorage";

const _abi = [
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
    inputs: [],
    name: "getAddress",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "getShopBalance",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "getShopLockBalance",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "getTransactionSuccessCount",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
    ],
    name: "setShopBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
    ],
    name: "setShopLockBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    name: "setTransactionSuccessCount",
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
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610b288061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063715018a61161008c57806394f5e0a01161006657806394f5e0a014610226578063a92e538c14610242578063c61cfdc71461025e578063f2fde38b1461028e576100cf565b8063715018a6146101ce57806385353f69146101d85780638da5cb5b14610208576100cf565b80630e691e18146100d4578063236192701461010457806338cc48311461013457806369945ad7146101525780636c87f29814610182578063710df897146101b2575b600080fd5b6100ee60048036038101906100e991906108c0565b6102aa565b6040516100fb91906109e4565b60405180910390f35b61011e600480360381019061011991906108c0565b6102f3565b60405161012b91906109e4565b60405180910390f35b61013c61030b565b6040516101499190610989565b60405180910390f35b61016c600480360381019061016791906108c0565b610313565b60405161017991906109e4565b60405180910390f35b61019c600480360381019061019791906108c0565b61035c565b6040516101a991906109e4565b60405180910390f35b6101cc60048036038101906101c791906108e9565b610374565b005b6101d6610438565b005b6101f260048036038101906101ed91906108c0565b6104c0565b6040516101ff91906109e4565b60405180910390f35b610210610509565b60405161021d9190610989565b60405180910390f35b610240600480360381019061023b91906108e9565b610532565b005b61025c600480360381019061025791906108e9565b6105f6565b005b610278600480360381019061027391906108c0565b6106ba565b60405161028591906109e4565b60405180910390f35b6102a860048036038101906102a391906108c0565b6106d2565b005b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60016020528060005260406000206000915090505481565b600030905090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60026020528060005260406000206000915090505481565b61037c6107ca565b73ffffffffffffffffffffffffffffffffffffffff1661039a610509565b73ffffffffffffffffffffffffffffffffffffffff16146103f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e7906109c4565b60405180910390fd5b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b6104406107ca565b73ffffffffffffffffffffffffffffffffffffffff1661045e610509565b73ffffffffffffffffffffffffffffffffffffffff16146104b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ab906109c4565b60405180910390fd5b6104be60006107d2565b565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61053a6107ca565b73ffffffffffffffffffffffffffffffffffffffff16610558610509565b73ffffffffffffffffffffffffffffffffffffffff16146105ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a5906109c4565b60405180910390fd5b80600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b6105fe6107ca565b73ffffffffffffffffffffffffffffffffffffffff1661061c610509565b73ffffffffffffffffffffffffffffffffffffffff1614610672576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610669906109c4565b60405180910390fd5b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b60036020528060005260406000206000915090505481565b6106da6107ca565b73ffffffffffffffffffffffffffffffffffffffff166106f8610509565b73ffffffffffffffffffffffffffffffffffffffff161461074e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610745906109c4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b5906109a4565b60405180910390fd5b6107c7816107d2565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000813590506108a581610ac4565b92915050565b6000813590506108ba81610adb565b92915050565b6000602082840312156108d257600080fd5b60006108e084828501610896565b91505092915050565b600080604083850312156108fc57600080fd5b600061090a85828601610896565b925050602061091b858286016108ab565b9150509250929050565b61092e81610a10565b82525050565b60006109416026836109ff565b915061094c82610a4c565b604082019050919050565b60006109646020836109ff565b915061096f82610a9b565b602082019050919050565b61098381610a42565b82525050565b600060208201905061099e6000830184610925565b92915050565b600060208201905081810360008301526109bd81610934565b9050919050565b600060208201905081810360008301526109dd81610957565b9050919050565b60006020820190506109f9600083018461097a565b92915050565b600082825260208201905092915050565b6000610a1b82610a22565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b610acd81610a10565b8114610ad857600080fd5b50565b610ae481610a42565b8114610aef57600080fd5b5056fea2646970667358221220792836f83b146681267d2472628ced40cba3eca98e07e934d8efb02059f5e60464736f6c63430008040033";

export class MerchantStorage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MerchantStorage> {
    return super.deploy(overrides || {}) as Promise<MerchantStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MerchantStorage {
    return super.attach(address) as MerchantStorage;
  }
  connect(signer: Signer): MerchantStorage__factory {
    return super.connect(signer) as MerchantStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerchantStorageInterface {
    return new utils.Interface(_abi) as MerchantStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerchantStorage {
    return new Contract(address, _abi, signerOrProvider) as MerchantStorage;
  }
}
