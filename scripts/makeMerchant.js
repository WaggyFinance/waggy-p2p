const hre = require("hardhat");

async function main() {
  const accounts = await hre.ethers.getSigners();
  // Waggy token
  const WaggyToken = await hre.ethers.getContractFactory("WaggyToken");
  const waggyToken = await WaggyToken.attach(
    "0x5BdFd8D6b1A9780b1248f61732B735f9a891CD56"
  );
  // deploy Factory
  const P2PFactory = await hre.ethers.getContractFactory("P2PFactory");
  const p2pfactory = await P2PFactory.attach(
    "0xfdbcdd2f0562EDA9d111062681420D89537039AB"
  );
  //deploy Factory storage
  const FactoryStorage = await hre.ethers.getContractFactory("FactoryStorage");
  const factoryStorage = await FactoryStorage.attach(
    "0x027c9e7060e7b3493f2012BCF9dC9CEaa2982C4A"
  );
  //   BUSD on BSC Testnet
  const BUSDAddress = "0x915b0ddcefc835141d24a3eb946e5f2b22b8e705";//"0x3b1F033dD955f3BE8649Cc9825A2e3E194765a3F";
  // deploy reward calculator
  const RewardCalculator = await hre.ethers.getContractFactory(
    "RewardCalculator"
  );
  const rewardCalculator = await RewardCalculator.attach(
    "0xcb6249FC9022132BF68B55AdA019D3F500fbDfF8"
  );
  // deploy fee calculator
  const FeeCalculator = await hre.ethers.getContractFactory(
    "FeeCalculator"
  );
  const feeCalculator = await FeeCalculator.attach(
    "0x96a1795EDf53Fe7eD56c3872F0E42EA4CB88a563"
  );
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

  // const Merchant =  await hre.ethers.getContractFactory(
  //   "Merchant"
  // );
  // const merchant = await Merchant.attach(merchantsAddress)
  console.log("Merchants address : ", merchantsAddress);
  // const merchantStorage = await merchant.getMerchantStorage()
  // await hre.run("verify:verify", {
  //   address: merchantsAddress,
  //   constructorArguments: [
  //     BUSDAddress,
  //     waggyToken.address,
  //     rewardCalculator.address,
  //     feeCalculator.address,
  //     merchantStorage,
  //     accounts[0].address
  //   ],
  // });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
