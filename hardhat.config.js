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
      url: `https://kovan.infura.io/v3/5cc419256e87411ead1b901cd49da146`,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
      gasPrice: 50000000000
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/ea4c45afc1204d6db90b589bb50a5d10`,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
      gasPrice: 100000000000
    }
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "3UKISCC9T58CP9D7SEDSHJ19JPG3JIIGZS"
  }
};

