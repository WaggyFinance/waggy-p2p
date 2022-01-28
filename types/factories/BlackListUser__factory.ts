/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BlackListUser, BlackListUserInterface } from "../BlackListUser";

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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "admins",
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
        name: "_user",
        type: "address",
      },
    ],
    name: "checkUserStatus",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserStatus",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_admins",
        type: "address[]",
      },
    ],
    name: "revokeRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_admins",
        type: "address[]",
      },
    ],
    name: "setAdmins",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_status",
        type: "uint256",
      },
    ],
    name: "setUserStatus",
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
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "enum BlackListUser.STATUS",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalWarning",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastWarning",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "suspendAt",
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
        name: "_user",
        type: "address",
      },
    ],
    name: "warningUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361002a565b61002560003361007a565b61010f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6100848282610088565b5050565b60008281526001602090815260408083206001600160a01b038516845290915290205460ff166100845760008281526001602081815260408084206001600160a01b0386168086529252808420805460ff19169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b61134b8061011e6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80637bf67e01116100ad578063d547741f11610071578063d547741f146102df578063e5ef8405146102f2578063ea0d5dcd14610305578063f2fde38b14610318578063f71cc3a51461032b57600080fd5b80637bf67e01146102675780638da5cb5b1461027a57806391d148541461028b578063a217fddf146102c4578063accc1d5e146102cc57600080fd5b80632f2ff15d116100f45780632f2ff15d146101fd57806336568abe14610212578063410e938514610225578063715018a61461023857806375b238fc1461024057600080fd5b806301ffc9a71461012657806314bfd6d01461014e5780631959a00214610179578063248a9ca3146101cb575b600080fd5b610139610134366004610f5f565b61033e565b60405190151581526020015b60405180910390f35b61016161015c366004610f89565b610375565b6040516001600160a01b039091168152602001610145565b6101ba610187366004610fbe565b60026020819052600091825260409091208054600182015492820154600383015460049093015460ff9092169392909185565b604051610145959493929190610fef565b6101ef6101d9366004610f89565b6000908152600160208190526040909120015490565b604051908152602001610145565b61021061020b366004611032565b61039f565b005b610210610220366004611032565b6103cb565b6101ef610233366004610fbe565b61045c565b610210610552565b6101ef7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b610210610275366004610fbe565b6105b8565b6000546001600160a01b0316610161565b610139610299366004611032565b60009182526001602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6101ef600081565b6102106102da366004611074565b61075f565b6102106102ed366004611032565b6108e7565b610210610300366004611074565b61090e565b6101ef610313366004610fbe565b6109c7565b610210610326366004610fbe565b6109f5565b610210610339366004611139565b610ac0565b60006001600160e01b03198216637965db0b60e01b148061036f57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6003818154811061038557600080fd5b6000918252602090912001546001600160a01b0316905081565b600082815260016020819052604090912001546103bc8133610b6f565b6103c68383610bef565b505050565b6001600160a01b038116331461044e5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6104588282610c76565b5050565b6001600160a01b0381166000908152600260208190526040822090815460ff16600281111561048d5761048d610fd9565b14806104ae57506000815460ff1660028111156104ac576104ac610fd9565b145b156104d057805460ff1660028111156104c9576104c9610fd9565b9392505050565b60006104f6620151806104f0846003015442610cf990919063ffffffff16565b90610d05565b905060008111801561051d57506001825460ff16600281111561051b5761051b610fd9565b145b1561053c57815460ff191682556000600183018190555b949350505050565b815460ff16600281111561053457610534610fd9565b6000546001600160a01b031633146105ac5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610445565b6105b66000610d11565b565b3360009081527f64e21244e91af723e1b962171ed4828dcecc0d7b89872e516a5db8266da80000602052604090205460ff166106365760405162461bcd60e51b815260206004820152601960248201527f444f45535f4e4f545f484156455f4d494e5445525f524f4c45000000000000006044820152606401610445565b6001600160a01b038116600090815260026020526040812090815460ff16600281111561066557610665610fd9565b146106c05760405162461bcd60e51b815260206004820152602560248201527f43616e2774207761726e696e67206e6f74206e6f726d616c20737461747573206044820152643ab9b2b91760d91b6064820152608401610445565b60006106e0620151806104f0846003015442610cf990919063ffffffff16565b90508061074e576001828101546106f691610d6e565b600183018190556002116103c657815460ff191660019081178355600081840155600283015461072591610d6e565b6002808401829055426003850155116103c65750805460ff191660021781554260049091015550565b600182810155426003830155505050565b6000546001600160a01b031633146107b95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610445565b61081c600380548060200260200160405190810160405280929190818152602001828054801561081257602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116107f4575b505050505061090e565b61082860036000610f2d565b60005b815181101561045857600382828151811061084857610848611163565b602090810291909101810151825460018101845560009384529190922001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0390921691909117905581516108d7907f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6908490849081106108ca576108ca611163565b6020026020010151610d7a565b6108e08161118f565b905061082b565b600082815260016020819052604090912001546109048133610b6f565b6103c68383610c76565b6000546001600160a01b031633146109685760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610445565b60005b8151811015610458576109b77f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68383815181106109aa576109aa611163565b60200260200101516108e7565b6109c08161118f565b905061096b565b6001600160a01b038116600090815260026020819052604082205460ff169081111561036f5761036f610fd9565b6000546001600160a01b03163314610a4f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610445565b6001600160a01b038116610ab45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610445565b610abd81610d11565b50565b6000546001600160a01b03163314610b1a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610445565b806002811115610b2c57610b2c610fd9565b6001600160a01b03831660009081526002602081905260409091208054909160ff19909116906001908490811115610b6657610b66610fd9565b02179055505050565b60008281526001602090815260408083206001600160a01b038516845290915290205460ff1661045857610bad816001600160a01b03166014610d84565b610bb8836020610d84565b604051602001610bc99291906111da565b60408051601f198184030181529082905262461bcd60e51b82526104459160040161125b565b60008281526001602090815260408083206001600160a01b038516845290915290205460ff166104585760008281526001602081815260408084206001600160a01b0386168086529252808420805460ff19169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b60008281526001602090815260408083206001600160a01b038516845290915290205460ff16156104585760008281526001602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006104c9828461128e565b60006104c982846112a5565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006104c982846112c7565b6104588282610bef565b60606000610d938360026112df565b610d9e9060026112c7565b67ffffffffffffffff811115610db657610db661105e565b6040519080825280601f01601f191660200182016040528015610de0576020820181803683370190505b509050600360fc1b81600081518110610dfb57610dfb611163565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610e2a57610e2a611163565b60200101906001600160f81b031916908160001a9053506000610e4e8460026112df565b610e599060016112c7565b90505b6001811115610ede577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110610e9a57610e9a611163565b1a60f81b828281518110610eb057610eb0611163565b60200101906001600160f81b031916908160001a90535060049490941c93610ed7816112fe565b9050610e5c565b5083156104c95760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610445565b5080546000825590600052602060002090810190610abd91905b80821115610f5b5760008155600101610f47565b5090565b600060208284031215610f7157600080fd5b81356001600160e01b0319811681146104c957600080fd5b600060208284031215610f9b57600080fd5b5035919050565b80356001600160a01b0381168114610fb957600080fd5b919050565b600060208284031215610fd057600080fd5b6104c982610fa2565b634e487b7160e01b600052602160045260246000fd5b60a081016003871061101157634e487b7160e01b600052602160045260246000fd5b95815260208101949094526040840192909252606083015260809091015290565b6000806040838503121561104557600080fd5b8235915061105560208401610fa2565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561108757600080fd5b823567ffffffffffffffff8082111561109f57600080fd5b818501915085601f8301126110b357600080fd5b8135818111156110c5576110c561105e565b8060051b604051601f19603f830116810181811085821117156110ea576110ea61105e565b60405291825284820192508381018501918883111561110857600080fd5b938501935b8285101561112d5761111e85610fa2565b8452938501939285019261110d565b98975050505050505050565b6000806040838503121561114c57600080fd5b61115583610fa2565b946020939093013593505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156111a3576111a3611179565b5060010190565b60005b838110156111c55781810151838201526020016111ad565b838111156111d4576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516112128160178501602088016111aa565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000601791840191820152835161124f8160288401602088016111aa565b01602801949350505050565b602081526000825180602084015261127a8160408501602087016111aa565b601f01601f19169190910160400192915050565b6000828210156112a0576112a0611179565b500390565b6000826112c257634e487b7160e01b600052601260045260246000fd5b500490565b600082198211156112da576112da611179565b500190565b60008160001904831182151516156112f9576112f9611179565b500290565b60008161130d5761130d611179565b50600019019056fea2646970667358221220353f97b5616bcec55b320812fb7f82d84dc37c70a1fc1ca6d199754ede88fe5d64736f6c634300080b0033";

export class BlackListUser__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BlackListUser> {
    return super.deploy(overrides || {}) as Promise<BlackListUser>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BlackListUser {
    return super.attach(address) as BlackListUser;
  }
  connect(signer: Signer): BlackListUser__factory {
    return super.connect(signer) as BlackListUser__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BlackListUserInterface {
    return new utils.Interface(_abi) as BlackListUserInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BlackListUser {
    return new Contract(address, _abi, signerOrProvider) as BlackListUser;
  }
}
