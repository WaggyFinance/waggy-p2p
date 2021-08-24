const { expect } = require("chai");

const {
    BN,           // Big Number support
    constants,    // Common constants, like the zero address and largest integers
    expectEvent,  // Assertions for emitted events
    expectRevert, // Assertions for transactions that should fail
  } = require('@openzeppelin/test-helpers');

describe("P2PFactory", function () {
    it("Should can create merchant",async ()=>{
        const [owner] = await ethers.getSigners();
        const RewardCalculator = await ethers.getContractFactory("RewardCalculator");
        const rewardCalculator = await RewardCalculator.deploy();

        const busdToken = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
        const gov = "0xce87e814755f6ac4a532ef5a7995ab7b9785605d";
        const FactoryStorage = await ethers.getContractFactory("FactoryStorage");
        const factoryStorage = await FactoryStorage.deploy();

        const P2PFactory = await ethers.getContractFactory("P2PFactory");
        const p2pFactory = await P2PFactory.deploy(factoryStorage.address);

        factoryStorage.transferOwnership(p2pFactory.address);

        const transaction = await p2pFactory.createNewMerchant(busdToken,gov,rewardCalculator.address);
        const receipt = await transaction.wait();

        expectEvent(receipt, 'NewMerchantAddress', {
            merchantAddress: '0'
          });

        const factoryStorageAddress = await p2pFactory.getFactoryStorage();
        console.log('FacetoryStorage address : ',factoryStorageAddress);
       
        expect(factoryStorageAddress).equal(factoryStorage.address);
    });
});
