const hre = require("hardhat");

async function main() {
  const accounts = await hre.ethers.getSigners();
  // Waggy token
  const WaggyToken = await hre.ethers.getContractFactory("WaggyToken");
  const waggyToken = await WaggyToken.attach(
    "0xF6a8CD67654162d48EC8ec4549bd97084d0E73Aa"
  );
  // deploy Factory
  const P2PFactory = await hre.ethers.getContractFactory("P2PFactory");
  const p2pfactory = await P2PFactory.attach(
    "0x99CaDb9F8700238f7983179995683Df6F2dD2953"
  );
  //deploy Factory storage
  const FactoryStorage = await hre.ethers.getContractFactory("FactoryStorage");
  const factoryStorage = await FactoryStorage.attach(
    "0x9736D96C4cAC1Fc571e7243053AF6E6884FF885d"
  );
  //   BUSD
  const BUSDAddress = "0x9788f8565abea33ae86b1526f8f839ab7aca185e";
  // deploy reward calculator
  const RewardCalculator = await hre.ethers.getContractFactory(
    "RewardCalculator"
  );
  const rewardCalculator = await RewardCalculator.attach(
    "0xA73c8413d2054bEA9B1944A75c7F14546f4A8A9C"
  );
  // deploy fee calculator
  const FeeCalculator = await hre.ethers.getContractFactory(
    "FeeCalculator"
  );
  const feeCalculator = await FeeCalculator.attach(
    "0xeD2F8F9aE63b3eB743580834003A7B3A4Ab4f0c0"
  );
  // deploy merchant
  await p2pfactory.createNewMerchant(
    BUSDAddress,
    waggyToken.address,
    rewardCalculator.address,
    feeCalculator.address,
    { from: accounts[0].address, gasLimit: 8100000 }
  );
  const merchantsAddress = await factoryStorage.getMerchantsAddress();

  console.log("Merchants address : ", merchantsAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
