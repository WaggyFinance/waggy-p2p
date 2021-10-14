const hre = require("hardhat");

async function main() {
  console.log("Start deploy")
  const accounts = await hre.ethers.getSigners();
  // Waggy token
  const WaggyToken = await hre.ethers.getContractFactory("WaggyToken");
  const waggyToken = await WaggyToken.attach(
    "0xE3fE493a518e8EDe9755e54a8B0F53A1C6FEB62d"
  );
  // deploy Factory
  const P2PFactory = await hre.ethers.getContractFactory("P2PFactory");
  const p2pfactory = await P2PFactory.attach(
    "0x1a7F0446D07d346e181714Ab5EaEa3C47e77526C"
  );
  //deploy Factory storage
  const FactoryStorage = await hre.ethers.getContractFactory("FactoryStorage");
  const factoryStorage = await FactoryStorage.attach(
    "0x84b039326aD0f27A23728d73B0AeF2333A9429CE"
  );
  //   BUSD on BSC Testnet
  const BUSDAddress = "0x78F141CD27DfF98F0948CaB11EEc7281EE5b0c54";//"0x3b1F033dD955f3BE8649Cc9825A2e3E194765a3F";
  // deploy reward calculator
  const RewardCalculator = await hre.ethers.getContractFactory(
    "RewardCalculator"
  );
  const rewardCalculator = await RewardCalculator.attach(
    "0x42Be3F67227320441D4D8d42d2DE4412b2979070"
  );
  // deploy fee calculator
  const FeeCalculator = await hre.ethers.getContractFactory(
    "FeeCalculator"
  );
  const feeCalculator = await FeeCalculator.attach(
    "0xc6d72Ebe8D29f7DB1064504759442a532ad2752a"
  );
  console.log("call estimateGas.");
  // deploy merchant
  const estimateGas = await p2pfactory.estimateGas.createNewMerchant(
    BUSDAddress,
    waggyToken.address,
    rewardCalculator.address,
    feeCalculator.address,
    {
      from: accounts[0].address
    }
  );
  console.log(`estimateGas used ${estimateGas}`)
  const tx = await p2pfactory.createNewMerchant(
    BUSDAddress,
    waggyToken.address,
    rewardCalculator.address,
    feeCalculator.address,
    { from: accounts[0].address, gasLimit: estimateGas.add(200000) }
  );
  await tx.wait(1);
  const merchantsAddress = await p2pfactory.getMerchantByToken(BUSDAddress);

  const Merchant =  await hre.ethers.getContractFactory(
    "Merchant"
  );
  const merchant = await Merchant.attach(merchantsAddress)
  console.log("Merchants address : ", merchantsAddress);
  const merchantStorage = await merchant.getMerchantStorage()
  await hre.run("verify:verify", {
    address: merchantsAddress,
    constructorArguments: [
      BUSDAddress,
      waggyToken.address,
      rewardCalculator.address,
      feeCalculator.address,
      merchantStorage,
      accounts[0].address
    ],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
