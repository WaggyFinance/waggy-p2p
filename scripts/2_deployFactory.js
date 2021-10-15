// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const ContractJSON = require("../contract.json");
const fs = require("fs");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled

  await hre.run("compile");
  const accounts = await hre.ethers.getSigners();
  console.log(">> Start Deploy Contract");
  
  //deploy Factory storage
  const FactoryStorage = await hre.ethers.getContractFactory("FactoryStorage");
  const factoryStorage = await FactoryStorage.deploy();

  await factoryStorage.deployed();
  ContractJSON.factoryStorage = factoryStorage.address;
  // deploy Factory
  const P2PFactory = await hre.ethers.getContractFactory("P2PFactory");
  const p2pfactory = await P2PFactory.deploy(factoryStorage.address, accounts[0].address);

  await p2pfactory.deployed();

  ContractJSON.p2pfactory = p2pfactory.address;

  // deploy reward calculator
  const RewardCalculator = await hre.ethers.getContractFactory("RewardCalculator");
  const rewardCalculator = await RewardCalculator.deploy();

  await rewardCalculator.deployed();

  ContractJSON.rewardCalculator = rewardCalculator.address;

  // deploy fee calculator
  const FeeCalculator = await hre.ethers.getContractFactory("FeeCalculator");
  const feeCalculator = await FeeCalculator.deploy();

  await feeCalculator.deployed();

  ContractJSON.feeCalculator = feeCalculator.address;
  // deploy merchant

  await factoryStorage.transferOwnership(p2pfactory.address);
  console.log("FactoryStorage address : ", factoryStorage.address);
  console.log("Factory address : ", p2pfactory.address);
  console.log("Reward Calculator address : ", rewardCalculator.address);
  console.log("Fee Calculator address : ", feeCalculator.address);

  console.log("✅ Done deploying a Factory");
  console.log(">> Start Verify Contract");
  await hre.run("verify:verify", {
    address: factoryStorage.address,
    contract: "contracts/p2p/FactoryStorage.sol:FactoryStorage",
    constructorArguments: [],
  });
  await hre.run("verify:verify", {
    address: p2pfactory.address,
    contract: "contracts/p2p/P2PFactory.sol:P2PFactory",
    constructorArguments: [factoryStorage.address, accounts[0].address],
  });
  await hre.run("verify:verify", {
    address: rewardCalculator.address,
    contract: "contracts/p2p/RewardCalculator.sol:RewardCalculator",
    constructorArguments: [],
  });
  await hre.run("verify:verify", {
    address: feeCalculator.address,
    contract: "contracts/p2p/FeeCalculator.sol:FeeCalculator",
    constructorArguments: [],
  });

  console.log("✅ Done Verify Contract");

  const jsonString = JSON.stringify(ContractJSON, null, 2);
  console.log(jsonString);
  await fs.writeFileSync("./contract.json", jsonString);
  console.log("write file done.")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
