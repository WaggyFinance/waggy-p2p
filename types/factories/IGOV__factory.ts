/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGOV, IGOVInterface } from "../IGOV";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_receive",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IGOV__factory {
  static readonly abi = _abi;
  static createInterface(): IGOVInterface {
    return new utils.Interface(_abi) as IGOVInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IGOV {
    return new Contract(address, _abi, signerOrProvider) as IGOV;
  }
}
