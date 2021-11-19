const { ethers, upgrades } = require("hardhat");
const ContractJSON = require("../contract.json");
const fs = require("fs");

async function main() {
  console.log("Start deploy");
  const WERC20 = await hre.ethers.getContractFactory("WERC20");
  const [deployer, feeCollector] = await ethers.getSigners();
  // deploy merchant
  const mintToken = async (address) => {
    console.log(`Start mint for address ${address}`);
    const busdToken = await WERC20.attach(ContractJSON.busdToken);
    await busdToken.mint(address, ethers.utils.parseEther("100000000"));
    console.log("log1");
    const usdtToken = await WERC20.attach(ContractJSON.usdtToken);
    await usdtToken.mint(address, ethers.utils.parseEther("100000000"));
    const usdcToken = await WERC20.attach(ContractJSON.usdcToken);
    console.log("log2");
    await usdcToken.mint(address, ethers.utils.parseEther("100000000"));
    const daiToken = await WERC20.attach(ContractJSON.daiToken);
    console.log(ContractJSON.daiToken);
    console.log("log3");
    await daiToken.mint(address, ethers.utils.parseEther("100000000"));
    const bnbToken = await WERC20.attach(ContractJSON.wbnbToken);
    await bnbToken.mint(address, ethers.utils.parseEther("100000000"));
  };

  const addressUsers = [
    //   "0xCB950adCa1d67749486D65311Aba5efdA8351bD3",
      "0x4A921631F66c066eabc36670E7411da58C2855C3", 
      "0x070F5CbD8B01eCA3992d09F837BC761fAA1d2E47",
      "0xCB950adCa1d67749486D65311Aba5efdA8351bD3"
    ];
  addressUsers.forEach(async (address) => {
    try {
      await mintToken(address);
    } catch (error) {
      console.log(`Can't mint ${address}
        with error ${JSON.stringify(error, null, 2)}`);
    }
  });

  console.log("mint done.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
