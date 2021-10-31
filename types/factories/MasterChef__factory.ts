/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MasterChef, MasterChefInterface } from "../MasterChef";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
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
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
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
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
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
    inputs: [],
    name: "BONUS_MULTIPLIER",
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
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract ERC20",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
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
    inputs: [
      {
        internalType: "address",
        name: "_devaddr",
        type: "address",
      },
    ],
    name: "dev",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "devaddr",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
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
    name: "enterStaking",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getMultiplier",
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
        name: "_wag",
        type: "address",
      },
      {
        internalType: "address",
        name: "_devaddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_wagPerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "leaveStaking",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lockRewardPercent",
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
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "migrator",
    outputs: [
      {
        internalType: "contract IMigratorChef",
        name: "",
        type: "address",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingWag",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract ERC20",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accWagPerShare",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "set",
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
    name: "setLockRewardPercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMigratorChef",
        name: "_migrator",
        type: "address",
      },
    ],
    name: "setMigrator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startBlock",
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
    name: "totalAllocPoint",
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
        internalType: "uint256",
        name: "multiplierNumber",
        type: "uint256",
      },
    ],
    name: "updateMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wag",
    outputs: [
      {
        internalType: "contract WaggyToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wagPerBlock",
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
        name: "_pid",
        type: "uint256",
      },
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
  "0x608060405234801561001057600080fd5b506120c4806100206000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c806364482f791161010f578063ab728ef7116100a2578063f2fde38b11610071578063f2fde38b14610427578063f5dbced21461043a578063f6a159d31461044d578063f94c20861461045657600080fd5b8063ab728ef7146103db578063d49e77cd146103ee578063e2bbb15814610401578063eb990c591461041457600080fd5b80638d88a90e116100de5780638d88a90e1461035d5780638da5cb5b146103705780638dbb1e3a1461038157806393f1a40b1461039457600080fd5b806364482f791461030e578063715018a6146103215780637cd07e47146103295780638aa285501461035457600080fd5b8063441a3e70116101875780635312ea8e116101565780635312ea8e146102d757806354305f1d146102ea5780635ffe6146146102f3578063630b5ba11461030657600080fd5b8063441a3e7014610295578063454b0608146102a857806348cd4cb1146102bb57806351eb05a6146102c457600080fd5b806317caf6f1116101c357806317caf6f1146102535780631eaaa0451461025c57806323cf31181461026f57806341441d3b1461028257600080fd5b8063081e3eda146101ea5780631058d281146102015780631526fe2714610216575b600080fd5b606a545b6040519081526020015b60405180910390f35b61021461020f366004611ebe565b610469565b005b610229610224366004611ebe565b610666565b604080516001600160a01b03909516855260208501939093529183015260608201526080016101f8565b6101ee606c5481565b61021461026a366004611f1d565b6106aa565b61021461027d366004611e25565b610820565b610214610290366004611ebe565b61088a565b6102146102a3366004611f5e565b610a3a565b6102146102b6366004611ebe565b610c58565b6101ee606d5481565b6102146102d2366004611ebe565b610f43565b6102146102e5366004611ebe565b61118f565b6101ee60675481565b610214610301366004611ebe565b6112aa565b6102146112f7565b61021461031c366004611f7f565b611322565b610214611417565b60695461033c906001600160a01b031681565b6040516001600160a01b0390911681526020016101f8565b6101ee60685481565b61021461036b366004611e25565b61146b565b6033546001600160a01b031661033c565b6101ee61038f366004611f5e565b6114d3565b6103c66103a2366004611eee565b606b6020908152600092835260408084209091529082529020805460019091015482565b604080519283526020830191909152016101f8565b6102146103e9366004611ebe565b6114ee565b60665461033c906001600160a01b031681565b61021461040f366004611f5e565b61158d565b610214610422366004611e41565b61176a565b610214610435366004611e25565b611956565b60655461033c906001600160a01b031681565b6101ee606e5481565b6101ee610464366004611eee565b611a0f565b6000606a60008154811061048d57634e487b7160e01b600052603260045260246000fd5b600091825260208083203384527fc8cc8bda7ad4886bea3ebbdafa02e79d37c39bf4011696b26a31a0802fd9458b90915260409092208054600490920290920192508311156105185760405162461bcd60e51b81526020600482015260126024820152711dda5d1a191c985dce881b9bdd0819dbdbd960721b60448201526064015b60405180910390fd5b6105226000610f43565b600061055c826001015461055664e8d4a5100061055087600301548760000154611b8990919063ffffffff16565b90611b95565b90611ba1565b9050801561056e5761056e3382611bad565b83156106075781546105809085611ba1565b8255825460405163a9059cbb60e01b8152336004820152602481018690526001600160a01b039091169063a9059cbb90604401602060405180830381600087803b1580156105cd57600080fd5b505af11580156105e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106059190611e86565b505b600383015482546106229164e8d4a510009161055091611b89565b600183015560405184815260009033907ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b568906020015b60405180910390a350505050565b606a818154811061067657600080fd5b600091825260209091206004909102018054600182015460028301546003909301546001600160a01b039092169350919084565b6033546001600160a01b031633146106f25760405162461bcd60e51b8152602060048201819052602482015260008051602061206f833981519152604482015260640161050f565b8015610700576107006112f7565b6000606d54431161071357606d54610715565b435b606c549091506107259085611cbe565b606c55604080516080810182526001600160a01b03858116825260208201878152928201848152600060608401818152606a8054600181018255925293517f116fea137db6e131133e7f2bab296045d8f41cc5607279db17b218cab0929a51600490920291820180546001600160a01b031916919094161790925592517f116fea137db6e131133e7f2bab296045d8f41cc5607279db17b218cab0929a5282015591517f116fea137db6e131133e7f2bab296045d8f41cc5607279db17b218cab0929a53830155517f116fea137db6e131133e7f2bab296045d8f41cc5607279db17b218cab0929a549091015561081a611cca565b50505050565b6033546001600160a01b031633146108685760405162461bcd60e51b8152602060048201819052602482015260008051602061206f833981519152604482015260640161050f565b606980546001600160a01b0319166001600160a01b0392909216919091179055565b6000606a6000815481106108ae57634e487b7160e01b600052603260045260246000fd5b600091825260208083203384527fc8cc8bda7ad4886bea3ebbdafa02e79d37c39bf4011696b26a31a0802fd9458b909152604083206004909202019250906108f590610f43565b80541561093e57600061092a826001015461055664e8d4a5100061055087600301548760000154611b8990919063ffffffff16565b9050801561093c5761093c3382611bad565b505b82156109dd5781546040516323b872dd60e01b8152336004820152306024820152604481018590526001600160a01b03909116906323b872dd90606401602060405180830381600087803b15801561099557600080fd5b505af11580156109a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cd9190611e86565b5080546109da9084611cbe565b81555b600382015481546109f89164e8d4a510009161055091611b89565b600182015560405183815260009033907f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159060200160405180910390a3505050565b81610a875760405162461bcd60e51b815260206004820152601960248201527f77697468647261772057616720627920756e7374616b696e6700000000000000604482015260640161050f565b6000606a8381548110610aaa57634e487b7160e01b600052603260045260246000fd5b60009182526020808320868452606b825260408085203386529092529220805460049092029092019250831115610b185760405162461bcd60e51b81526020600482015260126024820152711dda5d1a191c985dce881b9bdd0819dbdbd960721b604482015260640161050f565b610b2184610f43565b6000610b4f826001015461055664e8d4a5100061055087600301548760000154611b8990919063ffffffff16565b90508015610b6157610b613382611bad565b8315610bfa578154610b739085611ba1565b8255825460405163a9059cbb60e01b8152336004820152602481018690526001600160a01b039091169063a9059cbb90604401602060405180830381600087803b158015610bc057600080fd5b505af1158015610bd4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf89190611e86565b505b60038301548254610c159164e8d4a510009161055091611b89565b6001830155604051848152859033907ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689060200160405180910390a35050505050565b6069546001600160a01b0316610cb05760405162461bcd60e51b815260206004820152601460248201527f6d6967726174653a206e6f206d69677261746f72000000000000000000000000604482015260640161050f565b6000606a8281548110610cd357634e487b7160e01b600052603260045260246000fd5b60009182526020822060049182020180546040516370a0823160e01b815230938101939093529093506001600160a01b0316919082906370a082319060240160206040518083038186803b158015610d2a57600080fd5b505afa158015610d3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d629190611ed6565b60695460405163095ea7b360e01b81526001600160a01b0391821660048201526024810183905291925083169063095ea7b390604401602060405180830381600087803b158015610db257600080fd5b505af1158015610dc6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dea9190611e86565b5060695460405163ce5494bb60e01b81526001600160a01b038481166004830152600092169063ce5494bb90602401602060405180830381600087803b158015610e3357600080fd5b505af1158015610e47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6b9190611ea2565b6040516370a0823160e01b81523060048201529091506001600160a01b038216906370a082319060240160206040518083038186803b158015610ead57600080fd5b505afa158015610ec1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee59190611ed6565b8214610f225760405162461bcd60e51b815260206004820152600c60248201526b1b5a59dc985d194e8818985960a21b604482015260640161050f565b83546001600160a01b0319166001600160a01b039190911617909255505050565b6000606a8281548110610f6657634e487b7160e01b600052603260045260246000fd5b9060005260206000209060040201905080600201544311610f85575050565b80546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b158015610fc857600080fd5b505afa158015610fdc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110009190611ed6565b90508061101257504360029091015550565b60006110228360020154436114d3565b9050600061104f606c54610550866001015461104960675487611b8990919063ffffffff16565b90611b89565b6065546066549192506001600160a01b03908116916340c10f19911661107684600a611b95565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b1580156110d457600080fd5b505af11580156110e8573d6000803e3d6000fd5b50506065546040516340c10f1960e01b8152306004820152602481018590526001600160a01b0390911692506340c10f199150604401600060405180830381600087803b15801561113857600080fd5b505af115801561114c573d6000803e3d6000fd5b5050505061117a61116f8461055064e8d4a5100085611b8990919063ffffffff16565b600386015490611cbe565b60038501555050436002909201919091555050565b6000606a82815481106111b257634e487b7160e01b600052603260045260246000fd5b60009182526020808320858452606b8252604080852033808752935293849020600493840290910180548254955163a9059cbb60e01b81529485019390935260248401949094529293506001600160a01b03169063a9059cbb90604401602060405180830381600087803b15801561122957600080fd5b505af115801561123d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112619190611e86565b508054604051908152839033907fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae05959060200160405180910390a360008082556001909101555050565b6033546001600160a01b031633146112f25760405162461bcd60e51b8152602060048201819052602482015260008051602061206f833981519152604482015260640161050f565b606855565b606a5460005b8181101561131e5761130e81610f43565b6113178161201a565b90506112fd565b5050565b6033546001600160a01b0316331461136a5760405162461bcd60e51b8152602060048201819052602482015260008051602061206f833981519152604482015260640161050f565b8015611378576113786112f7565b6000606a848154811061139b57634e487b7160e01b600052603260045260246000fd5b906000526020600020906004020160010154905082606a85815481106113d157634e487b7160e01b600052603260045260246000fd5b90600052602060002090600402016001018190555082811461081a5761140c8361140683606c54611ba190919063ffffffff16565b90611cbe565b606c5561081a611cca565b6033546001600160a01b0316331461145f5760405162461bcd60e51b8152602060048201819052602482015260008051602061206f833981519152604482015260640161050f565b6114696000611dd3565b565b6066546001600160a01b031633146114b15760405162461bcd60e51b81526020600482015260096024820152686465763a207775743f60b81b604482015260640161050f565b606680546001600160a01b0319166001600160a01b0392909216919091179055565b6068546000906114e7906110498486611ba1565b9392505050565b6033546001600160a01b031633146115365760405162461bcd60e51b8152602060048201819052602482015260008051602061206f833981519152604482015260640161050f565b6103e88111156115885760405162461bcd60e51b815260206004820152601360248201527f6e6f7420616c6c6f77206f766572203130302500000000000000000000000000604482015260640161050f565b606e55565b816115da5760405162461bcd60e51b815260206004820152601660248201527f6465706f73697420576167206279207374616b696e6700000000000000000000604482015260640161050f565b6000606a83815481106115fd57634e487b7160e01b600052603260045260246000fd5b60009182526020808320868452606b8252604080852033865290925292206004909102909101915061162e84610f43565b805415611677576000611663826001015461055664e8d4a5100061055087600301548760000154611b8990919063ffffffff16565b90508015611675576116753382611bad565b505b82156117165781546040516323b872dd60e01b8152336004820152306024820152604481018590526001600160a01b03909116906323b872dd90606401602060405180830381600087803b1580156116ce57600080fd5b505af11580156116e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117069190611e86565b5080546117139084611cbe565b81555b600382015481546117319164e8d4a510009161055091611b89565b6001820155604051838152849033907f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a1590602001610658565b600054610100900460ff1680611783575060005460ff16155b6117f55760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161050f565b600054610100900460ff16158015611817576000805461ffff19166101011790555b60016068819055610384606e55606580546001600160a01b038089166001600160a01b03199283168117909355606680548983169084161790556067879055606d869055604080516080810182529384526103e860208501818152918501888152600060608701818152606a8054998a018155909152955160049097027f116fea137db6e131133e7f2bab296045d8f41cc5607279db17b218cab0929a5181018054989095169790951696909617909255517f116fea137db6e131133e7f2bab296045d8f41cc5607279db17b218cab0929a5283015592517f116fea137db6e131133e7f2bab296045d8f41cc5607279db17b218cab0929a5382015590517f116fea137db6e131133e7f2bab296045d8f41cc5607279db17b218cab0929a5490910155606c55801561194f576000805461ff00191690555b5050505050565b6033546001600160a01b0316331461199e5760405162461bcd60e51b8152602060048201819052602482015260008051602061206f833981519152604482015260640161050f565b6001600160a01b038116611a035760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161050f565b611a0c81611dd3565b50565b600080606a8481548110611a3357634e487b7160e01b600052603260045260246000fd5b60009182526020808320878452606b825260408085206001600160a01b038981168752935280852060049485029092016003810154815492516370a0823160e01b8152309681019690965290965091949193919216906370a082319060240160206040518083038186803b158015611aaa57600080fd5b505afa158015611abe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ae29190611ed6565b9050836002015443118015611af657508015155b15611b56576000611b0b8560020154436114d3565b90506000611b32606c54610550886001015461104960675487611b8990919063ffffffff16565b9050611b51611b4a846105508464e8d4a51000611b89565b8590611cbe565b935050505b611b7e836001015461055664e8d4a51000610550868860000154611b8990919063ffffffff16565b979650505050505050565b60006114e78284611fe4565b60006114e78284611fc4565b60006114e78284612003565b60655460405163a9059cbb60e01b81526001600160a01b038481166004830152602482018490529091169063a9059cbb90604401602060405180830381600087803b158015611bfb57600080fd5b505af1158015611c0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c339190611e86565b506000611c516103e8610550606e5485611b8990919063ffffffff16565b60655460405163282d3fdf60e01b81526001600160a01b0386811660048301526024820184905292935091169063282d3fdf90604401600060405180830381600087803b158015611ca157600080fd5b505af1158015611cb5573d6000803e3d6000fd5b50505050505050565b60006114e78284611fac565b606a54600060015b82811015611d3157611d1f606a8281548110611cfe57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600402016001015483611cbe90919063ffffffff16565b9150611d2a8161201a565b9050611cd2565b50801561131e57611d43816003611b95565b9050611d9181611406606a600081548110611d6e57634e487b7160e01b600052603260045260246000fd5b906000526020600020906004020160010154606c54611ba190919063ffffffff16565b606c8190555080606a600081548110611dba57634e487b7160e01b600052603260045260246000fd5b9060005260206000209060040201600101819055505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600060208284031215611e36578081fd5b81356114e78161204b565b60008060008060808587031215611e56578283fd5b8435611e618161204b565b93506020850135611e718161204b565b93969395505050506040820135916060013590565b600060208284031215611e97578081fd5b81516114e781612060565b600060208284031215611eb3578081fd5b81516114e78161204b565b600060208284031215611ecf578081fd5b5035919050565b600060208284031215611ee7578081fd5b5051919050565b60008060408385031215611f00578182fd5b823591506020830135611f128161204b565b809150509250929050565b600080600060608486031215611f31578283fd5b833592506020840135611f438161204b565b91506040840135611f5381612060565b809150509250925092565b60008060408385031215611f70578182fd5b50508035926020909101359150565b600080600060608486031215611f93578283fd5b83359250602084013591506040840135611f5381612060565b60008219821115611fbf57611fbf612035565b500190565b600082611fdf57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611ffe57611ffe612035565b500290565b60008282101561201557612015612035565b500390565b600060001982141561202e5761202e612035565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114611a0c57600080fd5b8015158114611a0c57600080fdfe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a26469706673582212208b887dfb4a6efc2c0ddd96ad07da255a9ad95c720862b621d61211ed2c8e27a864736f6c63430008040033";

export class MasterChef__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MasterChef> {
    return super.deploy(overrides || {}) as Promise<MasterChef>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MasterChef {
    return super.attach(address) as MasterChef;
  }
  connect(signer: Signer): MasterChef__factory {
    return super.connect(signer) as MasterChef__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MasterChefInterface {
    return new utils.Interface(_abi) as MasterChefInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MasterChef {
    return new Contract(address, _abi, signerOrProvider) as MasterChef;
  }
}
