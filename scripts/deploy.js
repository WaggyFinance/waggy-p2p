// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  await hre.run("compile");
  const accounts = await hre.ethers.getSigners();
  console.log(">> Start Deploy Contract");
  // Waggy token
  const WaggyToken = await hre.ethers.getContractFactory("WaggyToken");
  const waggyToken = await WaggyToken.deploy();

  await waggyToken.deployed();

  //deploy Factory storage
  const FactoryStorage = await hre.ethers.getContractFactory("FactoryStorage");
  const factoryStorage = await FactoryStorage.deploy();

  await factoryStorage.deployed();
  // deploy Factory
  const P2PFactory = await hre.ethers.getContractFactory("P2PFactory");
  const p2pfactory = await P2PFactory.deploy(
    factoryStorage.address,
    accounts[0].address
  );

  await p2pfactory.deployed();
  //
  const BUSDAddress = "0x9788f8565abea33ae86b1526f8f839ab7aca185e";
  // deploy reward calculator
  const RewardCalculator = await hre.ethers.getContractFactory(
    "RewardCalculator"
  );
  const rewardCalculator = await RewardCalculator.deploy();

  await rewardCalculator.deployed();

  // deploy fee calculator
  const FeeCalculator = await hre.ethers.getContractFactory("FeeCalculator");
  const feeCalculator = await FeeCalculator.deploy();

  await feeCalculator.deployed();
  // deploy merchant

  await factoryStorage.transferOwnership(p2pfactory.address);
  // Move to makeMerchant.js
  // await p2pfactory.createNewMerchant(BUSDAddress,waggyToken.address,rewardCalculator.address,{from:accounts[0].address,gasLimit:4100000})

  // const merchantsAddress = await factoryStorage.getMerchantsAddress();

  console.log("Waggy Token address : ", waggyToken.address);
  console.log("FactoryStorage address : ", factoryStorage.address);
  console.log("Factory address : ", p2pfactory.address);
  console.log("Reward Calculator address : ", rewardCalculator.address);
  console.log("Fee Calculator address : ", feeCalculator.address);

  console.log("✅ Done deploying a WAGGYTOKEN");
  console.log(">> Start Verify Contract");
  await hre.run("verify:verify", {
    address: waggyToken.address,
    contract: "contracts/p2p/WaggyToken.sol:WaggyToken",
    constructorArguments: [],
  });
  await hre.run("verify:verify", {
    address: factoryStorage.address,
    contract: "contracts/p2p/FactoryStorage.sol:FactoryStorage",
    constructorArguments: [],
  });
  await hre.run("verify:verify", {
    address: p2pfactory.address,
    contract: "contracts/p2p/P2PFactory.sol:P2PFactory",
    constructorArguments: [
      factoryStorage.address,
      accounts[0].address
    ],
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
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
