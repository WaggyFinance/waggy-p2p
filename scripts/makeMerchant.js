const hre = require("hardhat");
const ContractJSON = require("../contract.json");
const fs = require("fs");

async function main() {
  console.log("Start deploy")
  const accounts = await hre.ethers.getSigners();
  // deploy Factory
  const P2PFactory = await hre.ethers.getContractFactory("P2PFactory");
  const p2pfactory = await P2PFactory.attach(
    ContractJSON.p2pfactory
  );
  // deploy reward calculator
  const RewardCalculator = await hre.ethers.getContractFactory(
    "RewardCalculator"
  );
  const rewardCalculator = await RewardCalculator.attach(
    ContractJSON.rewardCalculator
  );

  console.log("call estimateGas.");
  // deploy merchant
  const estimateGas = await p2pfactory.estimateGas.createNewMerchant(
    ContractJSON.busdToken,
    ContractJSON.waggyToken,
    ContractJSON.rewardCalculator,
    ContractJSON.feeCalculator,
    {
      from: accounts[0].address
    }
  );
  console.log(`estimateGas used ${estimateGas}`)
  const tx = await p2pfactory.createNewMerchant(
    BUSDAddress,
    ContractJSON.waggyToken,
    ContractJSON.rewardCalculator,
    ContractJSON.feeCalculator,
    { from: accounts[0].address, gasLimit: estimateGas.add(200000) }
  );
  await tx.wait(1);
  const merchantsAddress = await p2pfactory.getMerchantByToken(BUSDAddress);
  const Merchant =  await hre.ethers.getContractFactory(
    "Merchant"
  );
  ContractJSON.merchantBUSD = merchantsAddress;

  const merchant = await Merchant.attach(merchantsAddress)
  console.log("Merchants address : ", merchantsAddress);
  const merchantStorage = await merchant.getMerchantStorage()
  await hre.run("verify:verify", {
    address: merchantsAddress,
    constructorArguments: [
      BUSDAddress,
      ContractJSON.waggyToken,
      ContractJSON.rewardCalculator,
      ContractJSON.feeCalculator,
      merchantStorage,
      accounts[0].address
    ],
  });

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
