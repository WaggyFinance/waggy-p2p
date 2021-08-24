const hre = require("hardhat");

async function main() {
    // Waggy token
    const WaggyToken = await hre.ethers.getContractFactory("WaggyToken");
    const waggyToken = await WaggyToken.attach("0xDD7f780DE4e6BEe14E0c18599Fe09bB2D9Dd0BFf")
  // deploy Factory 
    const P2PFactory = await hre.ethers.getContractFactory("P2PFactory");
    const p2pfactory = await P2PFactory.attach("0xD5d0B76D0dBdA37b25662D699F294aED1a6dAC38");
  //   
    const BUSDAddress = "0x9788f8565abea33ae86b1526f8f839ab7aca185e";
  // deploy reward calculator 
    const RewardCalculator = await hre.ethers.getContractFactory("RewardCalculator");
    const rewardCalculator = await RewardCalculator.attach("0x82F80081278Dc72fb05546329b1ac7AE988e5A76");
  // deploy merchant 
  
    await factoryStorage.transferOwnership(p2pfactory.address);
  
    await p2pfactory.createNewMerchant(BUSDAddress,waggyToken.address,rewardCalculator.address)
  
    const merchantsAddress = await factoryStorage.getMerchantsAddress();

    console.log("Merchants address : ",merchantsAddress.toString())
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });