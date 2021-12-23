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
const { deploy } = require("@openzeppelin/hardhat-upgrades/dist/utils");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled

  await hre.run("compile");
  const [deploer,governor] = await hre.ethers.getSigners();
  console.log(">> Start Deploy Contract",deploer.address);
  // Waggy token
  const WaggyToken = await hre.ethers.getContractFactory("WaggyToken");
  const waggyToken = await hre.upgrades.deployProxy(WaggyToken,[deploer.address,13533199,93533199]);

  await waggyToken.deployed();
  //  mock token
  const WERC20 = await hre.ethers.getContractFactory("WERC20");
  const busdToken = await WERC20.deploy("BUSD", "BUSD");
  await busdToken.deployed();
  const daiToken = await WERC20.deploy("DAI", "DAI");
  await daiToken.deployed();
  const usdtToken = await WERC20.deploy("USDT", "USDT");
  await usdtToken.deployed();
  const usdcToken = await WERC20.deploy("USDC", "USDC");
  await usdcToken.deployed();
  // const wbnbToken = await WERC20.deploy("WBNB", "WBNB");
  // await wbnbToken.deployed();

  // console.log(`BUSD token address ${busdToken.address}`);
  // console.log(`DAI token address ${daiToken.address}`);
  // console.log(`USDT token address ${usdtToken.address}`);
  // console.log(`USDC token address ${usdcToken.address}`);
  // console.log(`WBNB token address ${wbnbToken.address}`);
  // console.log(`WBNB token address ${waggyToken.address}`);

  ContractJSON.busdToken = busdToken.address;
  ContractJSON.daiToken = daiToken.address;
  ContractJSON.usdtToken = usdtToken.address;
  ContractJSON.usdcToken = usdcToken.address;
  ContractJSON.wbnbToken = "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd";//wbnb testnet
  ContractJSON.waggyToken = waggyToken.address;

  console.log("✅ Done deploying a WAGGYTOKEN");
  console.log(">> Start Verify Contract");

  const jsonString = JSON.stringify(ContractJSON, null, 2);
  console.log(jsonString);
  await fs.writeFileSync(`./${fileName}`, jsonString);
  console.log("write file done.");
//  Call merchant verify to verify waggy token.
  await hre.run("verify:verify", {
    address: busdToken.address,
    contract: "contracts/p2p/WERC20.sol:WERC20",
    constructorArguments: ["BUSD", "BUSD"],
  });
  await hre.run("verify:verify", {
    address: daiToken.address,
    contract: "contracts/p2p/WERC20.sol:WERC20",
    constructorArguments: ["DAI", "DAI"],
  });
  await hre.run("verify:verify", {
    address: usdtToken.address,
    contract: "contracts/p2p/WERC20.sol:WERC20",
    constructorArguments: ["USDT", "USDT"],
  });
  await hre.run("verify:verify", {
    address: usdcToken.address,
    contract: "contracts/p2p/WERC20.sol:WERC20",
    constructorArguments: ["USDC", "USDC"],
  });
  // await hre.run("verify:verify", {
  //   address: wbnbToken.address,
  //   contract: "contracts/p2p/WERC20.sol:WERC20",
  //   constructorArguments: ["WBNB", "WBNB"],
  // });
  
  // console.log("✅ Done Verify Contract");

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
