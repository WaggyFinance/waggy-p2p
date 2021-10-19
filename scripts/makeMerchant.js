const hre = require("hardhat");
const ContractJSON = require("../contract.json");
const fs = require("fs");

async function main() {
  console.log("Start deploy");
  const accounts = await hre.ethers.getSigners();
  // deploy Factory
  const P2PFactory = await hre.ethers.getContractFactory("P2PFactory");
  const p2pfactory = await P2PFactory.attach(ContractJSON.p2pfactory);
  console.log(`Factory address : ${ContractJSON.p2pfactory}`);

  // deploy merchant
  const deployMerchant = async (targetToken,merchangeName) => {
    console.log(`Start deploy merchant ${merchangeName} with address ${targetToken}`)
    console.log("call estimateGas.");
    const estimateGas = await p2pfactory.estimateGas.createNewMerchant(
      targetToken,
      ContractJSON.waggyToken,
      ContractJSON.rewardCalculator,
      ContractJSON.feeCalculator,
      ContractJSON.blackListUser,
      {
        from: accounts[0].address,
      }
    );
    console.log(`estimateGas used ${estimateGas}`);
    const tx = await p2pfactory.createNewMerchant(
      targetToken,
      ContractJSON.waggyToken,
      ContractJSON.rewardCalculator,
      ContractJSON.feeCalculator,
      ContractJSON.blackListUser,
      { from: accounts[0].address, gasLimit: estimateGas.add(200000) }
    );
    await tx.wait(1);
    const merchantsAddress = await p2pfactory.getMerchantByToken(targetToken);
    const Merchant = await hre.ethers.getContractFactory("Merchant");
    ContractJSON[merchangeName] = merchantsAddress;

    const merchant = await Merchant.attach(merchantsAddress);
    console.log("Merchants address : ", merchantsAddress);
    const merchantStorage = await merchant.getMerchantStorage();
    await hre.run("verify:verify", {
      address: merchantsAddress,
      contract: "contracts/p2p/Merchant.sol:Merchant",
      constructorArguments: [
        targetToken,
        ContractJSON.waggyToken,
        ContractJSON.rewardCalculator,
        ContractJSON.feeCalculator,
        merchantStorage,
        accounts[0].address,
        ContractJSON.blackListUser,
      ],
    });
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
