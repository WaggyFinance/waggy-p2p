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
        internalType: "address",
        name: "_gov",
        type: "address",
      },
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
      {
        indexed: false,
        internalType: "address",
        name: "appealAddress",
        type: "address",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "updateAt",
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
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
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
        internalType: "uint256",
        name: "winnerAmount",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "setMaxPercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "setMinPercent",
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
  {
    inputs: [
      {
        internalType: "string",
        name: "_key",
        type: "string",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "userCanClaimReward",
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
    name: "userClaimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002cf538038062002cf58339810160408190526200003491620000bf565b6200003f336200006f565b600280546001600160a01b0319166001600160a01b0395909516949094179093556007556006556008556200010c565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60008060008060808587031215620000d657600080fd5b84516001600160a01b0381168114620000ee57600080fd5b60208601516040870151606090970151919890975090945092505050565b612bd9806200011c6000396000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c8063715018a6116100ee578063bedf0e4a11610097578063d0f2f3e011610071578063d0f2f3e0146103af578063d6eb5910146103b8578063ddca3f43146103c0578063f2fde38b146103c957600080fd5b8063bedf0e4a14610380578063c613ffa614610389578063ca2b19f01461039c57600080fd5b80638a1111c2116100c85780638a1111c2146103395780638da5cb5b1461035c5780638fcd03021461036d57600080fd5b8063715018a6146102f457806376aaa708146102fc578063836aeddb1461030f57600080fd5b80634ac8eb5f116101505780634ba7043c1161012a5780634ba7043c146102935780635fd295d7146102b65780636a11b2a8146102e157600080fd5b80634ac8eb5f146102565780634b0bddd21461026d5780634ba590d71461028057600080fd5b80631fbfcd7a116101815780631fbfcd7a146101e357806342ba871e1461020b578063467c65be1461023657600080fd5b8063030ea2fa146101a85780630e477192146101bd57806315d311f2146101d0575b600080fd5b6101bb6101b63660046123d9565b6103dc565b005b6101bb6101cb36600461240e565b610605565b6101bb6101de36600461240e565b610664565b6101f66101f1366004612443565b6106c3565b60405190151581526020015b60405180910390f35b61021e6102193660046123d9565b61070b565b6040516102029c9b9a999897969594939291906124ff565b61024961024436600461259a565b610815565b604051610202919061261b565b61025f60055481565b604051908152602001610202565b6101bb61027b36600461263c565b61098e565b6101bb61028e3660046123d9565b610a13565b6102a66102a13660046123d9565b610b56565b6040516102029493929190612673565b6001546102c9906001600160a01b031681565b6040516001600160a01b039091168152602001610202565b61025f6102ef3660046123d9565b611149565b6101bb6111f2565b6101f661030a366004612443565b611258565b61032261031d366004612443565b6112a1565b604080519215158352602083019190915201610202565b6101f66103473660046126a2565b60046020526000908152604090205460ff1681565b6000546001600160a01b03166102c9565b6101bb61037b3660046126bd565b611454565b61025f60075481565b6101bb6103973660046123d9565b61184d565b6101bb6103aa366004612734565b611955565b61025f60065481565b60055461025f565b61025f60085481565b6101bb6103d73660046126a2565b611b48565b8060006003826040516103ef9190612798565b90815260200160405180910390209050600081600b015461038461041391906127ca565b90508042116104555760405162461bcd60e51b815260206004820152600960248201526834b7103232b630bc9760b91b60448201526064015b60405180910390fd5b60006003856040516104679190612798565b90815260405190819003602001902090506004600e82015460ff166004811115610493576104936124e9565b146104d25760405162461bcd60e51b815260206004820152600f60248201526e5374617475732069732077726f6e6760881b604482015260640161044c565b336000908152602082905260409020600481015460ff166105215760405162461bcd60e51b81526020600482015260096024820152683cb7ba903637b9b29760b91b604482015260640161044c565b60048101805460ff1916905560018101546008830154156105645761056161055a84600901548560080154611c1390919063ffffffff16565b8290611c26565b90505b600061057d612710610577846019611c32565b90611c13565b6002546040516340c10f1960e01b8152336004820152602481018390529192506001600160a01b0316906340c10f1990604401600060405180830381600087803b1580156105ca57600080fd5b505af11580156105de573d6000803e3d6000fd5b50505060058501546105fb91506001600160a01b03163384611c3e565b5050505050505050565b6000546001600160a01b0316331461065f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161044c565b600755565b6000546001600160a01b031633146106be5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161044c565b600655565b6000806003846040516106d69190612798565b908152604080519182900360209081019092206001600160a01b03861660009081529252902060030154151591505092915050565b805160208183018101805160038083529383019290940191909120929052810154600482015460058301546006840154600785015460088601546009870154600a880180546001600160a01b03988916999789169890961696949593949293919291610776906127e2565b80601f01602080910402602001604051908101604052809291908181526020018280546107a2906127e2565b80156107ef5780601f106107c4576101008083540402835291602001916107ef565b820191906000526020600020905b8154815290600101906020018083116107d257829003601f168201915b50505050600b830154600c840154600d850154600e909501549394919390925060ff168c565b60405164776167677960d81b6020820152426025820152606087811b6bffffffffffffffffffffffff19908116604584015286821b8116605984015285821b16606d8301526081820184905260a18201839052906000906108919060c1016040516020818303038152906040528051906020012060001c611cbe565b90506108c26040518060400160405280600d81526020016c023b2b732b930ba329025b2bc9609d1b81525082611dc4565b60006003826040516108d49190612798565b9081526040519081900360200181206003810180546001600160a01b038b81166001600160a01b0319928316179092556004830180548b8416908316179055600583018054928e1692909116919091179055600d810187905560078101869055600e8101805460ff1916600117905591507fb083638963bd6281b2df0c5fdf6ce0abad4a53c3aaaa786d9eb4d2af1a5582ca9061097a9084908b908b908b908a9061281d565b60405180910390a150979650505050505050565b6000546001600160a01b031633146109e85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161044c565b6001600160a01b03919091166000908152600460205260409020805460ff1916911515919091179055565b6000600382604051610a259190612798565b90815260405190819003602001902090506002600e82015460ff166004811115610a5157610a516124e9565b14610a905760405162461bcd60e51b815260206004820152600f60248201526e5374617475732069732077726f6e6760881b604482015260640161044c565b60038101546001600160a01b0316331480610ab7575060048101546001600160a01b031633145b610b035760405162461bcd60e51b815260206004820152601860248201527f4e6f7420616c6c6f772065787465726e616c20757365722e0000000000000000604482015260640161044c565b600e8101805460ff1916600317905542600b8201556040517fec37e716b9aded4ebd658186e0d0fc5003114b680eb68ae6b995f22424da15b490610b4a9084903390612867565b60405180910390a15050565b33600090815260046020526040812054606091908190819060ff16610baa5760405162461bcd60e51b815260206004820152600a60248201526937b7363c9030b236b4b760b11b604482015260640161044c565b6000600386604051610bbc9190612798565b90815260200160405180910390209050806007015481600601541015610c245760405162461bcd60e51b815260206004820152601360248201527f5573657220766f7465206e6f7420646f6e652e00000000000000000000000000604482015260640161044c565b6001810154610c755760405162461bcd60e51b815260206004820152600e60248201527f43617365206e6f74206578697374000000000000000000000000000000000000604482015260640161044c565b600b81015415610cc75760405162461bcd60e51b815260206004820152601d60248201527f54686973206361736520616c72656164792068616420726573756c742e000000604482015260640161044c565b60008080805b6001850154811015610e80576000856001018281548110610cf057610cf0612892565b60009182526020808320909101546001600160a01b03168083528882526040808420815160a08101835281548152600182015494810194909452600281018054939650909291840191610d42906127e2565b80601f0160208091040260200160405190810160405280929190818152602001828054610d6e906127e2565b8015610dbb5780601f10610d9057610100808354040283529160200191610dbb565b820191906000526020600020905b815481529060010190602001808311610d9e57829003601f168201915b5050509183525050600382015460208083019190915260049092015460ff16151560409182015280518082019091526005815264212aaca2a960d91b918101919091529091508c610e0b84611e0d565b604051602001610e1d939291906128a8565b6040516020818303038152906040528051906020012093508381600001511415610e58576020810151610e51908790611c26565b9550610e6b565b6020810151610e68908690611c26565b94505b50508080610e78906128eb565b915050610ccd565b5081831115610ebd5760408051808201909152600580825264212aaca2a960d91b6020909201918252610eb791600a87019161229d565b50610f28565b81831015610ef4576040805180820190915260068082526529a2a62622a960d11b6020909201918252610eb791600a87019161229d565b60408051808201909152600a808252691154555255905311539560b21b6020909201918252610f26918682019161229d565b505b60008060005b6001870154811015611007576000876001018281548110610f5157610f51612892565b60009182526020808320909101546001600160a01b0316808352908a90526040822090925090600a8a018f610f8585611e0d565b604051602001610f9793929190612906565b60405160208183030381529060405280519060200120905080826000015414610fd1576001820154610fca908690611c26565b9450610ff1565b60048201805460ff19166001908117909155610fee908790611c26565b95505b5050508080610fff906128eb565b915050610f2e565b5060098601829055600e8601805460ff19166002179055611038611031606461057784600a611c32565b8290612005565b600887015542600b870155600686015460055461105491612005565b600555600b8601546040517f09273f082e00d7e4b6d6082e6702bda2563a8149ae63b0d30e9e6da333c6a5b391611095918e91600a8b01918a918a916129f7565b60405180910390a185600a01858588600b01548380546110b4906127e2565b80601f01602080910402602001604051908101604052809291908181526020018280546110e0906127e2565b801561112d5780601f106111025761010080835404028352916020019161112d565b820191906000526020600020905b81548152906001019060200180831161111057829003601f168201915b5050505050935099509950995099505050505050509193509193565b60008061115533611e0d565b9050600060405180604001604052806005815260200164212aaca2a960d91b815250848360405160200161118b939291906128a8565b60408051601f19818403018152828201909152600b82526a030b1349032b731b7b232960ad1b602083015291506111c29082611dc4565b806040516020016111d39190612798565b6040516020818303038152906040528051906020012092505050919050565b6000546001600160a01b0316331461124c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161044c565b6112566000612011565b565b60008060038460405161126b9190612798565b908152604080519182900360209081019092206001600160a01b0386166000908152925290206004015460ff1691505092915050565b60008060006003856040516112b69190612798565b90815260405190819003602001902090506004600e82015460ff1660048111156112e2576112e26124e9565b146113215760405162461bcd60e51b815260206004820152600f60248201526e5374617475732069732077726f6e6760881b604482015260640161044c565b6001600160a01b038416600090815260208281526040808320815160a081018352815481526001820154938101939093526002810180549192840191611366906127e2565b80601f0160208091040260200160405190810160405280929190818152602001828054611392906127e2565b80156113df5780601f106113b4576101008083540402835291602001916113df565b820191906000526020600020905b8154815290600101906020018083116113c257829003601f168201915b50505091835250506003820154602082015260049091015460ff16151560409091015290506000600a83018761141488611e0d565b60405160200161142693929190612906565b60408051601f1981840301815291905280516020918201208351939091015192149791965090945050505050565b60006003856040516114669190612798565b90815260405190819003602001902090506001600e82015460ff166004811115611492576114926124e9565b146114cc5760405162461bcd60e51b815260206004820152600a60248201526943616e277420566f746560b01b604482015260640161044c565b80600601548160070154116115235760405162461bcd60e51b815260206004820152601260248201527f546865206361736520697320636c6f7365640000000000000000000000000000604482015260640161044c565b33600090815260208281526040808320815160a08101835281548152600182015493810193909352600281018054919284019161155f906127e2565b80601f016020809104026020016040519081016040528092919081815260200182805461158b906127e2565b80156115d85780601f106115ad576101008083540402835291602001916115d8565b820191906000526020600020905b8154815290600101906020018083116115bb57829003601f168201915b50505091835250506003820154602082015260049091015460ff1615156040909101526060810151909150156116505760405162461bcd60e51b815260206004820152601a60248201527f4e6f7420616c6c6f772075736572207265706c7920616761696e000000000000604482015260640161044c565b600782015460065460009061166d90606490610577908590611c32565b9050600061168b606461057760075486611c3290919063ffffffff16565b905081881115801561169d5750808810155b6116e95760405162461bcd60e51b815260206004820152601d60248201527f616d6f756e74206973206e6f7420696e2072616e6765206c696d69742e000000604482015260640161044c565b6005850154611703906001600160a01b031633308b612061565b6005546117109089611c26565b60055560208085018981528886526040808701898152426060890152336000908152898552919091208751815591516001830155518051879361175a92600285019291019061229d565b50606082015160038201556080909101516004909101805491151560ff199092169190911790556001858101805491820181556000908152602090200180546001600160a01b0319163317905560068501546117b69089611c26565b60068601556040517fc11bba61e9b7f36888fc846cf91aadcf95e993777604a44a55c4222e2a05e2ce906117f39033908c908c908c908c90612a3a565b60405180910390a18460070154856006015410611842577f54cf7d6a94527eb081cfbba90aac01cf12e6a5ac727b128f30b5e71e9c62510289604051611839919061261b565b60405180910390a15b505050505050505050565b3360009081526004602052604090205460ff166118995760405162461bcd60e51b815260206004820152600a60248201526937b7363c9030b236b4b760b11b604482015260640161044c565b60006003826040516118ab9190612798565b90815260405190819003602001902090506002600e82015460ff1660048111156118d7576118d76124e9565b146119165760405162461bcd60e51b815260206004820152600f60248201526e5374617475732069732077726f6e6760881b604482015260640161044c565b600e8101805460ff191660041790556040517f176703c2ef60ed2c86f0026fd2db6cdf0385a643e57812c97cc09bfd96be17ee90610b4a908490612a86565b3360009081526004602052604090205460ff166119a15760405162461bcd60e51b815260206004820152600a60248201526937b7363c9030b236b4b760b11b604482015260640161044c565b60006003836040516119b39190612798565b908152602001604051809103902090508181600a0190805190602001906119db92919061229d565b5060008060005b6001840154811015611abb576000846001018281548110611a0557611a05612892565b60009182526020808320909101546001600160a01b0316808352908790526040822090925090600a870189611a3985611e0d565b604051602001611a4b93929190612906565b60405160208183030381529060405280519060200120905080826000015414611a85576001820154611a7e908690611c26565b9450611aa5565b60048201805460ff19166001908117909155611aa2908790611c26565b95505b5050508080611ab3906128eb565b9150506119e2565b5060098301829055600e8301805460ff19166004179055611ae5611031606461057784600a611c32565b600884015542600b8401556006830154600554611b0191612005565b6005556040517fc41bb5b58706afd05084202924e19462a4c3654adaa5b4307fb1173df5bec11990611b39908790600a870190612abf565b60405180910390a15050505050565b6000546001600160a01b03163314611ba25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161044c565b6001600160a01b038116611c075760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161044c565b611c1081612011565b50565b6000611c1f8284612b03565b9392505050565b6000611c1f82846127ca565b6000611c1f8284612b17565b6040516001600160a01b038316602482015260448101829052611cb990849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261209f565b505050565b606081611ce25750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611d0c5780611cf6816128eb565b9150611d059050600a83612b03565b9150611ce6565b60008167ffffffffffffffff811115611d2757611d27612336565b6040519080825280601f01601f191660200182016040528015611d51576020820181803683370190505b5090505b8415611dbc57611d66600183612b36565b9150611d73600a86612b4d565b611d7e9060306127ca565b60f81b818381518110611d9357611d93612892565b60200101906001600160f81b031916908160001a905350611db5600a86612b03565b9450611d55565b949350505050565b611e098282604051602401611dda929190612b61565b60408051601f198184030181529190526020810180516001600160e01b0316634b5c427760e01b179052612171565b5050565b604080518082018252601081527f303132333435363738396162636465660000000000000000000000000000000060208201528151602a80825260608281019094526001600160a01b0385169291600091602082018180368337019050509050600360fc1b81600081518110611e8557611e85612892565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611eb457611eb4612892565b60200101906001600160f81b031916908160001a90535060005b6014811015611ffc5782600485611ee684600c6127ca565b60208110611ef657611ef6612892565b1a60f81b6001600160f81b031916901c60f81c60ff1681518110611f1c57611f1c612892565b01602001516001600160f81b03191682611f37836002612b17565b611f429060026127ca565b81518110611f5257611f52612892565b60200101906001600160f81b031916908160001a9053508284611f7683600c6127ca565b60208110611f8657611f86612892565b825191901a600f16908110611f9d57611f9d612892565b01602001516001600160f81b03191682611fb8836002612b17565b611fc39060036127ca565b81518110611fd357611fd3612892565b60200101906001600160f81b031916908160001a90535080611ff4816128eb565b915050611ece565b50949350505050565b6000611c1f8284612b36565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040516001600160a01b03808516602483015283166044820152606481018290526120999085906323b872dd60e01b90608401611c6a565b50505050565b60006120f4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166121929092919063ffffffff16565b805190915015611cb957808060200190518101906121129190612b86565b611cb95760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161044c565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6060611dbc848460008585843b6121eb5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161044c565b600080866001600160a01b031685876040516122079190612798565b60006040518083038185875af1925050503d8060008114612244576040519150601f19603f3d011682016040523d82523d6000602084013e612249565b606091505b5091509150612259828286612264565b979650505050505050565b60608315612273575081611c1f565b8251156122835782518084602001fd5b8160405162461bcd60e51b815260040161044c919061261b565b8280546122a9906127e2565b90600052602060002090601f0160209004810192826122cb5760008555612311565b82601f106122e457805160ff1916838001178555612311565b82800160010185558215612311579182015b828111156123115782518255916020019190600101906122f6565b5061231d929150612321565b5090565b5b8082111561231d5760008155600101612322565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261235d57600080fd5b813567ffffffffffffffff8082111561237857612378612336565b604051601f8301601f19908116603f011681019082821181831017156123a0576123a0612336565b816040528381528660208588010111156123b957600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000602082840312156123eb57600080fd5b813567ffffffffffffffff81111561240257600080fd5b611dbc8482850161234c565b60006020828403121561242057600080fd5b5035919050565b80356001600160a01b038116811461243e57600080fd5b919050565b6000806040838503121561245657600080fd5b823567ffffffffffffffff81111561246d57600080fd5b6124798582860161234c565b92505061248860208401612427565b90509250929050565b60005b838110156124ac578181015183820152602001612494565b838111156120995750506000910152565b600081518084526124d5816020860160208601612491565b601f01601f19169290920160200192915050565b634e487b7160e01b600052602160045260246000fd5b60006001600160a01b03808f168352808e166020840152808d166040840152508a60608301528960808301528860a08301528760c083015261018060e083015261254d6101808301886124bd565b90508561010083015284610120830152836101408301526005831061258257634e487b7160e01b600052602160045260246000fd5b826101608301529d9c50505050505050505050505050565b60008060008060008060c087890312156125b357600080fd5b6125bc87612427565b9550602087013567ffffffffffffffff8111156125d857600080fd5b6125e489828a0161234c565b9550506125f360408801612427565b935061260160608801612427565b92506080870135915060a087013590509295509295509295565b602081526000611c1f60208301846124bd565b8015158114611c1057600080fd5b6000806040838503121561264f57600080fd5b61265883612427565b915060208301356126688161262e565b809150509250929050565b60808152600061268660808301876124bd565b6020830195909552506040810192909252606090910152919050565b6000602082840312156126b457600080fd5b611c1f82612427565b600080600080608085870312156126d357600080fd5b843567ffffffffffffffff808211156126eb57600080fd5b6126f78883890161234c565b95506020870135945060408701359350606087013591508082111561271b57600080fd5b506127288782880161234c565b91505092959194509250565b6000806040838503121561274757600080fd5b823567ffffffffffffffff8082111561275f57600080fd5b61276b8683870161234c565b9350602085013591508082111561278157600080fd5b5061278e8582860161234c565b9150509250929050565b600082516127aa818460208701612491565b9190910192915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156127dd576127dd6127b4565b500190565b600181811c908216806127f657607f821691505b6020821081141561281757634e487b7160e01b600052602260045260246000fd5b50919050565b60a08152600061283060a08301886124bd565b828103602084015261284281886124bd565b6001600160a01b03968716604085015294909516606083015250608001529392505050565b60408152600061287a60408301856124bd565b90506001600160a01b03831660208301529392505050565b634e487b7160e01b600052603260045260246000fd5b600084516128ba818460208901612491565b8451908301906128ce818360208901612491565b84519101906128e1818360208801612491565b0195945050505050565b60006000198214156128ff576128ff6127b4565b5060010190565b6000808554612914816127e2565b6001828116801561292c576001811461293d5761296c565b60ff1984168752828701945061296c565b8960005260208060002060005b858110156129635781548a82015290840190820161294a565b50505082870194505b5050505084516128ce818360208901612491565b6000815461298d816127e2565b8085526020600183811680156129aa57600181146129be576129ec565b60ff198516888401526040880195506129ec565b866000528260002060005b858110156129e45781548a82018601529083019084016129c9565b890184019650505b505050505092915050565b60a081526000612a0a60a08301886124bd565b8281036020840152612a1c8188612980565b60408401969096525050606081019290925260809091015292915050565b6001600160a01b038616815260a060208201526000612a5c60a08301876124bd565b8560408401528460608401528281036080840152612a7a81856124bd565b98975050505050505050565b604081526000612a9960408301846124bd565b82810360208401526004815263444f4e4560e01b60208201526040810191505092915050565b604081526000612ad260408301856124bd565b8281036020840152612ae48185612980565b95945050505050565b634e487b7160e01b600052601260045260246000fd5b600082612b1257612b12612aed565b500490565b6000816000190483118215151615612b3157612b316127b4565b500290565b600082821015612b4857612b486127b4565b500390565b600082612b5c57612b5c612aed565b500690565b604081526000612b7460408301856124bd565b8281036020840152612ae481856124bd565b600060208284031215612b9857600080fd5b8151611c1f8161262e56fea2646970667358221220cfcea7580d40e534acd7ebd5e8d470f3f50f0dce6e8d9b8473bb26761965736264736f6c634300080b0033";

export class Validator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _gov: string,
    _maxPercentValue: BigNumberish,
    _minPercentValue: BigNumberish,
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Validator> {
    return super.deploy(
      _gov,
      _maxPercentValue,
      _minPercentValue,
      _fee,
      overrides || {}
    ) as Promise<Validator>;
  }
  getDeployTransaction(
    _gov: string,
    _maxPercentValue: BigNumberish,
    _minPercentValue: BigNumberish,
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _gov,
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
