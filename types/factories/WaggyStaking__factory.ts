/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WaggyStaking, WaggyStakingInterface } from "../WaggyStaking";

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
        internalType: "contract IERC20",
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
        indexed: false,
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
        indexed: false,
        internalType: "uint256",
        name: "rewardInfoLimit",
        type: "uint256",
      },
    ],
    name: "SetRewardInfoLimit",
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
        internalType: "contract IERC20",
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
        internalType: "contract IERC20",
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
        internalType: "uint256",
        name: "_campaignID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
    ],
    name: "emergencyRewardWithdraw",
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
    inputs: [],
    name: "rewardInfoLimit",
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
  "0x608060405234801561001057600080fd5b50612377806100206000396000f3fe608060405234801561001057600080fd5b50600436106101a25760003560e01c8063715018a6116100ee5780639a63bc1611610097578063cef7042d11610071578063cef7042d146103c2578063e2bbb158146103d5578063eebdced5146103e8578063f2fde38b146103f057600080fd5b80639a63bc1614610349578063bb2238ec1461035c578063c4d66de8146103af57600080fd5b80638da5cb5b116100c85780638da5cb5b146102f357806393f1a40b1461030457806398969e821461033657600080fd5b8063715018a6146102c55780637bafb029146102cd5780638d48aff0146102e057600080fd5b80634ad7ce8011610150578063569c93d21161012a578063569c93d2146102745780635d14b06f1461029f5780636806cc93146102b257600080fd5b80634ad7ce80146102395780634ae56bae146102415780635312ea8e1461026157600080fd5b80632ea807c5116101815780632ea807c514610200578063409e00fc14610213578063441a3e701461022657600080fd5b8062d74850146101a757806310f7a6af146101c35780631d123131146101eb575b600080fd5b6101b0609a5481565b6040519081526020015b60405180910390f35b6101d66101d1366004611fb8565b610403565b604080519283526020830191909152016101ba565b6101fe6101f9366004611fef565b61043f565b005b6101fe61020e366004612028565b6105dd565b6101fe610221366004612054565b610940565b6101fe610234366004611fb8565b610b7d565b6098546101b0565b6101b061024f366004612095565b60009081526097602052604090205490565b6101fe61026f366004612095565b610bd6565b609b54610287906001600160a01b031681565b6040516001600160a01b0390911681526020016101ba565b6101fe6102ad3660046120ae565b610cdb565b6101fe6102c0366004612123565b610d69565b6101fe610e17565b6101b06102db366004612028565b610e7d565b6101b06102ee366004612095565b610ec6565b6033546001600160a01b0316610287565b6101d6610312366004612140565b60996020908152600092835260408084209091529082529020805460019091015482565b6101b0610344366004612140565b610ed8565b6101b0610357366004612095565b610f0d565b61036f61036a366004612095565b610f19565b604080516001600160a01b039889168152979096166020880152948601939093526060850191909152608084015260a083015260c082015260e0016101ba565b6101fe6103bd366004612123565b610f75565b6101fe6103d0366004612095565b611012565b6101fe6103e3366004611fb8565b611069565b6101fe6111f4565b6101fe6103fe366004612123565b611261565b6097602052816000526040600020818154811061041f57600080fd5b600091825260209091206002909102018054600190910154909250905082565b6033546001600160a01b0316331461049e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b600260655414156104df5760405162461bcd60e51b815260206004820152601f60248201526000805160206123228339815191526044820152606401610495565b60026065819055506000609884815481106104fc576104fc612170565b90600052602060002090600702019050600061051e858360050154600061132c565b60068301549091506105308286611530565b11156105a45760405162461bcd60e51b815260206004820152603460248201527f57533a3a656d657267656e637952657761726457697468647261773a3a6e6f7460448201527f20656e6f7567682072657761726420746f6b656e0000000000000000000000006064820152608401610495565b60068201546105b3908561153c565b600683015560018201546105d1906001600160a01b03168486611548565b50506001606555505050565b6033546001600160a01b031633146106375760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610495565b6000838152609760205260408120609880549192918690811061065c5761065c612170565b90600052602060002090600702019050609a548280549050106106e75760405162461bcd60e51b815260206004820152603760248201527f57533a3a616464526577617264496e666f3a3a72657761726420696e666f206c60448201527f656e677468206578636565647320746865206c696d69740000000000000000006064820152608401610495565b8154158061072757508154439083906107029060019061219c565b8154811061071257610712612170565b90600052602060002090600202016000015410155b6107825760405162461bcd60e51b815260206004820152602660248201527f57533a3a616464526577617264496e666f3a3a72657761726420706572696f6460448201526508195b99195960d21b6064820152608401610495565b815415806107c1575081548490839061079d9060019061219c565b815481106107ad576107ad612170565b906000526020600020906002020160000154105b6108195760405162461bcd60e51b815260206004820152602360248201527f57533a3a616464526577617264496e666f3a3a626164206e657720656e64626c6044820152626f636b60e81b6064820152608401610495565b81546000901561085a57825483906108339060019061219c565b8154811061084357610843612170565b906000526020600020906002020160000154610860565b81600201545b9050600061086e868361153c565b9050600061087c86836115dd565b609b54600186015491925061089f916001600160a01b03908116911630846115e9565b60068401546108ae9082611530565b6006850155604080518082019091528781526020808201888152875460018181018a5560008a81529390932093516002909102909301928355519181019190915585546108fb919061219c565b60408051898152602081018990528a917fad90731bd0d97445f5af66088f3adebf343c520c20e033cc42f93b124258cdc2910160405180910390a35050505050505050565b6033546001600160a01b0316331461099a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610495565b6040805160e0810182526001600160a01b038086168252848116602083019081529282018481526060830185815260006080850181815260a0860182815260c08701838152609880546001818101835595829052985160079099027f2237a976fa961f5921fd19f2b03c925c725d77b20ce8f790c19709c03de4d814810180549a8a166001600160a01b03199b8c1617905599517f2237a976fa961f5921fd19f2b03c925c725d77b20ce8f790c19709c03de4d8158b0180549190991699169890981790965593517f2237a976fa961f5921fd19f2b03c925c725d77b20ce8f790c19709c03de4d81688015591517f2237a976fa961f5921fd19f2b03c925c725d77b20ce8f790c19709c03de4d81787015590517f2237a976fa961f5921fd19f2b03c925c725d77b20ce8f790c19709c03de4d81886015590517f2237a976fa961f5921fd19f2b03c925c725d77b20ce8f790c19709c03de4d81985015590517f2237a976fa961f5921fd19f2b03c925c725d77b20ce8f790c19709c03de4d81a9093019290925554610b2d919061219c565b604080516001600160a01b038087168252851660208201529081018390527f9b2f18f9a188a5aec4a95ee3164fe234dfbb6117628b2ad1a581939e61c69f4e9060600160405180910390a2505050565b60026065541415610bbe5760405162461bcd60e51b815260206004820152601f60248201526000805160206123228339815191526044820152606401610495565b6002606555610bcd8282611627565b50506001606555565b60026065541415610c175760405162461bcd60e51b815260206004820152601f60248201526000805160206123228339815191526044820152606401610495565b6002606581905550600060988281548110610c3457610c34612170565b60009182526020808320858452609982526040808520338652909252922080546007929092029092016005810154909350610c6f908261153c565b6005840155600080835560018301558254610c94906001600160a01b03163383611548565b604080518281526020810186905233917fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae059591015b60405180910390a2505060016065555050565b60026065541415610d1c5760405162461bcd60e51b815260206004820152601f60248201526000805160206123228339815191526044820152606401610495565b600260655560005b81811015610d5f57610d4f838383818110610d4157610d41612170565b905060200201356000611627565b610d58816121b3565b9050610d24565b5050600160655550565b6033546001600160a01b03163314610dc35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610495565b609b80546001600160a01b0319166001600160a01b0383169081179091556040519081527f860da714d66641e1bb8025e657aa279ec5bbe56385e52a9ee03a12718e5600cb9060200160405180910390a150565b6033546001600160a01b03163314610e715760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610495565b610e7b60006117b8565b565b60008184101580610e8d57508284115b15610e9a57506000610ebf565b818311610eb257610eab838561153c565b9050610ebf565b610ebc828561153c565b90505b9392505050565b6000610ed2824361180a565b92915050565b60008281526099602090815260408083206001600160a01b038516845290915281208054600190910154610ebf91859161132c565b6000610ed28243611905565b60988181548110610f2957600080fd5b600091825260209091206007909102018054600182015460028301546003840154600485015460058601546006909601546001600160a01b039586169750949093169491939092919087565b600054610100900460ff1680610f8e575060005460ff16155b610faa5760405162461bcd60e51b8152600401610495906121ce565b600054610100900460ff16158015610fcc576000805461ffff19166101011790555b610fd4611a27565b610fdc611aa2565b6034609a55609b80546001600160a01b0319166001600160a01b038416179055801561100e576000805461ff00191690555b5050565b600260655414156110535760405162461bcd60e51b815260206004820152601f60248201526000805160206123228339815191526044820152606401610495565b600260655561106181611b01565b506001606555565b600260655414156110aa5760405162461bcd60e51b815260206004820152601f60248201526000805160206123228339815191526044820152606401610495565b60026065819055506000609883815481106110c7576110c7612170565b600091825260208083208684526099825260408085203386529092529220600790910290910191506110f884611b01565b80541561115c576000611139826001015461113364e8d4a5100061112d876004015487600001546115dd90919063ffffffff16565b90611ca5565b9061153c565b9050801561115a57600183015461115a906001600160a01b03163383611548565b505b821561119c578154611179906001600160a01b03163330866115e9565b80546111859084611530565b815560058201546111969084611530565b60058301555b600482015481546111b79164e8d4a510009161112d916115dd565b6001820155604080518481526020810186905233917f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159101610cc8565b600260655414156112355760405162461bcd60e51b815260206004820152601f60248201526000805160206123228339815191526044820152606401610495565b600260655560985460005b81811015610bcd5761125181611b01565b61125a816121b3565b9050611240565b6033546001600160a01b031633146112bb5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610495565b6001600160a01b0381166113205760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610495565b611329816117b8565b50565b6000806098858154811061134257611342612170565b600091825260208083206040805160e081018252600790940290910180546001600160a01b039081168552600182015416848401526002810154848301526003810154606085015260048101546080850152600581015460a08501526006015460c084015288845260978252808420805482518185028101850190935280835293955090929091849084015b82821015611414578382906000526020600020906002020160405180604001604052908160008201548152602001600182015481525050815260200190600101906113ce565b505050509050600082608001519050826060015143118015611439575060a083015115155b1561150e57606083015160005b835181101561150b576000611479834387858151811061146857611468612170565b602002602001015160000151610e7d565b90508061148657506114fb565b84828151811061149857611498612170565b60200260200101516000015192506114f76114f08760a0015161112d64e8d4a510006114ea8a88815181106114cf576114cf612170565b602002602001015160200151876115dd90919063ffffffff16565b906115dd565b8590611530565b9350505b611504816121b3565b9050611446565b50505b6115258561113364e8d4a5100061112d8a866115dd565b979650505050505050565b6000610ebf828461222b565b6000610ebf828461219c565b6040516001600160a01b0383166024820152604481018290526115d890849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611cb1565b505050565b6000610ebf8284612243565b6040516001600160a01b03808516602483015283166044820152606481018290526116219085906323b872dd60e01b90608401611574565b50505050565b60006098838154811061163c5761163c612170565b6000918252602080832086845260998252604080852033865290925292208054600790920290920192508311156116bf5760405162461bcd60e51b815260206004820152602160248201527f57533a3a77697468647261773a3a62616420776974686472617720616d6f756e6044820152601d60fa1b6064820152608401610495565b6116c884611b01565b60006116f6826001015461113364e8d4a5100061112d876004015487600001546115dd90919063ffffffff16565b90508015611717576001830154611717906001600160a01b03163383611548565b8315611756578154611729908561153c565b82558254611741906001600160a01b03163386611548565b6005830154611750908561153c565b60058401555b600483015482546117719164e8d4a510009161112d916115dd565b6001830155604080518581526020810187905233917ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b568910160405180910390a25050505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600082815260976020908152604080832080548251818502810185019093528083528493849084015b8282101561187957838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190611833565b5050825192935050508061189257600092505050610ed2565b60005b818110156118f9578281815181106118af576118af612170565b60200260200101516000015185116118e9578281815181106118d3576118d3612170565b6020026020010151602001519350505050610ed2565b6118f2816121b3565b9050611895565b50600095945050505050565b600082815260976020908152604080832080548251818502810185019093528083528493849084015b828210156119745783829060005260206000209060020201604051806040016040529081600082015481526020016001820154815250508152602001906001019061192e565b5050825192935050508061198d57600092505050610ed2565b60005b818110156119f4578281815181106119aa576119aa612170565b60200260200101516000015185116119e4578281815181106119ce576119ce612170565b6020026020010151600001519350505050610ed2565b6119ed816121b3565b9050611990565b5081611a0160018361219c565b81518110611a1157611a11612170565b6020026020010151600001519250505092915050565b600054610100900460ff1680611a40575060005460ff16155b611a5c5760405162461bcd60e51b8152600401610495906121ce565b600054610100900460ff16158015611a7e576000805461ffff19166101011790555b611a86611d83565b611a8e611ded565b8015611329576000805461ff001916905550565b600054610100900460ff1680611abb575060005460ff16155b611ad75760405162461bcd60e51b8152600401610495906121ce565b600054610100900460ff16158015611af9576000805461ffff19166101011790555b611a8e611e4d565b600060988281548110611b1657611b16612170565b60009182526020808320858452609782526040808520805482518186028101860190935280835260079095029092019550929091849084015b82821015611b9557838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190611b4f565b50505050905081600301544311611bab57505050565b6005820154611bd057611bbe8343611905565b4311156115d857436003830155505050565b60005b8151811015611621576000611bf984600301544385858151811061146857611468612170565b905080611c065750611c95565b828281518110611c1857611c18612170565b602002602001015160000151431115611c5357828281518110611c3d57611c3d612170565b6020908102919091010151516003850155611c5a565b4360038501555b611c8e611c83856005015461112d64e8d4a510006114ea8888815181106114cf576114cf612170565b600486015490611530565b6004850155505b611c9e816121b3565b9050611bd3565b6000610ebf8284612262565b6000611d06826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611ebd9092919063ffffffff16565b8051909150156115d85780806020019051810190611d249190612284565b6115d85760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610495565b600054610100900460ff1680611d9c575060005460ff16155b611db85760405162461bcd60e51b8152600401610495906121ce565b600054610100900460ff16158015611a8e576000805461ffff19166101011790558015611329576000805461ff001916905550565b600054610100900460ff1680611e06575060005460ff16155b611e225760405162461bcd60e51b8152600401610495906121ce565b600054610100900460ff16158015611e44576000805461ffff19166101011790555b611a8e336117b8565b600054610100900460ff1680611e66575060005460ff16155b611e825760405162461bcd60e51b8152600401610495906121ce565b600054610100900460ff16158015611ea4576000805461ffff19166101011790555b60016065558015611329576000805461ff001916905550565b6060610ebc848460008585843b611f165760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610495565b600080866001600160a01b03168587604051611f3291906122d2565b60006040518083038185875af1925050503d8060008114611f6f576040519150601f19603f3d011682016040523d82523d6000602084013e611f74565b606091505b509150915061152582828660608315611f8e575081610ebf565b825115611f9e5782518084602001fd5b8160405162461bcd60e51b815260040161049591906122ee565b60008060408385031215611fcb57600080fd5b50508035926020909101359150565b6001600160a01b038116811461132957600080fd5b60008060006060848603121561200457600080fd5b8335925060208401359150604084013561201d81611fda565b809150509250925092565b60008060006060848603121561203d57600080fd5b505081359360208301359350604090920135919050565b60008060006060848603121561206957600080fd5b833561207481611fda565b9250602084013561208481611fda565b929592945050506040919091013590565b6000602082840312156120a757600080fd5b5035919050565b600080602083850312156120c157600080fd5b823567ffffffffffffffff808211156120d957600080fd5b818501915085601f8301126120ed57600080fd5b8135818111156120fc57600080fd5b8660208260051b850101111561211157600080fd5b60209290920196919550909350505050565b60006020828403121561213557600080fd5b8135610ebf81611fda565b6000806040838503121561215357600080fd5b82359150602083013561216581611fda565b809150509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000828210156121ae576121ae612186565b500390565b60006000198214156121c7576121c7612186565b5060010190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b6000821982111561223e5761223e612186565b500190565b600081600019048311821515161561225d5761225d612186565b500290565b60008261227f57634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561229657600080fd5b81518015158114610ebf57600080fd5b60005b838110156122c15781810151838201526020016122a9565b838111156116215750506000910152565b600082516122e48184602087016122a6565b9190910192915050565b602081526000825180602084015261230d8160408501602087016122a6565b601f01601f1916919091016040019291505056fe5265656e7472616e637947756172643a207265656e7472616e742063616c6c00a26469706673582212208ae961dd03b874c44c75316d61323abbb9ebbea6f71953bf183c61094ff4e48d64736f6c634300080b0033";

export class WaggyStaking__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WaggyStaking> {
    return super.deploy(overrides || {}) as Promise<WaggyStaking>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WaggyStaking {
    return super.attach(address) as WaggyStaking;
  }
  connect(signer: Signer): WaggyStaking__factory {
    return super.connect(signer) as WaggyStaking__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WaggyStakingInterface {
    return new utils.Interface(_abi) as WaggyStakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WaggyStaking {
    return new Contract(address, _abi, signerOrProvider) as WaggyStaking;
  }
}
