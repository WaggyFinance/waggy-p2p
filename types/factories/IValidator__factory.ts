/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IValidator, IValidatorInterface } from "../IValidator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
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
];

export class IValidator__factory {
  static readonly abi = _abi;
  static createInterface(): IValidatorInterface {
    return new utils.Interface(_abi) as IValidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IValidator {
    return new Contract(address, _abi, signerOrProvider) as IValidator;
  }
}
