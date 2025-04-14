require("dotenv").config({ path: __dirname + "/.env.local" });
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000000,
      },
      viaIR: true
    },
  },
  mocha: {
    timeout: 90000,
  },
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
      blockGasLimit: 18800000,
      chainId: 31337,
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111,
      saveDeployments: true,
    },
    ganache: {
      url: "http://127.0.0.1:8545", // default Ganache GUI address and port
      // Or use "http://127.0.0.1:8545" for ganache-cli
      accounts: {
        mnemonic: "diamond error render alter nest side bacon truck genre theory copy fence", // Replace with your Ganache mnemonic
        count: 10, // Number of accounts to use
      },
      chainId: 1337, // Ganache default chain ID
      saveDeployments: true,
    }
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};