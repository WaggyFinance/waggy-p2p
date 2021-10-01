const { BigNumber, Signer } = require("ethers");
const { expect } = require("chai");
const { ethers } = require("hardhat");

const {
  BN, // Big Number support
  constants, // Common constants, like the zero address and largest integers
  expectEvent, // Assertions for emitted events
  expectRevert, // Assertions for transactions that should fail
} = require("@openzeppelin/test-helpers");


describe("Validator", () => {
  // MasterWaggy instances
  let validator;

  // Accounts
  let deployer;
  let alice;
  let bob;
  let eve;

  beforeEach(async () => {
    [deployer, alice, bob, eve] = await ethers.getSigners();

    const BUSDAddress = "0x3b1F033dD955f3BE8649Cc9825A2e3E194765a3F";
    const Validator = await ethers.getContractFactory("Validator");
    validator  = await Validator.deploy(
        BUSDAddress,
        30,
        10,
        20
    );
  });

  it("estimate gas when dividen", async()=>{
    console.log(validator.address)
  })
});