const hre = require("hardhat");

async function main() {
    const accounts = await hre.ethers.getSigners();
    // Waggy token
    const WaggyToken = await hre.ethers.getContractFactory("WaggyToken");
    const waggyToken = await WaggyToken.attach("0x0c7c3ae3a2247ffc234FDD08dD6c89dC607dB10a")
  // deploy Factory 
    const P2PFactory = await hre.ethers.getContractFactory("P2PFactory");
    const p2pfactory = await P2PFactory.attach("0x82968BB437689eC178d5f07E15a5120BAC7F42A7");
  //deploy Factory storage
  const FactoryStorage = await hre.ethers.getContractFactory("FactoryStorage");
  const factoryStorage = await FactoryStorage.attach("0xc111f05B3e5B000b73ff660F7De2C2a0d4958e5b");
//   BUSD
    const BUSDAddress = "0x9788f8565abea33ae86b1526f8f839ab7aca185e";
  // deploy reward calculator 
    const RewardCalculator = await hre.ethers.getContractFactory("RewardCalculator");
    const rewardCalculator = await RewardCalculator.attach("0x2D04A26383977AC8efD0462564430DcE6389f58C");
  // deploy merchant 
    await p2pfactory.createNewMerchant(BUSDAddress,waggyToken.address,rewardCalculator.address,{from:accounts[0].address,gasLimit:8100000})
    const merchantsAddress = await factoryStorage.getMerchantsAddress();

    console.log("Merchants address : ",merchantsAddress)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });