// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const networkName = hre.network.name
const fileName = `${networkName}-contract.json`
const ContractJSON = require(`../${fileName}`);
const fs = require("fs");
const { ethers } = require("ethers");

async function main() {

  await hre.run("compile");
  const accounts = await hre.ethers.getSigners();
  console.log(">> Start Deploy Contract");

  const DELAY_IN_SEC = "21600";
  const Timelock = await hre.ethers.getContractFactory("Timelock");
  const timelock = await Timelock.deploy(accounts[0].address,DELAY_IN_SEC);
  await timelock.deployed();

  ContractJSON.timelock = timelock.address;
  const jsonString = JSON.stringify(ContractJSON, null, 2);
  console.log(jsonString);
  await fs.writeFileSync(`./${fileName}`, jsonString);
  console.log("Update file done.");

  await hre.run("verify:verify", {
    address: timelock.address,
    contract: "contracts/Timelock.sol:Timelock",
    constructorArguments: [accounts[0].address,DELAY_IN_SEC],
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
