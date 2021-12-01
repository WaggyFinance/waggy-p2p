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
        internalType: "string",
        name: "txKey",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "txId",
        type: "string",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AddCase",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "txKey",
        type: "string",
      },
    ],
    name: "CaseAppeal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "txKey",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "answer",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "remark",
        type: "string",
      },
    ],
    name: "CaseGenResult",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "txKey",
        type: "string",
      },
    ],
    name: "CaseVoteDone",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "txKey",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "status",
        type: "string",
      },
    ],
    name: "ChangeStatus",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "txKey",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    name: "ClaimReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "txKey",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "result",
        type: "string",
      },
    ],
    name: "DoneResult",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "txKey",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "result",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "buyerAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sellerAmount",
        type: "uint256",
      },
    ],
    name: "EvaluateResult",
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
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "txKey",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "answer",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "remark",
        type: "string",
      },
    ],
    name: "UserDecision",
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
        internalType: "string",
        name: "_txId",
        type: "string",
      },
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
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "addCase",
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
    name: "adminRole",
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
        internalType: "string",
        name: "_key",
        type: "string",
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
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "casesInfo",
    outputs: [
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "currentValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fund",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "result",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "resultAt",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "randomness",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "remark",
        type: "uint256",
      },
      {
        internalType: "enum Validator.CaseStatus",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_key",
        type: "string",
      },
      {
        internalType: "string",
        name: "_result",
        type: "string",
      },
    ],
    name: "decideByAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_key",
        type: "string",
      },
    ],
    name: "encode",
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
    name: "erc20Interface",
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
        internalType: "string",
        name: "_key",
        type: "string",
      },
    ],
    name: "evaluate",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    inputs: [],
    name: "fee",
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
        internalType: "string",
        name: "_key",
        type: "string",
      },
      {
        internalType: "address",
        name: "_userReply",
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
        internalType: "string",
        name: "_key",
        type: "string",
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
        internalType: "string",
        name: "_key",
        type: "string",
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
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isAdmin",
        type: "bool",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_key",
        type: "string",
      },
    ],
    name: "setCaseStatusDone",
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
  "0x60806040523480156200001157600080fd5b5060405162002a4538038062002a458339810160408190526200003491620000b1565b62000048620000426200005d565b62000061565b600691909155600591909155600755620000df565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600060608486031215620000c6578283fd5b8351925060208401519150604084015190509250925092565b61295680620000ef6000396000f3fe608060405234801561001057600080fd5b50600436106101475760003560e01c8063836aeddb116100c8578063c613ffa61161008c578063d6eb591011610066578063d6eb5910146102c6578063ddca3f43146102ce578063f2fde38b146102d657610147565b8063c613ffa614610298578063ca2b19f0146102ab578063d0f2f3e0146102be57610147565b8063836aeddb146102415780638a1111c2146102625780638da5cb5b146102755780638fcd03021461027d578063bedf0e4a1461029057610147565b80634ba590d71161010f5780634ba590d7146101dc5780634ba7043c146101ef5780635fd295d7146102115780636a11b2a814610226578063715018a61461023957610147565b80631fbfcd7a1461014c57806342ba871e14610175578063467c65be1461019f5780634ac8eb5f146101b45780634b0bddd2146101c9575b600080fd5b61015f61015a366004611f4c565b6102e9565b60405161016c91906123a8565b60405180910390f35b610188610183366004611f19565b610331565b60405161016c9b9a999897969594939291906122a5565b6101b26101ad366004611e7e565b610430565b005b6101bc610569565b60405161016c91906123c3565b6101b26101d7366004611e48565b61056f565b6101b26101ea366004611f19565b6105e2565b6102026101fd366004611f19565b610696565b60405161016c939291906124ee565b610219610ca9565b60405161016c9190612291565b6101bc610234366004611f19565b610cb8565b6101b2610d62565b61025461024f366004611f4c565b610dad565b60405161016c9291906123b3565b61015f610270366004611e2e565b610f05565b610219610f1a565b6101b261028b366004611ff9565b610f29565b6101bc611289565b6101b26102a6366004611f19565b61128f565b6101b26102b9366004611f98565b611366565b6101bc611608565b6101bc61160e565b6101bc611614565b6101b26102e4366004611e2e565b61161a565b6000806002846040516102fc919061217f565b908152604080519182900360209081019092206001600160a01b03861660009081529252902060030154151591505092915050565b805160208183018101805160028252928201919093012091526003810154600482015460058301546006840154600785015460088601546009870180546001600160a01b0397881698968816979095169593949293919261039190612866565b80601f01602080910402602001604051908101604052809291908181526020018280546103bd90612866565b801561040a5780601f106103df5761010080835404028352916020019161040a565b820191906000526020600020905b8154815290600101906020018083116103ed57829003601f168201915b50505050600a830154600b840154600c850154600d909501549394919390925060ff168b565b600061046e4388878787876040516020016104509695949392919061223b565b6040516020818303038152906040528051906020012060001c61168b565b905061049f6040518060400160405280600d81526020016c023b2b732b930ba329025b2bc9609d1b815250826117ae565b60006002826040516104b1919061217f565b9081526040519081900360200181206003810180546001600160a01b038a81166001600160a01b0319928316179092556004830180548a8416908316179055600583018054928d1692909116919091179055600c810186905560078101859055600d8101805460ff1916600117905591507fb083638963bd6281b2df0c5fdf6ce0abad4a53c3aaaa786d9eb4d2af1a5582ca906105579084908a908a908a90899061240d565b60405180910390a15050505050505050565b60045481565b6105776117f7565b6001600160a01b0316610588610f1a565b6001600160a01b0316146105b75760405162461bcd60e51b81526004016105ae90612646565b60405180910390fd5b6001600160a01b03919091166000908152600360205260409020805460ff1916911515919091179055565b60006002826040516105f4919061217f565b90815260405190819003602001902090506002600d82015460ff16600481111561062e57634e487b7160e01b600052602160045260246000fd5b1461064b5760405162461bcd60e51b81526004016105ae906125b4565b600d8101805460ff191660031790556040517f7a725c721300d5ec6d6e71ae5bf991dbf9e68a0d758d7304e8e2d698ae1588eb9061068a9084906123cc565b60405180910390a15050565b3360009081526003602052604081205460609190819060ff166106cb5760405162461bcd60e51b81526004016105ae906125eb565b60006002856040516106dd919061217f565b908152602001604051809103902090508060070154816006015410156107155760405162461bcd60e51b81526004016105ae906127a1565b60018101546107365760405162461bcd60e51b81526004016105ae906126b2565b600a810154156107585760405162461bcd60e51b81526004016105ae90612537565b60008080805b600185015481101561091f57600085600101828154811061078f57634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b03168083528882526040808420815160a081018352815481526001820154948101949094526002810180549396509092918401916107e190612866565b80601f016020809104026020016040519081016040528092919081815260200182805461080d90612866565b801561085a5780601f1061082f5761010080835404028352916020019161085a565b820191906000526020600020905b81548152906001019060200180831161083d57829003601f168201915b5050509183525050600382015460208083019190915260049092015460ff16151560409182015280518082019091526005815264212aaca2a960d91b918101919091529091508b6108aa846117fb565b6040516020016108bc9392919061219b565b60405160208183030381529060405280519060200120935083816000015114156108f75760208101516108f0908790611a63565b955061090a565b6020810151610907908690611a63565b94505b50508080610917906128a1565b91505061075e565b508183111561095c5760408051808201909152600580825264212aaca2a960d91b6020909201918252610956916009870191611cfd565b506109c8565b81831015610993576040805180820190915260068082526529a2a62622a960d11b6020909201918252610956916009870191611cfd565b60408051808201909152600a808252691154555255905311539560b21b60209092019182526109c6916009870191611cfd565b505b6000805b6001860154811015610b935760008660010182815481106109fd57634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b03168083528982526040808420815160a08101835281548152600182015494810194909452600281018054939650909291840191610a4f90612866565b80601f0160208091040260200160405190810160405280929190818152602001828054610a7b90612866565b8015610ac85780601f10610a9d57610100808354040283529160200191610ac8565b820191906000526020600020905b815481529060010190602001808311610aab57829003601f168201915b50505050508152602001600382015481526020016004820160009054906101000a900460ff16151515158152505090506000886009018d84604051602001610b12939291906121de565b60405160208183030381529060405280519060200120905080826000015114610b4c576020820151610b45908690611a63565b9450610b7d565b600289018054600181018255600091825260209091200180546001600160a01b0319166001600160a01b0385161790555b5050508080610b8b906128a1565b9150506109cc565b50600d8501805460ff191660021790556008850181905543600a8601556006850154600454610bc191611a76565b6004556040517f391b7a90fbbb8e5cbda21c55bd16d9bec55992ab54f8d9636ba48f6b32e701cb90610bfd908b9060098901908890889061247c565b60405180910390a1846009018484828054610c1790612866565b80601f0160208091040260200160405190810160405280929190818152602001828054610c4390612866565b8015610c905780601f10610c6557610100808354040283529160200191610c90565b820191906000526020600020905b815481529060010190602001808311610c7357829003601f168201915b5050505050925097509750975050505050509193909250565b6001546001600160a01b031681565b600080610cc4336117fb565b9050600060405180604001604052806005815260200164212aaca2a960d91b8152508483604051602001610cfa9392919061219b565b60408051601f19818403018152828201909152600b82526a030b1349032b731b7b232960ad1b60208301529150610d3190826117ae565b80604051602001610d42919061217f565b60405160208183030381529060405280519060200120925050505b919050565b610d6a6117f7565b6001600160a01b0316610d7b610f1a565b6001600160a01b031614610da15760405162461bcd60e51b81526004016105ae90612646565b610dab6000611a82565b565b6000806000600285604051610dc2919061217f565b9081526040805191829003602090810183206001600160a01b038816600090815281835283812060a08601855280548652600181015493860193909352600283018054929650909493840191610e1790612866565b80601f0160208091040260200160405190810160405280929190818152602001828054610e4390612866565b8015610e905780601f10610e6557610100808354040283529160200191610e90565b820191906000526020600020905b815481529060010190602001808311610e7357829003601f168201915b50505091835250506003820154602082015260049091015460ff161515604090910152905060006009830187610ec5886117fb565b604051602001610ed79392919061221f565b60408051601f1981840301815291905280516020918201208351939091015192149791965090945050505050565b60036020526000908152604090205460ff1681565b6000546001600160a01b031690565b6000600285604051610f3b919061217f565b90815260405190819003602001902090506001600d82015460ff166004811115610f7557634e487b7160e01b600052602160045260246000fd5b14610f925760405162461bcd60e51b81526004016105ae90612513565b8060060154816007015411610fb95760405162461bcd60e51b81526004016105ae906126e9565b33600090815260208281526040808320815160a081018352815481526001820154938101939093526002810180549192840191610ff590612866565b80601f016020809104026020016040519081016040528092919081815260200182805461102190612866565b801561106e5780601f106110435761010080835404028352916020019161106e565b820191906000526020600020905b81548152906001019060200180831161105157829003601f168201915b50505091835250506003820154602082015260049091015460ff1615156040909101526060810151909150156110b65760405162461bcd60e51b81526004016105ae9061260f565b60078201546005546000906110d9906064906110d3908590611ad2565b90611ade565b905060006110f760646110d360065486611ad290919063ffffffff16565b90508188111580156111095750808810155b6111255760405162461bcd60e51b81526004016105ae9061267b565b600585015461113f906001600160a01b031633308b611aea565b60045461114c9089611a63565b600455602080850189815288865260408087018981524360608901523360009081528985529190912087518155915160018301555180518793611196926002850192910190611cfd565b50606082015160038201556080909101516004909101805491151560ff199092169190911790556001858101805491820181556000908152602090200180546001600160a01b0319163317905560068501546111f29089611a63565b60068601556040517fc11bba61e9b7f36888fc846cf91aadcf95e993777604a44a55c4222e2a05e2ce9061122f9033908c908c908c908c9061235c565b60405180910390a1846007015485600601541061127e577f54cf7d6a94527eb081cfbba90aac01cf12e6a5ac727b128f30b5e71e9c6251028960405161127591906123cc565b60405180910390a15b505050505050505050565b60065481565b3360009081526003602052604090205460ff166112be5760405162461bcd60e51b81526004016105ae906125eb565b60006002826040516112d0919061217f565b90815260405190819003602001902090506002600d82015460ff16600481111561130a57634e487b7160e01b600052602160045260246000fd5b146113275760405162461bcd60e51b81526004016105ae906125b4565b600d8101805460ff191660041790556040517f176703c2ef60ed2c86f0026fd2db6cdf0385a643e57812c97cc09bfd96be17ee9061068a9084906124b5565b3360009081526003602052604090205460ff166113955760405162461bcd60e51b81526004016105ae906125eb565b60006002836040516113a7919061217f565b90815260200160405180910390209050818160090190805190602001906113cf929190611cfd565b506000805b600183015481101561159257600083600101828154811061140557634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b03168083528682526040808420815160a0810183528154815260018201549481019490945260028101805493965090929184019161145790612866565b80601f016020809104026020016040519081016040528092919081815260200182805461148390612866565b80156114d05780601f106114a5576101008083540402835291602001916114d0565b820191906000526020600020905b8154815290600101906020018083116114b357829003601f168201915b5050509183525050600382015460208083019190915260049092015460ff161515604091820152519192506000916115119160098901918b918791016121de565b6040516020818303038152906040528051906020012090508082600001511461154b576020820151611544908690611a63565b945061157c565b600286018054600181018255600091825260209091200180546001600160a01b0319166001600160a01b0385161790555b505050808061158a906128a1565b9150506113d4565b50600d8201805460ff191660049081179091556008830182905543600a840155600683015490546115c291611a76565b6004556040517fc41bb5b58706afd05084202924e19462a4c3654adaa5b4307fb1173df5bec119906115fa9086906009860190612457565b60405180910390a150505050565b60055481565b60045490565b60075481565b6116226117f7565b6001600160a01b0316611633610f1a565b6001600160a01b0316146116595760405162461bcd60e51b81526004016105ae90612646565b6001600160a01b03811661167f5760405162461bcd60e51b81526004016105ae9061256e565b61168881611a82565b50565b6060816116b057506040805180820190915260018152600360fc1b6020820152610d5d565b8160005b81156116da57806116c4816128a1565b91506116d39050600a836127f0565b91506116b4565b60008167ffffffffffffffff81111561170357634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561172d576020820181803683370190505b5090505b84156117a657611742600183612823565b915061174f600a866128bc565b61175a9060306127d8565b60f81b81838151811061177d57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535061179f600a866127f0565b9450611731565b949350505050565b6117f382826040516024016117c49291906123df565b60408051601f198184030181529190526020810180516001600160e01b0316634b5c427760e01b179052611b60565b5050565b3390565b604080518082018252601081527f303132333435363738396162636465660000000000000000000000000000000060208201528151602a80825260608281019094526001600160a01b0385169291600091602082018180368337019050509050600360fc1b8160008151811061188157634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106118be57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060005b6014811015611a5a57826004856118f084600c6127d8565b6020811061190e57634e487b7160e01b600052603260045260246000fd5b1a60f81b6001600160f81b031916901c60f81c60ff168151811061194257634e487b7160e01b600052603260045260246000fd5b01602001516001600160f81b0319168261195d836002612804565b6119689060026127d8565b8151811061198657634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535082846119aa83600c6127d8565b602081106119c857634e487b7160e01b600052603260045260246000fd5b825191901a600f169081106119ed57634e487b7160e01b600052603260045260246000fd5b01602001516001600160f81b03191682611a08836002612804565b611a139060036127d8565b81518110611a3157634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535080611a52816128a1565b9150506118d8565b50949350505050565b6000611a6f82846127d8565b9392505050565b6000611a6f8284612823565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000611a6f8284612804565b6000611a6f82846127f0565b611b5a846323b872dd60e01b858585604051602401611b0b93929190612338565b60408051601f198184030181529190526020810180516001600160e01b03167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b81565b50505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000611bd6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611c159092919063ffffffff16565b805190915015611c105780806020019051810190611bf49190611efd565b611c105760405162461bcd60e51b81526004016105ae90612757565b505050565b60606117a6848460008585611c2985611cbe565b611c455760405162461bcd60e51b81526004016105ae90612720565b600080866001600160a01b03168587604051611c61919061217f565b60006040518083038185875af1925050503d8060008114611c9e576040519150601f19603f3d011682016040523d82523d6000602084013e611ca3565b606091505b5091509150611cb3828286611cc4565b979650505050505050565b3b151590565b60608315611cd3575081611a6f565b825115611ce35782518084602001fd5b8160405162461bcd60e51b81526004016105ae91906123cc565b828054611d0990612866565b90600052602060002090601f016020900481019282611d2b5760008555611d71565b82601f10611d4457805160ff1916838001178555611d71565b82800160010185558215611d71579182015b82811115611d71578251825591602001919060010190611d56565b50611d7d929150611d81565b5090565b5b80821115611d7d5760008155600101611d82565b80356001600160a01b0381168114610d5d57600080fd5b600082601f830112611dbd578081fd5b813567ffffffffffffffff80821115611dd857611dd86128fc565b604051601f8301601f191681016020018281118282101715611dfc57611dfc6128fc565b604052828152848301602001861015611e13578384fd5b82602086016020830137918201602001929092529392505050565b600060208284031215611e3f578081fd5b611a6f82611d96565b60008060408385031215611e5a578081fd5b611e6383611d96565b91506020830135611e7381612912565b809150509250929050565b60008060008060008060c08789031215611e96578182fd5b611e9f87611d96565b9550602087013567ffffffffffffffff811115611eba578283fd5b611ec689828a01611dad565b955050611ed560408801611d96565b9350611ee360608801611d96565b92506080870135915060a087013590509295509295509295565b600060208284031215611f0e578081fd5b8151611a6f81612912565b600060208284031215611f2a578081fd5b813567ffffffffffffffff811115611f40578182fd5b6117a684828501611dad565b60008060408385031215611f5e578182fd5b823567ffffffffffffffff811115611f74578283fd5b611f8085828601611dad565b925050611f8f60208401611d96565b90509250929050565b60008060408385031215611faa578182fd5b823567ffffffffffffffff80821115611fc1578384fd5b611fcd86838701611dad565b93506020850135915080821115611fe2578283fd5b50611fef85828601611dad565b9150509250929050565b6000806000806080858703121561200e578384fd5b843567ffffffffffffffff80821115612025578586fd5b61203188838901611dad565b955060208701359450604087013593506060870135915080821115612054578283fd5b5061206187828801611dad565b91505092959194509250565b6000815180845261208581602086016020860161283a565b601f01601f19169290920160200192915050565b600081546120a681612866565b8085526020600183811680156120c357600181146120d757612105565b60ff19851688840152604088019550612105565b866000528260002060005b858110156120fd5781548a82018601529083019084016120e2565b890184019650505b505050505092915050565b6000815461211d81612866565b60018281168015612135576001811461214657612175565b60ff19841687528287019450612175565b8560005260208060002060005b8581101561216c5781548a820152908401908201612153565b50505082870194505b5050505092915050565b6000825161219181846020870161283a565b9190910192915050565b600084516121ad81846020890161283a565b8451908301906121c181836020890161283a565b84519101906121d481836020880161283a565b0195945050505050565b60006121ea8286612110565b84516121fa81836020890161283a565b60609490941b6bffffffffffffffffffffffff19169301928352505060140192915050565b600061222b8286612110565b84516121c181836020890161283a565b64776167677960d81b815260058101969096526bffffffffffffffffffffffff19606095861b8116602588015293851b841660398701529190931b909116604d8401526061830191909152608182015260a10190565b6001600160a01b0391909116815260200190565b60006101606001600160a01b03808f168452808e166020850152808d166040850152508a60608401528960808401528860a08401528060c08401526122ec8184018961206d565b9150508560e083015284610100830152836101208301526005831061232157634e487b7160e01b600052602160045260246000fd5b826101408301529c9b505050505050505050505050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001600160a01b038716825260a0602083015261237e60a083018761206d565b856040840152846060840152828103608084015261239c818561206d565b98975050505050505050565b901515815260200190565b9115158252602082015260400190565b90815260200190565b600060208252611a6f602083018461206d565b6000604082526123f2604083018561206d565b8281036020840152612404818561206d565b95945050505050565b600060a0825261242060a083018861206d565b8281036020840152612432818861206d565b6001600160a01b03968716604085015294909516606083015250608001529392505050565b60006040825261246a604083018561206d565b82810360208401526124048185612099565b60006080825261248f608083018761206d565b82810360208401526124a18187612099565b604084019590955250506060015292915050565b6000604082526124c8604083018461206d565b82810360208401526004815263444f4e4560e01b60208201526040810191505092915050565b600060608252612501606083018661206d565b60208301949094525060400152919050565b6020808252600a908201526943616e277420566f746560b01b604082015260600190565b6020808252601d908201527f54686973206361736520616c72656164792068616420726573756c742e000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252600f908201527f5374617475732069732077726f6e670000000000000000000000000000000000604082015260600190565b6020808252600a908201526937b7363c9030b236b4b760b11b604082015260600190565b6020808252601a908201527f4e6f7420616c6c6f772075736572207265706c7920616761696e000000000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601d908201527f616d6f756e74206973206e6f7420696e2072616e6765206c696d69742e000000604082015260600190565b6020808252600e908201527f43617365206e6f74206578697374000000000000000000000000000000000000604082015260600190565b60208082526012908201527f546865206361736520697320636c6f7365640000000000000000000000000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b60208082526013908201527f5573657220766f7465206e6f7420646f6e652e00000000000000000000000000604082015260600190565b600082198211156127eb576127eb6128d0565b500190565b6000826127ff576127ff6128e6565b500490565b600081600019048311821515161561281e5761281e6128d0565b500290565b600082821015612835576128356128d0565b500390565b60005b8381101561285557818101518382015260200161283d565b83811115611b5a5750506000910152565b60028104600182168061287a57607f821691505b6020821081141561289b57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156128b5576128b56128d0565b5060010190565b6000826128cb576128cb6128e6565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b801515811461168857600080fdfea2646970667358221220903f080427505775f5432749c57df45894398f6558cc79f08dba5afa9badd41164736f6c63430008000033";

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
