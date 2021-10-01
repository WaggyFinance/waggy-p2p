const { BigNumber, Signer } = require("ethers");
const { expect } = require("chai");
const { ethers } = require("hardhat");

const {
  BN, // Big Number support
  constants, // Common constants, like the zero address and largest integers
  expectEvent, // Assertions for emitted events
  expectRevert, // Assertions for transactions that should fail
} = require("@openzeppelin/test-helpers");


describe("MasterWaggy", () => {
  // MasterWaggy instances
  let masterWagggy;
  let waggyToken;

  // Accounts
  let deployer;
  let alice;
  let bob;
  let eve;
  const BUSDAddress = "0x3b1F033dD955f3BE8649Cc9825A2e3E194765a3F";

  beforeEach(async () => {
    [deployer, alice, bob, eve] = await ethers.getSigners();

    const WaggyToken = await ethers.getContractFactory("WaggyToken");
    waggyToken = await WaggyToken.deploy();

    const MasterWaggy = await ethers.getContractFactory("MasterWaggy");
    masterWagggy = await MasterWaggy.deploy(waggyToken.address);
  });

  it("add pool" ,async()=>{
    await masterWagggy.addPool(BUSDAddress);
    const {lastRewardBlock,users,totalDeposit,fund} = await masterWagggy.getPoolInfo(BUSDAddress);
    console.log(ethers.utils.pa lastRewardBlock)
    console.log(users)
    console.log(totalDeposit)
    console.log(fund)
  })
});