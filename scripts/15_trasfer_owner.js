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
  const contractAddress = [
     ContractJSON.masterWagggy,
     ContractJSON.waggyToken,
     ContractJSON.merchantMultiToken
  ];

  const Ownable = await ethers.ContractFactory("Ownable");
  for (let index = 0; index < contractAddress.length; index++) {
     const owner = await Ownable.attach(contractAddress[index]);
     await owner.deployed();
     await owner.transferOwnership(ContractJSON.timelock);
    console.log(`${contractAddress[index]} transfer owner to ${ContractJSON.timelock} done.!`);
  }
  
  console.log("Transfer all ownership to timelock is done.");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
