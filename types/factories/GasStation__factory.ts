/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GasStation, GasStationInterface } from "../GasStation";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "campaignID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "stakingToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "rewardToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
    ],
    name: "AddCampaignInfo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "campaignID",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "phase",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardPerBlock",
        type: "uint256",
      },
    ],
    name: "AddRewardInfo",
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
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "campaign",
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
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "campaign",
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
        indexed: false,
        internalType: "address",
        name: "rewardHolder",
        type: "address",
      },
    ],
    name: "SetRewardHolder",
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
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "campaign",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract WNFT",
        name: "_stakingToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
    ],
    name: "addCampaignInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_campaignID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rewardPerBlock",
        type: "uint256",
      },
    ],
    name: "addRewardInfo",
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
    ],
    name: "campaignInfo",
    outputs: [
      {
        internalType: "contract WNFT",
        name: "stakingToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accRewardPerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalStaked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalRewards",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "campaignInfoLen",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "campaignRewardInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardPerBlock",
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
        name: "_campaignID",
        type: "uint256",
      },
    ],
    name: "currentEndBlock",
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
        name: "_campaignID",
        type: "uint256",
      },
    ],
    name: "currentRewardPerBlock",
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
        name: "_campaignID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
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
        internalType: "uint256",
        name: "_campaignID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
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
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endBlock",
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_campaignIDs",
        type: "uint256[]",
      },
    ],
    name: "harvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardHolder",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "massUpdateCampaigns",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "_campaignID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingReward",
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
    inputs: [],
    name: "rewardHolder",
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
        name: "_campaignID",
        type: "uint256",
      },
    ],
    name: "rewardInfoLen",
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
        name: "_rewardHolder",
        type: "address",
      },
    ],
    name: "setRewardHolder",
    outputs: [],
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_campaignID",
        type: "uint256",
      },
    ],
    name: "updateCampaign",
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
        name: "depositBlock",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_campaignID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
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
  "0x608060405234801561001057600080fd5b506126d0806100206000396000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c80637bafb029116100e3578063bb2238ec1161008c578063e2bbb15811610066578063e2bbb15814610408578063eebdced51461041b578063f2fde38b1461042357600080fd5b8063bb2238ec1461038f578063c4d66de8146103e2578063cef7042d146103f557600080fd5b806393f1a40b116100bd57806393f1a40b1461031157806398969e82146103695780639a63bc161461037c57600080fd5b80637bafb029146102da5780638d48aff0146102ed5780638da5cb5b1461030057600080fd5b80634ad7ce80116101455780635d14b06f1161011f5780635d14b06f146102ac5780636806cc93146102bf578063715018a6146102d257600080fd5b80634ad7ce801461024f5780634ae56bae14610261578063569c93d21461028157600080fd5b80632ea807c5116101765780632ea807c514610216578063409e00fc14610229578063441a3e701461023c57600080fd5b806310f7a6af1461019d578063150b7a02146101ca5780631f276b6e14610201575b600080fd5b6101b06101ab36600461225b565b610436565b604080519283526020830191909152015b60405180910390f35b6101e86101d83660046122a8565b630a85bd0160e11b949350505050565b6040516001600160e01b031990911681526020016101c1565b61021461020f36600461225b565b610472565b005b610214610224366004612388565b610719565b6102146102373660046123b4565b610a03565b61021461024a36600461225b565b610c40565b6098545b6040519081526020016101c1565b61025361026f3660046123f5565b60009081526097602052604090205490565b609a54610294906001600160a01b031681565b6040516001600160a01b0390911681526020016101c1565b6102146102ba36600461240e565b610cab565b6102146102cd366004612483565b610d4b565b610214610df9565b6102536102e8366004612388565b610e5f565b6102536102fb3660046123f5565b610ea8565b6033546001600160a01b0316610294565b61034e61031f3660046124a0565b609960209081526000928352604080842090915290825290206001810154600282015460039092015490919083565b604080519384526020840192909252908201526060016101c1565b6102536103773660046124a0565b610eba565b61025361038a3660046123f5565b610ef2565b6103a261039d3660046123f5565b610efe565b604080516001600160a01b039889168152979096166020880152948601939093526060850191909152608084015260a083015260c082015260e0016101c1565b6102146103f0366004612483565b610f5a565b6102146104033660046123f5565b610ff2565b61021461041636600461225b565b61105b565b61021461138b565b610214610431366004612483565b61140a565b6097602052816000526040600020818154811061045257600080fd5b600091825260209091206002909102018054600190910154909250905082565b600260655414156104ca5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026065819055506000609883815481106104e7576104e76124d0565b600091825260208083208684526099825260408085203386528352808520600790940290910180546001600160a01b03168552838352818520878652909252909220549192509060ff166105885760405162461bcd60e51b815260206004820152602260248201527f47533a3a77697468647261773a3a62616420776974686472617720746f6b656e604482015261125960f21b60648201526084016104c1565b815460405163d851fdfd60e01b8152600481018590526000916001600160a01b03169063d851fdfd906024016020604051808303816000875af11580156105d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f791906124e6565b600584015490915061060990826114d5565b6005840155600182015461061d90826114d5565b6001830181905560048401546106449164e8d4a510009161063e91906114e1565b906114ed565b600383015582546001600160a01b0390811660009081526020848152604080832088845290915290819020805460ff1916905584549051632142170760e11b8152306004820152336024820152604481018790529116906342842e0e90606401600060405180830381600087803b1580156106be57600080fd5b505af11580156106d2573d6000803e3d6000fd5b50506040518381528792503391507fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae05959060200160405180910390a350506001606555505050565b6033546001600160a01b031633146107735760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c1565b60008381526097602052604081206098805491929186908110610798576107986124d0565b600091825260209091208354600790920201915015806107ea57508154439083906107c590600190612515565b815481106107d5576107d56124d0565b90600052602060002090600202016000015410155b6108455760405162461bcd60e51b815260206004820152602660248201527f47533a3a616464526577617264496e666f3a3a72657761726420706572696f6460448201526508195b99195960d21b60648201526084016104c1565b81541580610884575081548490839061086090600190612515565b81548110610870576108706124d0565b906000526020600020906002020160000154105b6108dc5760405162461bcd60e51b815260206004820152602360248201527f47533a3a616464526577617264496e666f3a3a626164206e657720656e64626c6044820152626f636b60e81b60648201526084016104c1565b81546000901561091d57825483906108f690600190612515565b81548110610906576109066124d0565b906000526020600020906002020160000154610923565b81600201545b9050600061093186836114d5565b9050600061093f86836114e1565b609a546001860154919250610962916001600160a01b03908116911630846114f9565b6006840154610971908261157f565b6006850155604080518082019091528781526020808201888152875460018181018a5560008a81529390932093516002909102909301928355519181019190915585546109be9190612515565b60408051898152602081018990528a917fad90731bd0d97445f5af66088f3adebf343c520c20e033cc42f93b124258cdc2910160405180910390a35050505050505050565b6033546001600160a01b03163314610a5d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c1565b6040805160e0810182526001600160a01b038086168252848116602083019081529282018481526060830185815260006080850181815260a0860182815260c08701838152609880546001818101835595829052985160079099027f2237a976fa961f5921fd19f2b03c925c725d77b20ce8f790c19709c03de4d814810180549a8a166001600160a01b03199b8c1617905599517f2237a976fa961f5921fd19f2b03c925c725d77b20ce8f790c19709c03de4d8158b0180549190991699169890981790965593517f2237a976fa961f5921fd19f2b03c925c725d77b20ce8f790c19709c03de4d81688015591517f2237a976fa961f5921fd19f2b03c925c725d77b20ce8f790c19709c03de4d81787015590517f2237a976fa961f5921fd19f2b03c925c725d77b20ce8f790c19709c03de4d81886015590517f2237a976fa961f5921fd19f2b03c925c725d77b20ce8f790c19709c03de4d81985015590517f2237a976fa961f5921fd19f2b03c925c725d77b20ce8f790c19709c03de4d81a9093019290925554610bf09190612515565b604080516001600160a01b038087168252851660208201529081018390527f9b2f18f9a188a5aec4a95ee3164fe234dfbb6117628b2ad1a581939e61c69f4e9060600160405180910390a2505050565b60026065541415610c935760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104c1565b6002606555610ca2828261158b565b50506001606555565b60026065541415610cfe5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104c1565b600260655560005b81811015610d4157610d31838383818110610d2357610d236124d0565b90506020020135600061158b565b610d3a8161252c565b9050610d06565b5050600160655550565b6033546001600160a01b03163314610da55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c1565b609a80546001600160a01b0319166001600160a01b0383169081179091556040519081527f860da714d66641e1bb8025e657aa279ec5bbe56385e52a9ee03a12718e5600cb9060200160405180910390a150565b6033546001600160a01b03163314610e535760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c1565b610e5d6000611832565b565b60008184101580610e6f57508284115b15610e7c57506000610ea1565b818311610e9457610e8d83856114d5565b9050610ea1565b610e9e82856114d5565b90505b9392505050565b6000610eb48243611884565b92915050565b60008281526099602090815260408083206001600160a01b038516845290915281206001810154600390910154610ea191859161197f565b6000610eb48243611b83565b60988181548110610f0e57600080fd5b600091825260209091206007909102018054600182015460028301546003840154600485015460058601546006909601546001600160a01b039586169750949093169491939092919087565b600054610100900460ff1680610f73575060005460ff16155b610f8f5760405162461bcd60e51b81526004016104c190612547565b600054610100900460ff16158015610fb1576000805461ffff19166101011790555b610fb9611ca5565b610fc1611d20565b609a80546001600160a01b0319166001600160a01b0384161790558015610fee576000805461ff00191690555b5050565b600260655414156110455760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104c1565b600260655561105381611d7f565b506001606555565b600260655414156110ae5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104c1565b60026065819055506000609883815481106110cb576110cb6124d0565b600091825260208083208684526099825260408085203386528352808520600790940290910180546001600160a01b03168552838352818520878652909252909220549192509060ff16156111775760405162461bcd60e51b815260206004820152602c60248201527f47617353746174696f6e3a3a77697468647261773a3a546f6b656e496420616c60448201526b1c9958591e481cdd185ad95960a21b60648201526084016104c1565b61118084611d7f565b6001810154156111e15760006111be82600301546111b864e8d4a5100061063e876004015487600101546114e190919063ffffffff16565b906114d5565b905080156111df5760018301546111df906001600160a01b03163383611f24565b505b815460405163d851fdfd60e01b8152600481018590526000916001600160a01b03169063d851fdfd906024016020604051808303816000875af115801561122c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125091906124e6565b9050801561131b576001820154611267908261157f565b60018084019190915583546001600160a01b03166000908152602084815260408083208884529091529020805460ff1916909117905560058301546112ac908261157f565b60058401558254604051632142170760e11b8152336004820152306024820152604481018690526001600160a01b03909116906342842e0e90606401600060405180830381600087803b15801561130257600080fd5b505af1158015611316573d6000803e3d6000fd5b505050505b61133f64e8d4a5100061063e856004015485600101546114e190919063ffffffff16565b6003830155604080518281526020810187905233917f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a15910160405180910390a250506001606555505050565b600260655414156113de5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104c1565b600260655560985460005b81811015610ca2576113fa81611d7f565b6114038161252c565b90506113e9565b6033546001600160a01b031633146114645760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c1565b6001600160a01b0381166114c95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104c1565b6114d281611832565b50565b6000610ea18284612515565b6000610ea182846125a4565b6000610ea182846125c3565b6040516001600160a01b03808516602483015283166044820152606481018290526115799085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166001600160e01b031990931692909217909152611f54565b50505050565b6000610ea182846125e5565b6000609883815481106115a0576115a06124d0565b600091825260208083208684526099825260408085203386528352808520600790940290910180546001600160a01b03168552838352818520878652909252909220549192509060ff166116415760405162461bcd60e51b815260206004820152602260248201527f47533a3a77697468647261773a3a62616420776974686472617720746f6b656e604482015261125960f21b60648201526084016104c1565b61164a84611d7f565b600061167882600301546111b864e8d4a5100061063e876004015487600101546114e190919063ffffffff16565b90508015611699576001830154611699906001600160a01b03163383611f24565b825460405163d851fdfd60e01b8152600481018690526000916001600160a01b03169063d851fdfd906024016020604051808303816000875af11580156116e4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170891906124e6565b905080156117c657600183015461171f90826114d5565b600184015583546001600160a01b0390811660009081526020858152604080832089845290915290819020805460ff1916905585549051632142170760e11b8152306004820152336024820152604481018890529116906342842e0e90606401600060405180830381600087803b15801561179957600080fd5b505af11580156117ad573d6000803e3d6000fd5b50505060058501546117c09150826114d5565b60058501555b6117ea64e8d4a5100061063e866004015486600101546114e190919063ffffffff16565b6003840155604080518281526020810188905233917ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b568910160405180910390a2505050505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600082815260976020908152604080832080548251818502810185019093528083528493849084015b828210156118f3578382906000526020600020906002020160405180604001604052908160008201548152602001600182015481525050815260200190600101906118ad565b5050825192935050508061190c57600092505050610eb4565b60005b8181101561197357828181518110611929576119296124d0565b60200260200101516000015185116119635782818151811061194d5761194d6124d0565b6020026020010151602001519350505050610eb4565b61196c8161252c565b905061190f565b50600095945050505050565b60008060988581548110611995576119956124d0565b600091825260208083206040805160e081018252600790940290910180546001600160a01b039081168552600182015416848401526002810154848301526003810154606085015260048101546080850152600581015460a08501526006015460c084015288845260978252808420805482518185028101850190935280835293955090929091849084015b82821015611a6757838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190611a21565b505050509050600082608001519050826060015143118015611a8c575060a083015115155b15611b6157606083015160005b8351811015611b5e576000611acc8343878581518110611abb57611abb6124d0565b602002602001015160000151610e5f565b905080611ad95750611b4e565b848281518110611aeb57611aeb6124d0565b6020026020010151600001519250611b4a611b438760a0015161063e64e8d4a51000611b3d8a8881518110611b2257611b226124d0565b602002602001015160200151876114e190919063ffffffff16565b906114e1565b859061157f565b9350505b611b578161252c565b9050611a99565b50505b611b78856111b864e8d4a5100061063e8a866114e1565b979650505050505050565b600082815260976020908152604080832080548251818502810185019093528083528493849084015b82821015611bf257838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190611bac565b50508251929350505080611c0b57600092505050610eb4565b60005b81811015611c7257828181518110611c2857611c286124d0565b6020026020010151600001518511611c6257828181518110611c4c57611c4c6124d0565b6020026020010151600001519350505050610eb4565b611c6b8161252c565b9050611c0e565b5081611c7f600183612515565b81518110611c8f57611c8f6124d0565b6020026020010151600001519250505092915050565b600054610100900460ff1680611cbe575060005460ff16155b611cda5760405162461bcd60e51b81526004016104c190612547565b600054610100900460ff16158015611cfc576000805461ffff19166101011790555b611d04612026565b611d0c612090565b80156114d2576000805461ff001916905550565b600054610100900460ff1680611d39575060005460ff16155b611d555760405162461bcd60e51b81526004016104c190612547565b600054610100900460ff16158015611d77576000805461ffff19166101011790555b611d0c6120f0565b600060988281548110611d9457611d946124d0565b60009182526020808320858452609782526040808520805482518186028101860190935280835260079095029092019550929091849084015b82821015611e1357838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190611dcd565b50505050905081600301544311611e2957505050565b6005820154611e4f57611e3c8343611b83565b431115611e4a574360038301555b505050565b60005b8151811015611579576000611e78846003015443858581518110611abb57611abb6124d0565b905080611e855750611f14565b828281518110611e9757611e976124d0565b602002602001015160000151431115611ed257828281518110611ebc57611ebc6124d0565b6020908102919091010151516003850155611ed9565b4360038501555b611f0d611f02856005015461063e64e8d4a51000611b3d888881518110611b2257611b226124d0565b60048601549061157f565b6004850155505b611f1d8161252c565b9050611e52565b6040516001600160a01b038316602482015260448101829052611e4a90849063a9059cbb60e01b9060640161152d565b6000611fa9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166121609092919063ffffffff16565b805190915015611e4a5780806020019051810190611fc791906125fd565b611e4a5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016104c1565b600054610100900460ff168061203f575060005460ff16155b61205b5760405162461bcd60e51b81526004016104c190612547565b600054610100900460ff16158015611d0c576000805461ffff191661010117905580156114d2576000805461ff001916905550565b600054610100900460ff16806120a9575060005460ff16155b6120c55760405162461bcd60e51b81526004016104c190612547565b600054610100900460ff161580156120e7576000805461ffff19166101011790555b611d0c33611832565b600054610100900460ff1680612109575060005460ff16155b6121255760405162461bcd60e51b81526004016104c190612547565b600054610100900460ff16158015612147576000805461ffff19166101011790555b600160655580156114d2576000805461ff001916905550565b6060610e9e848460008585843b6121b95760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104c1565b600080866001600160a01b031685876040516121d5919061264b565b60006040518083038185875af1925050503d8060008114612212576040519150601f19603f3d011682016040523d82523d6000602084013e612217565b606091505b5091509150611b7882828660608315612231575081610ea1565b8251156122415782518084602001fd5b8160405162461bcd60e51b81526004016104c19190612667565b6000806040838503121561226e57600080fd5b50508035926020909101359150565b6001600160a01b03811681146114d257600080fd5b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156122be57600080fd5b84356122c98161227d565b935060208501356122d98161227d565b925060408501359150606085013567ffffffffffffffff808211156122fd57600080fd5b818701915087601f83011261231157600080fd5b81358181111561232357612323612292565b604051601f8201601f19908116603f0116810190838211818310171561234b5761234b612292565b816040528281528a602084870101111561236457600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060006060848603121561239d57600080fd5b505081359360208301359350604090920135919050565b6000806000606084860312156123c957600080fd5b83356123d48161227d565b925060208401356123e48161227d565b929592945050506040919091013590565b60006020828403121561240757600080fd5b5035919050565b6000806020838503121561242157600080fd5b823567ffffffffffffffff8082111561243957600080fd5b818501915085601f83011261244d57600080fd5b81358181111561245c57600080fd5b8660208260051b850101111561247157600080fd5b60209290920196919550909350505050565b60006020828403121561249557600080fd5b8135610ea18161227d565b600080604083850312156124b357600080fd5b8235915060208301356124c58161227d565b809150509250929050565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156124f857600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600082821015612527576125276124ff565b500390565b6000600019821415612540576125406124ff565b5060010190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60008160001904831182151516156125be576125be6124ff565b500290565b6000826125e057634e487b7160e01b600052601260045260246000fd5b500490565b600082198211156125f8576125f86124ff565b500190565b60006020828403121561260f57600080fd5b81518015158114610ea157600080fd5b60005b8381101561263a578181015183820152602001612622565b838111156115795750506000910152565b6000825161265d81846020870161261f565b9190910192915050565b602081526000825180602084015261268681604085016020870161261f565b601f01601f1916919091016040019291505056fea26469706673582212209c14ff801a7704d95e4294566d402edaa0783cb2d411e93d320518bfa300515864736f6c634300080b0033";

export class GasStation__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GasStation> {
    return super.deploy(overrides || {}) as Promise<GasStation>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GasStation {
    return super.attach(address) as GasStation;
  }
  connect(signer: Signer): GasStation__factory {
    return super.connect(signer) as GasStation__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GasStationInterface {
    return new utils.Interface(_abi) as GasStationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GasStation {
    return new Contract(address, _abi, signerOrProvider) as GasStation;
  }
}
