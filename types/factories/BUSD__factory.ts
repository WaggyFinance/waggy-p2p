/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BUSD, BUSDInterface } from "../BUSD";

const _abi = [
  {
    inputs: [],
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
  "0x60806040523480156200001157600080fd5b506040518060400160405280600a81526020017f4255534420546f6b656e000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f425553440000000000000000000000000000000000000000000000000000000081525081600390805190602001906200009692919062000360565b508060049080519060200190620000af92919062000360565b505050620000d2620000c66200010660201b60201c565b6200010e60201b60201c565b620000e2620001d460201b60201c565b5062000100336a52b7d2dcc80cd2e4000000620001dd60201b60201c565b620005bc565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000250576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002479062000448565b60405180910390fd5b62000264600083836200035660201b60201c565b806002600082825462000278919062000498565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002cf919062000498565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200033691906200046a565b60405180910390a362000352600083836200035b60201b60201c565b5050565b505050565b505050565b8280546200036e90620004ff565b90600052602060002090601f016020900481019282620003925760008555620003de565b82601f10620003ad57805160ff1916838001178555620003de565b82800160010185558215620003de579182015b82811115620003dd578251825591602001919060010190620003c0565b5b509050620003ed9190620003f1565b5090565b5b808211156200040c576000816000905550600101620003f2565b5090565b60006200041f601f8362000487565b91506200042c8262000593565b602082019050919050565b6200044281620004f5565b82525050565b60006020820190508181036000830152620004638162000410565b9050919050565b600060208201905062000481600083018462000437565b92915050565b600082825260208201905092915050565b6000620004a582620004f5565b9150620004b283620004f5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620004ea57620004e962000535565b5b828201905092915050565b6000819050919050565b600060028204905060018216806200051857607f821691505b602082108114156200052f576200052e62000564565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6117b280620005cc6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063715018a61161008c578063a457c2d711610066578063a457c2d71461024f578063a9059cbb1461027f578063dd62ed3e146102af578063f2fde38b146102df576100ea565b8063715018a6146102095780638da5cb5b1461021357806395d89b4114610231576100ea565b806323b872dd116100c857806323b872dd1461015b578063313ce5671461018b57806339509351146101a957806370a08231146101d9576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461013d575b600080fd5b6100f76102fb565b604051610104919061119a565b60405180910390f35b61012760048036038101906101229190610f78565b61038d565b604051610134919061117f565b60405180910390f35b6101456103ab565b60405161015291906112dc565b60405180910390f35b61017560048036038101906101709190610f29565b6103b5565b604051610182919061117f565b60405180910390f35b6101936104ad565b6040516101a091906112f7565b60405180910390f35b6101c360048036038101906101be9190610f78565b6104b6565b6040516101d0919061117f565b60405180910390f35b6101f360048036038101906101ee9190610ec4565b610562565b60405161020091906112dc565b60405180910390f35b6102116105aa565b005b61021b610632565b6040516102289190611164565b60405180910390f35b61023961065c565b604051610246919061119a565b60405180910390f35b61026960048036038101906102649190610f78565b6106ee565b604051610276919061117f565b60405180910390f35b61029960048036038101906102949190610f78565b6107d9565b6040516102a6919061117f565b60405180910390f35b6102c960048036038101906102c49190610eed565b6107f7565b6040516102d691906112dc565b60405180910390f35b6102f960048036038101906102f49190610ec4565b61087e565b005b60606003805461030a9061140c565b80601f01602080910402602001604051908101604052809291908181526020018280546103369061140c565b80156103835780601f1061035857610100808354040283529160200191610383565b820191906000526020600020905b81548152906001019060200180831161036657829003601f168201915b5050505050905090565b60006103a161039a610976565b848461097e565b6001905092915050565b6000600254905090565b60006103c2848484610b49565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061040d610976565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561048d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104849061123c565b60405180910390fd5b6104a185610499610976565b85840361097e565b60019150509392505050565b60006012905090565b60006105586104c3610976565b8484600160006104d1610976565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610553919061132e565b61097e565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6105b2610976565b73ffffffffffffffffffffffffffffffffffffffff166105d0610632565b73ffffffffffffffffffffffffffffffffffffffff1614610626576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061d9061125c565b60405180910390fd5b6106306000610dca565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461066b9061140c565b80601f01602080910402602001604051908101604052809291908181526020018280546106979061140c565b80156106e45780601f106106b9576101008083540402835291602001916106e4565b820191906000526020600020905b8154815290600101906020018083116106c757829003601f168201915b5050505050905090565b600080600160006106fd610976565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156107ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b1906112bc565b60405180910390fd5b6107ce6107c5610976565b8585840361097e565b600191505092915050565b60006107ed6107e6610976565b8484610b49565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610886610976565b73ffffffffffffffffffffffffffffffffffffffff166108a4610632565b73ffffffffffffffffffffffffffffffffffffffff16146108fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f19061125c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561096a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610961906111dc565b60405180910390fd5b61097381610dca565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e59061129c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a55906111fc565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610b3c91906112dc565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610bb9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb09061127c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c20906111bc565b60405180910390fd5b610c34838383610e90565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610cba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb19061121c565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d4d919061132e565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610db191906112dc565b60405180910390a3610dc4848484610e95565b50505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081359050610ea98161174e565b92915050565b600081359050610ebe81611765565b92915050565b600060208284031215610ed657600080fd5b6000610ee484828501610e9a565b91505092915050565b60008060408385031215610f0057600080fd5b6000610f0e85828601610e9a565b9250506020610f1f85828601610e9a565b9150509250929050565b600080600060608486031215610f3e57600080fd5b6000610f4c86828701610e9a565b9350506020610f5d86828701610e9a565b9250506040610f6e86828701610eaf565b9150509250925092565b60008060408385031215610f8b57600080fd5b6000610f9985828601610e9a565b9250506020610faa85828601610eaf565b9150509250929050565b610fbd81611384565b82525050565b610fcc81611396565b82525050565b6000610fdd82611312565b610fe7818561131d565b9350610ff78185602086016113d9565b6110008161149c565b840191505092915050565b600061101860238361131d565b9150611023826114ad565b604082019050919050565b600061103b60268361131d565b9150611046826114fc565b604082019050919050565b600061105e60228361131d565b91506110698261154b565b604082019050919050565b600061108160268361131d565b915061108c8261159a565b604082019050919050565b60006110a460288361131d565b91506110af826115e9565b604082019050919050565b60006110c760208361131d565b91506110d282611638565b602082019050919050565b60006110ea60258361131d565b91506110f582611661565b604082019050919050565b600061110d60248361131d565b9150611118826116b0565b604082019050919050565b600061113060258361131d565b915061113b826116ff565b604082019050919050565b61114f816113c2565b82525050565b61115e816113cc565b82525050565b60006020820190506111796000830184610fb4565b92915050565b60006020820190506111946000830184610fc3565b92915050565b600060208201905081810360008301526111b48184610fd2565b905092915050565b600060208201905081810360008301526111d58161100b565b9050919050565b600060208201905081810360008301526111f58161102e565b9050919050565b6000602082019050818103600083015261121581611051565b9050919050565b6000602082019050818103600083015261123581611074565b9050919050565b6000602082019050818103600083015261125581611097565b9050919050565b60006020820190508181036000830152611275816110ba565b9050919050565b60006020820190508181036000830152611295816110dd565b9050919050565b600060208201905081810360008301526112b581611100565b9050919050565b600060208201905081810360008301526112d581611123565b9050919050565b60006020820190506112f16000830184611146565b92915050565b600060208201905061130c6000830184611155565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611339826113c2565b9150611344836113c2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156113795761137861143e565b5b828201905092915050565b600061138f826113a2565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156113f75780820151818401526020810190506113dc565b83811115611406576000848401525b50505050565b6000600282049050600182168061142457607f821691505b602082108114156114385761143761146d565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b61175781611384565b811461176257600080fd5b50565b61176e816113c2565b811461177957600080fd5b5056fea2646970667358221220ffe0014bc3eb8e31cda0376364354eebccdfa134591df038a34e8ba172d2180b64736f6c63430008040033";

export class BUSD__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BUSD> {
    return super.deploy(overrides || {}) as Promise<BUSD>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BUSD {
    return super.attach(address) as BUSD;
  }
  connect(signer: Signer): BUSD__factory {
    return super.connect(signer) as BUSD__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BUSDInterface {
    return new utils.Interface(_abi) as BUSDInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BUSD {
    return new Contract(address, _abi, signerOrProvider) as BUSD;
  }
}
