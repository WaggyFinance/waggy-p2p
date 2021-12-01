// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const ContractJSON = require("../contract.json");
const fs = require("fs");
const { ethers } = require("ethers");

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
  const Validator = await hre.ethers.getContractFactory("Validator");

  const validator = await Validator.deploy(300,100,50);

  await validator.deployed();

  ContractJSON.validator = validator.address;
  console.log(`validator address: ${validator.address}`);

  await hre.run("verify:verify", {
    address: validator.address,
    contract: "contracts/Validator.sol:Validator",
    constructorArguments: [
      300,100,50
    ],
  });

  console.log("✅ Done Verify Contract");

  const jsonString = JSON.stringify(ContractJSON, null, 2);
  console.log(jsonString);
  await fs.writeFileSync("./contract.json", jsonString);
  console.log("Update file done.");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
