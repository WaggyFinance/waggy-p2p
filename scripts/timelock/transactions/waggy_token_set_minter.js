// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const networkName = hre.network.name;
const fileName = `${networkName}-contract.json`;
const ContractJSON = require(`../${fileName}`);
const { ethers } = require("ethers");

async function main() {
  await hre.run("compile");
  console.log(">> Start Deploy Contract");

  const accounts = await hre.ethers.getSigners();
  const Timelock = await hre.ethers.getContractFactory("Timelock");
  const timelock = await Timelock.attach(ContractJSON.timelock);
  await timelock.deployed();

  await timelock.queueTransaction(
    ContractJSON.waggyToken,
    '0',
    "setMinter(address[] _minters)",
    ethers.utils.defaultAbiCoder.encode(["address[]"], [[accounts[1].address]]),
    "1633331560"
  );

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
