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
  const WAGAdresss = "0xE3fE493a518e8EDe9755e54a8B0F53A1C6FEB62d";
  // Waggy token
  const MasterWaggy = await hre.ethers.getContractFactory("MasterWaggy");
  const masterWagggy = await MasterWaggy.deploy(WAGAdresss);

  await masterWagggy.deployed();

  console.log(`masterWagggy address: ${masterWagggy.address}`)
  await hre.run("verify:verify", {
    address: masterWagggy.address,
    contract: "contracts/farm/MasterWaggy.sol:MasterWaggy",
    constructorArguments: [
        WAGAdresss
    ],
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
