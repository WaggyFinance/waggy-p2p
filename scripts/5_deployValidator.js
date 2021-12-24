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

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled

  await hre.run("compile");
  const accounts = await hre.ethers.getSigners();
  // console.log(">> Start Deploy Contract");
  // // Validator token
  // const Validator = await hre.ethers.getContractFactory("Validator");
  // const validator = await Validator.deploy(
  //     20,
  //     5,
  //     20
  // );

  // await validator.setAdmin("0xE8F81573e8A77cD4ee490999d70cB5BB303861c8",true);

  // ContractJSON.validator = validator.address;
  // console.log("Creat Validator done.");
  // const jsonString = JSON.stringify(ContractJSON, null, 2);
  // console.log(jsonString);
  // await fs.writeFileSync(`./${fileName}`, jsonString);
  // console.log("write file done.");
  // console.log("Validator BUSD Token address : ", validator.address);

  // console.log("✅ Done deploying a Validator");
  // console.log(">> Start Verify Contract");
  await hre.run("verify:verify", {
    address: ContractJSON.validator,
    contract: "contracts/Validator.sol:Validator",
    constructorArguments: [
      20,
      5,
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
