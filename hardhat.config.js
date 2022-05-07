/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/v1/902f512247227879673bdfb9ef9a6e3050471fb5",
      accounts: [`${process.env.PRIVATE_KEY}`],
      gasPrice: 20000000000,
      chainId: 80001
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}