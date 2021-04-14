require('dotenv').config()
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

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
  solidity: "0.7.5",

  networks: {
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA}`,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
      gas: 10000000,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA}`,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
      gas: 10000000,
    }
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.DEPLOYER_PRIVATE_KEY
  }
};

