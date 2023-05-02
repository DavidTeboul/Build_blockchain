/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim()
const projectID = "bb85247106d04174a190328b0d196375"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/${projectID}",
      accounts: [privateKey]
    },
    mainnet: {
      url: "https://polygon-mumbai.infura.io/v3/${projectID}",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
  }
}