// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const CHILLIFarm = await ethers.getContractFactory("CHILLIFarm");
  const ChilliToken = await ethers.getContractFactory("ChilliToken");
  const TestERC20 = await ethers.getContractFactory("TestERC20");


  // ChilliToken Params
  const developement = "0x440B7Ecbe0eB1Af96354D85573b01b6071d4437a";
  const team = "0x888f5146446Bf02A0362EeFbC31EDA2473975039";
  const uniswap = "0xb27512D6a6824b28d1a109f1b66159759772c502";
  const pancake = "0x491de9aA8478F2F349d921A85aAE802Df9889538";
  const airdrops = "0x703108FcB31d54327B268487f7C77Bc3aa45aad6";
  const bounties = "0x86f279c1fE2f13ae3803910BB82f2BF0c44ed0d8";

  // ChilliFarm Params
  const devAddr = "0x79bD6ED26F7bB3a3443DAAA635C40bAA8559f0b5";
  const chilliPerBlock = "4946100190240000000";
  const startBlock = "23917750";
  const bonusEndBlock = startBlock; // this will never change
  const lockPeriod = "31536000"; // 1 year

  // deploy test LP
  // const testLPToken = await TestERC20.deploy("TestPoolToken", "TPT", devAddr)

  const chilliFarm = await CHILLIFarm.deploy(
    devAddr,
    chilliPerBlock,
    startBlock,
    bonusEndBlock,
    lockPeriod
  );
  const chilliToken = await ChilliToken.deploy(
    developement,
    team,
    uniswap,
    pancake,
    chilliFarm.address,
    airdrops,
    bounties
  );

  // await chilliFarm.add("1000", testLPToken.address, false)
  await chilliFarm.addChilliAddress(chilliToken.address)

  console.log("🎉 Contracts Deployed")
  console.log({
    ChilliToken: chilliToken.address,
    chilliFarm: chilliFarm.address
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
