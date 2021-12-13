/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MasterWaggy, MasterWaggyInterface } from "../MasterWaggy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_waggyToken",
        type: "address",
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
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
    ],
    name: "ADD_POOL",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "DEPOSIT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "DIVIDEND",
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
        name: "_rewardToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "WITHDRAW",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
    ],
    name: "addPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
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
        name: "_poolToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "distributeReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "dividend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_for",
        type: "address",
      },
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "getPendingReward",
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
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "getPoolInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "users",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "totalDeposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fund",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalValueLock",
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
        name: "_for",
        type: "address",
      },
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "getUserStakeInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "totalStaking",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "depositTime",
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
        name: "_for",
        type: "address",
      },
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "harvest",
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
      {
        internalType: "uint256",
        name: "bonusDebt",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "fundedBy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "depositTime",
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
        name: "_for",
        type: "address",
      },
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
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
  "0x608060405234801561001057600080fd5b506040516200181838038062001818833981016040819052610031916100ba565b61004161003c610066565b61006a565b600380546001600160a01b0319166001600160a01b03929092169190911790556100e8565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100cb578081fd5b81516001600160a01b03811681146100e1578182fd5b9392505050565b61172080620000f86000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806390f7416d11610097578063d914cd4b11610066578063d914cd4b146101f4578063d9caed1214610207578063f2fde38b1461021a578063fe0f3a131461022d576100f5565b806390f7416d146101a2578063918ed85a146101b5578063d1058e59146101ca578063d785b595146101d2576100f5565b806347e7ef24116100d357806347e7ef241461015f57806366cc185714610172578063715018a6146101855780638da5cb5b1461018d576100f5565b806306bfa938146100fa5780630f208beb146101265780631ec8bb8c1461014a575b600080fd5b61010d61010836600461125e565b610240565b60405161011d94939291906115a9565b60405180910390f35b610139610134366004611278565b6102d6565b60405161011d95949392919061161f565b61015d6101583660046112e5565b610319565b005b61015d61016d3660046112e5565b610557565b61015d610180366004611278565b61081d565b61015d6108ec565b610195610937565b60405161011d9190611391565b61015d6101b03660046112e5565b610946565b6101bd610b9d565b60405161011d91906115a0565b61015d610c1e565b6101e56101e0366004611278565b610c7f565b60405161011d93929190611609565b61015d61020236600461125e565b610cb7565b61015d6102153660046112aa565b610e67565b61015d61022836600461125e565b610ff2565b6101bd61023b366004611278565b611060565b6001600160a01b0381166000908152600160208181526040808420600281015493810180548351818602810186019094528084529495606095909485949291908301828280156102b957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161029b575b505050505093508060030154925080600401549150509193509193565b600260208181526000938452604080852090915291835291208054600182015492820154600383015460049093015491939290916001600160a01b039091169085565b600060016000846001600160a01b03166001600160a01b03168152602001908152602001600020905061036a60405180604001604052806006815260200165105b5bdd5b9d60d21b8152508361108e565b600281015460009061037c90426110d7565b905060005b6001830154811015610550576000600260008560010184815481106103b657634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b03908116845283820194909452604092830182208a85168352815290829020825180840190935260078352664164647265737360c81b91830191909152600381015490935061041a92166110ea565b600384015481546000916104399161043390606461112f565b9061113b565b905061047a6040518060400160405280600e81526020017f6465706f73697450657263656e740000000000000000000000000000000000008152508261108e565b600061048b6064610433898561112f565b90506104b56040518060400160405280600681526020016514995dd85c9960d21b8152508261108e565b60048301546000906104c790426110d7565b90508581106104e95760018401546104df9083611147565b6001850155610531565b60006105048261043360646104fe8b846110d7565b9061112f565b905060006105176064610433848761112f565b60018701549091506105299082611147565b600187015550505b5050426004909201919091555080610548816116b9565b915050610381565b5050505050565b6003546040516370a0823160e01b815282916001600160a01b0316906370a0823190610587903390600401611391565b60206040518083038186803b15801561059f57600080fd5b505afa1580156105b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d7919061132e565b10156105fe5760405162461bcd60e51b81526004016105f590611449565b60405180910390fd5b6001600160a01b03828116600090815260016020526040902054166106355760405162461bcd60e51b81526004016105f590611569565b6001600160a01b03821660008181526001602090815260408083203384526002835281842094845293909152902080541561067457610674338561081d565b6003546040516323b872dd60e01b81526001600160a01b03909116906323b872dd906106a8903390309088906004016113bf565b602060405180830381600087803b1580156106c257600080fd5b505af11580156106d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fa919061130e565b50426004820155805461070d9084611147565b815560038101546001600160a01b031661075a57600381018054336001600160a01b0319918216811790925560018481018054918201815560009081526020902001805490911690911790555b61079d6040518060400160405280601481526020017f75736572206465706f73697420616d6f756e7420000000000000000000000000815250826000015461108e565b60038201546107ac9084611147565b6003830181905560408051808201909152600981526803837b7b6103a3b36160bd1b60208201526107dc9161108e565b7fcb1a44561b224d34fd4423e79a3365a6f798ce94dec790e1c6cfd7610a58817e84338560405161080f939291906113bf565b60405180910390a150505050565b6001600160a01b038082166000818152600160209081526040808320948716835260028252808320938352929052908120906108598585611060565b835460405163a9059cbb60e01b81529192506001600160a01b03169063a9059cbb9061088b90889085906004016113e3565b602060405180830381600087803b1580156108a557600080fd5b505af11580156108b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108dd919061130e565b50506000600190910155505050565b6108f4611153565b6001600160a01b0316610905610937565b6001600160a01b03161461092b5760405162461bcd60e51b81526004016105f5906114c6565b6109356000611157565b565b6000546001600160a01b031690565b61094e611153565b6001600160a01b031661095f610937565b6001600160a01b0316146109855760405162461bcd60e51b81526004016105f5906114c6565b6001600160a01b0380831660009081526001602052604090819020805491516370a0823160e01b81529092849216906370a08231906109c8903390600401611391565b60206040518083038186803b1580156109e057600080fd5b505afa1580156109f4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a18919061132e565b1015610a365760405162461bcd60e51b81526004016105f590611449565b8054604051636eb1769f60e11b815283916001600160a01b03169063dd62ed3e90610a6790339030906004016113a5565b60206040518083038186803b158015610a7f57600080fd5b505afa158015610a93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab7919061132e565b1015610ac257600080fd5b80546040516323b872dd60e01b81526001600160a01b03909116906323b872dd90610af5903390309087906004016113bf565b602060405180830381600087803b158015610b0f57600080fd5b505af1158015610b23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b47919061130e565b506004810154610b579083611147565b60048201556040517f04fd893ad592f7d8380640f8dfe411562a9b0b7ed79a46c302f15be9d1fa4ff090610b90908590339086906113bf565b60405180910390a1505050565b60008060005b600454811015610c1857610c046001600060048481548110610bd557634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b031683528201929092526040019020600301548390611147565b915080610c10816116b9565b915050610ba3565b50905090565b60005b600454811015610c7c57610c6a3360048381548110610c5057634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b031661081d565b80610c74816116b9565b915050610c21565b50565b6001600160a01b0391821660009081526002602090815260408083209390941682529190915220805460018201546004909201549092565b610cbf611153565b6001600160a01b0316610cd0610937565b6001600160a01b031614610cf65760405162461bcd60e51b81526004016105f5906114c6565b6001600160a01b038116610d1c5760405162461bcd60e51b81526004016105f5906114fb565b6001600160a01b038181166000908152600160205260409020541615610d545760405162461bcd60e51b81526004016105f590611532565b6040805160a0810182526001600160a01b03838116808352606060208085018281524386880152600083870181905260808701819052938452600180835296909320855181546001600160a01b0319169516949094178455915180519195610dc293908501929101906111c8565b5060408281015160028301556060830151600383015560809092015160049182015580546001810182556000919091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b0319166001600160a01b038516179055517f3fecd974dff155a770ad874716a5cb3f4a82cb0b8f0cdc78bb0b3c0cdd292a4090610e5b908490611391565b60405180910390a15050565b6001600160a01b0382811660009081526001602052604090205416610e9e5760405162461bcd60e51b81526004016105f590611569565b6001600160a01b038083166000818152600160209081526040808320948816835260028252808320938352929052208054831115610eee5760405162461bcd60e51b81526004016105f590611449565b805415610eff57610eff858561081d565b4260048201558054610f1190846110d7565b81556003820154610f2290846110d7565b600380840191909155546040516323b872dd60e01b81526001600160a01b03909116906323b872dd90610f5d903090899088906004016113bf565b602060405180830381600087803b158015610f7757600080fd5b505af1158015610f8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610faf919061130e565b507f6208b1d2bba4a8e5fe1da0cd39addf1936ed00fe966ad21208d0429d80125d3d843385604051610fe3939291906113bf565b60405180910390a15050505050565b610ffa611153565b6001600160a01b031661100b610937565b6001600160a01b0316146110315760405162461bcd60e51b81526004016105f5906114c6565b6001600160a01b0381166110575760405162461bcd60e51b81526004016105f590611480565b610c7c81611157565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152206001015490565b6110d382826040516024016110a4929190611427565b60408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b1790526111a7565b5050565b60006110e382846116a2565b9392505050565b6110d382826040516024016111009291906113fc565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b1790526111a7565b60006110e38284611683565b60006110e38284611663565b60006110e3828461164b565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b82805482825590600052602060002090810192821561121d579160200282015b8281111561121d57825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906111e8565b5061122992915061122d565b5090565b5b80821115611229576000815560010161122e565b80356001600160a01b038116811461125957600080fd5b919050565b60006020828403121561126f578081fd5b6110e382611242565b6000806040838503121561128a578081fd5b61129383611242565b91506112a160208401611242565b90509250929050565b6000806000606084860312156112be578081fd5b6112c784611242565b92506112d560208501611242565b9150604084013590509250925092565b600080604083850312156112f7578182fd5b61130083611242565b946020939093013593505050565b60006020828403121561131f578081fd5b815180151581146110e3578182fd5b60006020828403121561133f578081fd5b5051919050565b60008151808452815b8181101561136b5760208185018101518683018201520161134f565b8181111561137c5782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b60006040825261140f6040830185611346565b90506001600160a01b03831660208301529392505050565b60006040825261143a6040830185611346565b90508260208301529392505050565b60208082526013908201527f42616c616e6365206e6f7420656e6f7567746800000000000000000000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526014908201527f4e6f7420616c6c6f772061646472657373283029000000000000000000000000604082015260600190565b60208082526012908201527f506f6f6c20616c72656164792065786973740000000000000000000000000000604082015260600190565b60208082526011908201527f506f6f6c206973206e6f74206578697374000000000000000000000000000000604082015260600190565b90815260200190565b600060808201868352602060808185015281875180845260a0860191508289019350845b818110156115f25784516001600160a01b0316835293830193918301916001016115cd565b505060408501969096525050506060015292915050565b9283526020830191909152604082015260600190565b948552602085019390935260408401919091526001600160a01b03166060830152608082015260a00190565b6000821982111561165e5761165e6116d4565b500190565b60008261167e57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561169d5761169d6116d4565b500290565b6000828210156116b4576116b46116d4565b500390565b60006000198214156116cd576116cd6116d4565b5060010190565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220d55d5587418ab7f534556d11b6754d5e32d978e51fb1e768be079927e153954664736f6c63430008000033";

export class MasterWaggy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _waggyToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MasterWaggy> {
    return super.deploy(_waggyToken, overrides || {}) as Promise<MasterWaggy>;
  }
  getDeployTransaction(
    _waggyToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_waggyToken, overrides || {});
  }
  attach(address: string): MasterWaggy {
    return super.attach(address) as MasterWaggy;
  }
  connect(signer: Signer): MasterWaggy__factory {
    return super.connect(signer) as MasterWaggy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MasterWaggyInterface {
    return new utils.Interface(_abi) as MasterWaggyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MasterWaggy {
    return new Contract(address, _abi, signerOrProvider) as MasterWaggy;
  }
}
