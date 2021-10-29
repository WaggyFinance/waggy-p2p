const { ethers, upgrades } = require('hardhat');
const ContractJSON = require("../contract.json");
const fs = require("fs");

async function main() {
  console.log("Start deploy");
  const [deployer,feeCollector] = await ethers.getSigners();
  // deploy merchant
  const deployMerchant = async (targetToken,merchangeName) => {
   
    console.log(`Start deploy merchant ${merchangeName} with address ${targetToken}`)
    const Merchant = await ethers.getContractFactory("Merchant");
    const merchant = await upgrades.deployProxy(Merchant,[
      targetToken,
      ContractJSON.waggyToken,
      ContractJSON.rewardCalculator,
      ContractJSON.feeCalculator,
      feeCollector.address,
      ContractJSON.blackListUser
    ])
    await merchant.deployed();
    const merchantsAddress = merchant.address;
    ContractJSON[merchangeName] = merchantsAddress;
    console.log(`Deploy merchant done. at address ${merchantsAddress}`);
  };

  const tokenData = {
    'merchantWBNB': ContractJSON.wbnbToken,
    'merchantBUSD': ContractJSON.busdToken,
    'merchantUSDT': ContractJSON.usdtToken,
    'merchantUSDC': ContractJSON.usdcToken,
    'merchantDAI': ContractJSON.daiToken
  }
  console.log("start factory merchant")
  for (const key in tokenData) {
     try {
     await deployMerchant(tokenData[key],key)
    } catch (error) {
      console.log(`Can't create merchant ${key}
      with address ${tokenData[key]}
      with error ${JSON.stringify(error,null,2)}`);
    }
  }

  console.log("Creat merchant done.");
  const jsonString = JSON.stringify(ContractJSON, null, 2);
  console.log(jsonString);
  await fs.writeFileSync("./contract.json", jsonString);
  console.log("write file done.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
