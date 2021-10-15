const { ethers } = require("hardhat");
const hre = require("hardhat");
const ContractJSON = require("../contract.json");
const fs = require("fs");

async function main() {
  const accounts = await hre.ethers.getSigners();
  // Waggy token
  const WaggyToken = await hre.ethers.getContractFactory("WaggyToken");
  const waggyToken = await WaggyToken.attach(ContractJSON.waggyToken);
  // attach MasterWaggy
  const MasterWaggy = await hre.ethers.getContractFactory("MasterWaggy");
  const masterWaggy = await MasterWaggy.attach(ContractJSON.masterWaggy);

  const WERC20 = await hre.ethers.getContractFactory("WERC20");
  const busdToken = await WERC20.attach(ContractJSON.busdToken)
  const daiToken = await WERC20.attach(ContractJSON.daiToken)
  const usdtToken = await WERC20.attach(ContractJSON.usdtToken)
  const usdcToken = await WERC20.attach(ContractJSON.usdcToken)
  const wbnbToken = await WERC20.attach(ContractJSON.wbnbToken)

  // init pool
  await masterWaggy.addPool(ContractJSON.busdToken);
  await masterWaggy.addPool(ContractJSON.daiToken);
  await masterWaggy.addPool(ContractJSON.usdtToken);
  await masterWaggy.addPool(ContractJSON.usdcToken);
  await masterWaggy.addPool(ContractJSON.wbnbToken);
  console.log("AddPool success");
  // approve token
  await waggyToken.approve(masterWaggy.address, ethers.utils.parseEther("100000000"));
  await busdToken.approve(masterWaggy.address, ethers.utils.parseEther("100000000"));
  await daiToken.approve(masterWaggy.address, ethers.utils.parseEther("100000000"));
  await usdtToken.approve(masterWaggy.address, ethers.utils.parseEther("100000000"));
  await usdcToken.approve(masterWaggy.address, ethers.utils.parseEther("100000000"));
  await wbnbToken.approve(masterWaggy.address, ethers.utils.parseEther("100000000"));

  const busdBalance = await busdToken.balanceOf(accounts[0].address);
  console.log(`BUSD Balance ${ethers.utils.formatEther(busdBalance)}`);
  const daiBalance = await daiToken.balanceOf(accounts[0].address);
  console.log(`DAI Balance ${ethers.utils.formatEther(daiBalance)}`);
  const usdtBalance = await usdtToken.balanceOf(accounts[0].address);
  console.log(`DAI Balance ${ethers.utils.formatEther(usdtBalance)}`);
  // inital deposit
  console.log("Approve success");
  await masterWaggy.deposit(busdToken.address, ethers.utils.parseEther("100"));
  await masterWaggy.deposit(daiToken.address, ethers.utils.parseEther("30"));
  await masterWaggy.deposit(usdtToken.address, ethers.utils.parseEther("9"));
  await masterWaggy.deposit(usdcToken.address, ethers.utils.parseEther("900"));
  await masterWaggy.deposit(wbnbToken.address, ethers.utils.parseEther("1350"));
  console.log("Deposit success");

  const jsonString = JSON.stringify(ContractJSON, null, 2);
  console.log(jsonString);
  await fs.writeFileSync("./contract.json", jsonString);
  console.log("Update file done.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
