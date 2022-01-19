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
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  await hre.run("compile");

  const accounts = await hre.ethers.getSigners();
  console.log(`>> Start Deploy Contract ${networkName}`);
  const GasStation = await hre.ethers.getContractFactory("GasStation");

  const gasStation = await hre.upgrades.deployProxy(GasStation,[ContractJSON.wbnbToken]);
  // const gasStation = await hre.upgrades.upgradeProxy("0x79BEe600ad712738570f48E1ac28d604c9edb15F",GasStation);

  await gasStation.deployed();

  ContractJSON.gasStation = gasStation.address;
  console.log(`gasStation address: ${gasStation.address}`);

  // await hre.run("verify:verify", {
  //   address: "0xa9649938f1bbd72fab8a5a6b4c4cf6e4c86e1e5a",
  //   contract: "contracts/farm/GasStation.sol:GasStation",
  //   constructorArguments: [],
  // });

  // console.log("✅ Done Verify Contract");

  const jsonString = JSON.stringify(ContractJSON, null, 2);
  console.log(jsonString);
  await fs.writeFileSync(`./${fileName}`, jsonString);
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
