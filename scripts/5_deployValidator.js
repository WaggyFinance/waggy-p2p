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
  // Validator token
  const Validator = await hre.ethers.getContractFactory("Validator");
  const validator = await Validator.deploy(
      30,
      10,
      20
  );

  const tx = await validator.deployed();
  // await tx.wait(1);

  await validator.setAdmin("0x727618192f7E29721cbd2a518DFc0A3B66720829",true);

  ContractJSON.validator = validator.address;
  console.log("Creat Validator done.");
  const jsonString = JSON.stringify(ContractJSON, null, 2);
  console.log(jsonString);
  await fs.writeFileSync("./contract.json", jsonString);
  console.log("write file done.");
  // console.log("Validator BUSD Token address : ", validator.address);

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
