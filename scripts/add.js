// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  // const ChilliFarm = await ethers.getContractAt("0xe51296CF6AD3Bd8187B9e6091403eF63c2C99249", "CHILLIFarm")
  // const tx = await ChilliFarm.changeLockPeriod("0")

  const accounts = await ethers.getSigners();


  const tokenArtifact = await artifacts.readArtifact("CHILLIFarm");
  const ChilliFarm = new ethers.Contract(
    "0xAbCA84324Ae1D474a4AfF630ce8F9085933C27f2", // farming address
    tokenArtifact.abi,
    accounts[0]
  );

  // 2
  // totalPoolReward


  const add = await ChilliFarm.add(
    1000000,
    "0x5d5f2aca6872be7d35ed87c972eefea7dce4b4d8",
    true
  );

  console.log(add);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
