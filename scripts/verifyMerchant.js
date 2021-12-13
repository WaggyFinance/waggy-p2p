const hre = require("hardhat");
const ContractJSON = require("../contract.json");
const fs = require("fs");

async function main() {
  const [deployer, feeCollector] = await hre.ethers.getSigners();

  // verify waggy token
  //  console.log(`Start verify ${merchantAddress} with address ${targetToken}`);
  //  await hre.run("verify:verify", {
  //    address: "0x5953029e5e7c0A9eE5B251F50378742dbe8B7c21",
  //    contract: "contracts/p2p/WaggyToken.sol:WaggyToken",
  //    constructorArguments: [],
  //  });
  // verify merchant
  // console.log(`Start verify ${merchantAddress} with address ${targetToken}`);
  await hre.run("verify:verify", {
    address: "0xd6d535b4880cd57c45a976c9042a5b692b3d11a9",
    contract: "contracts/p2p/Merchant.sol:Merchant",
    constructorArguments: [],
  });

  // await hre.run("verify:verify", {
  //   address: "0x1de79d16396ec910af7671bc3d9b7e8653e8a686",
  //   contract: "contracts/p2p/WaggyToken.sol:WaggyToken",
  //   constructorArguments: [],
  // });

  

  console.log("verify merchant done.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
