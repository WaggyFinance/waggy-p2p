/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MerchantStorageInterface extends ethers.utils.Interface {
  functions: {
    "appealSellToken(address,address,uint256)": FunctionFragment;
    "approveBuy(address,address,uint256)": FunctionFragment;
    "cancelSellTransaction(address,address,uint256,string)": FunctionFragment;
    "cancelTransaction(address,address,uint256,string)": FunctionFragment;
    "checkSellTransactionReady(address,address,uint256)": FunctionFragment;
    "checkTransactionApproved(address,address,uint256)": FunctionFragment;
    "getAddress()": FunctionFragment;
    "getShopBalance(address)": FunctionFragment;
    "getShopLockBalance(address,address)": FunctionFragment;
    "getTotalLockBalance(address)": FunctionFragment;
    "getTransaction(address,address)": FunctionFragment;
    "getTransactionByIndex(address,address,uint256)": FunctionFragment;
    "getTransactionSuccessCount(address)": FunctionFragment;
    "getUserLockBalance(address,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "releaseSellToken(address,address,uint256)": FunctionFragment;
    "releaseToken(address,address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requestSell(address,address,uint256)": FunctionFragment;
    "setShopBalance(address,uint256)": FunctionFragment;
    "setShopLockBalance(address,address,uint256)": FunctionFragment;
    "setTotalLockBalance(address,uint256)": FunctionFragment;
    "setTransactionSuccessCount(address,uint256)": FunctionFragment;
    "setUserLockBalance(address,address,uint256)": FunctionFragment;
    "shopBalance(address)": FunctionFragment;
    "shopLockBalance(address)": FunctionFragment;
    "successTransactionCount(address)": FunctionFragment;
    "totalLockBalance(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "appealSellToken",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approveBuy",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelSellTransaction",
    values: [string, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelTransaction",
    values: [string, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "checkSellTransactionReady",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkTransactionApproved",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getShopBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getShopLockBalance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalLockBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTransaction",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTransactionByIndex",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTransactionSuccessCount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserLockBalance",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "releaseSellToken",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "releaseToken",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestSell",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setShopBalance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setShopLockBalance",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTotalLockBalance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTransactionSuccessCount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setUserLockBalance",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "shopBalance", values: [string]): string;
  encodeFunctionData(
    functionFragment: "shopLockBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "successTransactionCount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalLockBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "appealSellToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approveBuy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelSellTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkSellTransactionReady",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkTransactionApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getShopBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getShopLockBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalLockBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransactionByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransactionSuccessCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserLockBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "releaseSellToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestSell",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setShopBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setShopLockBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTotalLockBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTransactionSuccessCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUserLockBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shopBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shopLockBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "successTransactionCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalLockBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class MerchantStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MerchantStorageInterface;

  functions: {
    appealSellToken(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveBuy(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelSellTransaction(
      _seller: string,
      _buyer: string,
      _amount: BigNumberish,
      _remark: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelTransaction(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      _remark: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkSellTransactionReady(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    checkTransactionApproved(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAddress(overrides?: CallOverrides): Promise<[string]>;

    getShopBalance(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getShopLockBalance(
      _owner: string,
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalLockBalance(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTransaction(
      _owner: string,
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, BigNumber, BigNumber, BigNumber] & {
        status: BigNumber;
        amount: BigNumber;
        remark: string;
        lockAmount: BigNumber;
        createdAt: BigNumber;
        updateAt: BigNumber;
      }
    >;

    getTransactionByIndex(
      _owner: string,
      _buyer: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, BigNumber, BigNumber, BigNumber] & {
        status: BigNumber;
        amount: BigNumber;
        remark: string;
        lockAmount: BigNumber;
        createdAt: BigNumber;
        updateAt: BigNumber;
      }
    >;

    getTransactionSuccessCount(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserLockBalance(
      _owner: string,
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    releaseSellToken(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    releaseToken(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestSell(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setShopBalance(
      _owner: string,
      _balance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setShopLockBalance(
      _owner: string,
      _buyer: string,
      _balance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTotalLockBalance(
      _owner: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTransactionSuccessCount(
      _owner: string,
      _count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUserLockBalance(
      _owner: string,
      _buyer: string,
      _balance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    shopBalance(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    shopLockBalance(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    successTransactionCount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalLockBalance(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  appealSellToken(
    _owner: string,
    _buyer: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveBuy(
    _owner: string,
    _buyer: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelSellTransaction(
    _seller: string,
    _buyer: string,
    _amount: BigNumberish,
    _remark: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelTransaction(
    _owner: string,
    _buyer: string,
    _amount: BigNumberish,
    _remark: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkSellTransactionReady(
    _owner: string,
    _buyer: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  checkTransactionApproved(
    _owner: string,
    _buyer: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAddress(overrides?: CallOverrides): Promise<string>;

  getShopBalance(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  getShopLockBalance(
    _owner: string,
    _buyer: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalLockBalance(
    _owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTransaction(
    _owner: string,
    _buyer: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, BigNumber, BigNumber, BigNumber] & {
      status: BigNumber;
      amount: BigNumber;
      remark: string;
      lockAmount: BigNumber;
      createdAt: BigNumber;
      updateAt: BigNumber;
    }
  >;

  getTransactionByIndex(
    _owner: string,
    _buyer: string,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, BigNumber, BigNumber, BigNumber] & {
      status: BigNumber;
      amount: BigNumber;
      remark: string;
      lockAmount: BigNumber;
      createdAt: BigNumber;
      updateAt: BigNumber;
    }
  >;

  getTransactionSuccessCount(
    _owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserLockBalance(
    _owner: string,
    _buyer: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  releaseSellToken(
    _owner: string,
    _buyer: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  releaseToken(
    _owner: string,
    _buyer: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestSell(
    _owner: string,
    _buyer: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setShopBalance(
    _owner: string,
    _balance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setShopLockBalance(
    _owner: string,
    _buyer: string,
    _balance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTotalLockBalance(
    _owner: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTransactionSuccessCount(
    _owner: string,
    _count: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUserLockBalance(
    _owner: string,
    _buyer: string,
    _balance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  shopBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  shopLockBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  successTransactionCount(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalLockBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    appealSellToken(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    approveBuy(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelSellTransaction(
      _seller: string,
      _buyer: string,
      _amount: BigNumberish,
      _remark: string,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelTransaction(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      _remark: string,
      overrides?: CallOverrides
    ): Promise<void>;

    checkSellTransactionReady(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkTransactionApproved(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAddress(overrides?: CallOverrides): Promise<string>;

    getShopBalance(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getShopLockBalance(
      _owner: string,
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalLockBalance(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTransaction(
      _owner: string,
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, BigNumber, BigNumber, BigNumber] & {
        status: BigNumber;
        amount: BigNumber;
        remark: string;
        lockAmount: BigNumber;
        createdAt: BigNumber;
        updateAt: BigNumber;
      }
    >;

    getTransactionByIndex(
      _owner: string,
      _buyer: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, BigNumber, BigNumber, BigNumber] & {
        status: BigNumber;
        amount: BigNumber;
        remark: string;
        lockAmount: BigNumber;
        createdAt: BigNumber;
        updateAt: BigNumber;
      }
    >;

    getTransactionSuccessCount(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserLockBalance(
      _owner: string,
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    releaseSellToken(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    releaseToken(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    requestSell(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setShopBalance(
      _owner: string,
      _balance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setShopLockBalance(
      _owner: string,
      _buyer: string,
      _balance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTotalLockBalance(
      _owner: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTransactionSuccessCount(
      _owner: string,
      _count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setUserLockBalance(
      _owner: string,
      _buyer: string,
      _balance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    shopBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    shopLockBalance(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    successTransactionCount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalLockBalance(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    appealSellToken(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveBuy(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelSellTransaction(
      _seller: string,
      _buyer: string,
      _amount: BigNumberish,
      _remark: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelTransaction(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      _remark: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkSellTransactionReady(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkTransactionApproved(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getShopBalance(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getShopLockBalance(
      _owner: string,
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalLockBalance(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTransaction(
      _owner: string,
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTransactionByIndex(
      _owner: string,
      _buyer: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTransactionSuccessCount(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserLockBalance(
      _owner: string,
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    releaseSellToken(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    releaseToken(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestSell(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setShopBalance(
      _owner: string,
      _balance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setShopLockBalance(
      _owner: string,
      _buyer: string,
      _balance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTotalLockBalance(
      _owner: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTransactionSuccessCount(
      _owner: string,
      _count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUserLockBalance(
      _owner: string,
      _buyer: string,
      _balance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    shopBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    shopLockBalance(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    successTransactionCount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalLockBalance(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    appealSellToken(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveBuy(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelSellTransaction(
      _seller: string,
      _buyer: string,
      _amount: BigNumberish,
      _remark: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelTransaction(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      _remark: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkSellTransactionReady(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkTransactionApproved(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getShopBalance(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getShopLockBalance(
      _owner: string,
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalLockBalance(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTransaction(
      _owner: string,
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTransactionByIndex(
      _owner: string,
      _buyer: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTransactionSuccessCount(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserLockBalance(
      _owner: string,
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    releaseSellToken(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    releaseToken(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestSell(
      _owner: string,
      _buyer: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setShopBalance(
      _owner: string,
      _balance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setShopLockBalance(
      _owner: string,
      _buyer: string,
      _balance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTotalLockBalance(
      _owner: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTransactionSuccessCount(
      _owner: string,
      _count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUserLockBalance(
      _owner: string,
      _buyer: string,
      _balance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    shopBalance(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    shopLockBalance(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    successTransactionCount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalLockBalance(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
