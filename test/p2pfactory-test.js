const { expect } = require("chai");

describe("P2PFactory", function () {
    it("Should can create merchant",async ()=>{
        const RewardCalculator = await ethers.getContractFactory("RewardCalculator");
        const rewardCalculator = await RewardCalculator.deploy();

        const busdToken = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
        const gov = "0xce87e814755f6ac4a532ef5a7995ab7b9785605d";

        const P2PFactory = await ethers.getContractFactory("P2PFactory");
        const p2pFactory = await P2PFactory.deploy();
        const merchantAddress = await p2pFactory.createNewMerchant(busdToken,gov,rewardCalculator.address);

        console.log(merchantAddress.toString());
        expect(merchantAddress).not.equal(0);
    });
});
