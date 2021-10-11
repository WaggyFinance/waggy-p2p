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
const BUSD = "0x5F2A90A9Ba6D1365a9C12865371F4A619A7a43b5";
const DAI = "0x78F141CD27DfF98F0948CaB11EEc7281EE5b0c54";
const USDT = "0x2Ee5433F2029F4487239168b3BFBdC76EaF56170";
const USDC = "0x674781918eBC091d1503a063123Caeeb7e2e18Af";
const WBNB = "0xeC4506D793628DDa636D3CbEA98DAc94B83bE771";

  await hre.run("compile");
  const accounts = await hre.ethers.getSigners();
  console.log(">> Start Deploy Contract");
  // Validator token
  const Validator = await hre.ethers.getContractFactory("Validator");
  const validator = await Validator.deploy(
      30,
      10,
      20
  );

  await validator.deployed();
  
  console.log("Validator BUSD Token address : ", validator.address);

  console.log("✅ Done deploying a Validator");
  console.log(">> Start Verify Contract");
  await hre.run("verify:verify", {
    address: validator.address,
    contract: "contracts/Validator.sol:Validator",
    constructorArguments: [
        30,
        10,
        20 
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
