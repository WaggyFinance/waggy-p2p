const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer, feeCollector] = await hre.ethers.getSigners();

  // verify waggy token
  //  console.log(`Start verify ${merchantAddress} with address ${targetToken}`);
  //  await hre.run("verify:verify", {
  //    address: "0x7b6f7bcf56e04a533fa736b4f34d0219575eb518",
  //    contract: "contracts/p2p/WaggyToken.sol:WaggyToken",
  //    constructorArguments: [],
  //  });
  // verify merchant
  // console.log(`Start verify ${merchantAddress} with address ${targetToken}`);
  await hre.run("verify:verify", {
    address: "0x39132f2a9b96c833f4e9a96e5d9eb99638f05862",
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
