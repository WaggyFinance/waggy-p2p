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
  // Waggy token
  const WaggyToken = await hre.ethers.getContractFactory("WaggyToken");
  const waggyToken = await WaggyToken.deploy();

  await waggyToken.deployed();
  //  mock token
  const WERC20 = await hre.ethers.getContractFactory("WERC20");
  const busdToken = await WERC20.deploy("BUSD", "BUSD");
  await busdToken.deployed();
  const daiToken = await WERC20.deploy("DAI", "DAI");
  await daiToken.deployed();
  const usdtToken = await WERC20.deploy("USDT", "USDT");
  await usdtToken.deployed();
  const usdcToken = await WERC20.deploy("USDC", "USDC");
  await usdcToken.deployed();
  const wbnbToken = await WERC20.deploy("WBNB", "WBNB");
  await wbnbToken.deployed();

  console.log(`BUSD token address ${busdToken.address}`);
  console.log(`DAI token address ${daiToken.address}`);
  console.log(`USDT token address ${usdtToken.address}`);
  console.log(`USDC token address ${usdcToken.address}`);
  console.log(`WBNB token address ${wbnbToken.address}`);

  ContractJSON.busdToken = busdToken.address;
  ContractJSON.daiToken = daiToken.address;
  ContractJSON.usdtToken = usdtToken.address;
  ContractJSON.usdcToken = usdcToken.address;
  ContractJSON.wbnbToken = wbnbToken.address;
  ContractJSON.waggyToken = waggyToken.address;

  console.log("✅ Done deploying a WAGGYTOKEN");
  console.log(">> Start Verify Contract");
  await hre.run("verify:verify", {
    address: waggyToken.address,
    contract: "contracts/p2p/WaggyToken.sol:WaggyToken",
    constructorArguments: [],
  });
  await hre.run("verify:verify", {
    address: busdToken.address,
    contract: "contracts/p2p/WERC20.sol:WERC20",
    constructorArguments: ["BUSD", "BUSD"],
  });
  await hre.run("verify:verify", {
    address: busdToken.address,
    contract: "contracts/p2p/WERC20.sol:WERC20",
    constructorArguments: ["DAI", "DAI"],
  });
  await hre.run("verify:verify", {
    address: busdToken.address,
    contract: "contracts/p2p/WERC20.sol:WERC20",
    constructorArguments: ["USDT", "USDT"],
  });
  await hre.run("verify:verify", {
    address: busdToken.address,
    contract: "contracts/p2p/WERC20.sol:WERC20",
    constructorArguments: ["USDC", "USDC"],
  });
  await hre.run("verify:verify", {
    address: busdToken.address,
    contract: "contracts/p2p/WERC20.sol:WERC20",
    constructorArguments: ["WBNB", "WBNB"],
  });
  

  console.log("✅ Done Verify Contract");

  const jsonString = JSON.stringify(ContractJSON, null, 2);
  console.log(jsonString);
  await fs.writeFileSync("./contract.json", jsonString);
  console.log("write file done.");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
