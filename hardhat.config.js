require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
// require("hardhat-gas-reporter");
// require('hardhat-abi-exporter');
require("hardhat-tracer");
require('@typechain/hardhat')
require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-waffle')
require("@nomiclabs/hardhat-etherscan");
// require('hardhat-contract-sizer');

// require('hardhat-docgen');
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  docgen: {
    path: './docs',
    clear: true,
    runOnCompile: true,
  },
  abiExporter: {
    path: './data/abi',
    clear: true,
    flat: true,
    spacing: 2
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      mining: {
        auto: true,
        interval: 5000
      }
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: { mnemonic: 'obey tone fragile mail pig fork fan act delay frog crumble into' },
    },
    ropsten:{
      url:'https://ropsten.infura.io/v3/d6e674a0c8044708ad1ec2d87cc2b47c',
      accounts: { mnemonic: 'obey tone fragile mail pig fork fan act delay frog crumble into' },
      gas: 2100000,
      gasPrice: 8000000000
    },
    kovan: {
      url:'https://kovan.infura.io/v3/b87b958442314159a5c79f682ccee74d',
      accounts: { mnemonic: 'obey tone fragile mail pig fork fan act delay frog crumble into' },
    },
    rinkeby: {
      url:'https://rinkeby.infura.io/v3/c606085219ca47d2acabfe5cc00395b6',
      accounts: { mnemonic: 'obey tone fragile mail pig fork fan act delay frog crumble into' },
      mining: {
        auto: true,
        interval: 1000
      }
    },
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },
  etherscan: {
    apiKey:"549MN373MW3K2D4VZXMDJTKXB8U6AM569Z" //Rinkeby
    // apiKey:"KEARCXBR66GFVV412HZRE61T92P4U5HC4K" //KOvan
    // apiKey: "Y4QFQMQATC48JSZ81VDBVR18E118EA3Y7I"//BSC Testnet
  },
  gasReporter: {
    currency: 'ETH',
    gasPrice: 21,
    enabled:true
  },
  typechain: {
    outDir: './types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
  },
  solidity: {
    version:"0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  }
};
