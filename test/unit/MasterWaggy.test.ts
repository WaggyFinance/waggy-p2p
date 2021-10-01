import chai from "chai";
import { ethers, upgrades, waffle } from "hardhat";
import { LatteNFT, LatteNFT__factory } from "../../typechain";
import { solidity } from "ethereum-waffle";
import { BigNumber, Signer } from "ethers";
import { latteNFTUnitTestFixture } from "../helpers/fixtures/LatteNFT";
import { countReset } from "console";
import exp from "constants";
import { getAddress } from "@ethersproject/address";
import { deploy } from "@openzeppelin/hardhat-upgrades/dist/utils";

chai.use(solidity);
const { expect } = chai;

describe("MasterWaggy", () => {
  // LatteNFT instances
  let latteNFT: LatteNFT;
  let latteNFTAsBob: LatteNFT;

  // Accounts
  let deployer: Signer;
  let alice: Signer;
  let bob: Signer;
  let eve: Signer;

  beforeEach(async () => {
    [deployer, alice, bob, eve] = await ethers.getSigners();
    ({ latteNFT } = await waffle.loadFixture(latteNFTUnitTestFixture));

    latteNFTAsBob = LatteNFT__factory.connect(latteNFT.address, bob);
  });
}