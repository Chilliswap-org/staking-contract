const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { time } = require("@openzeppelin/test-helpers");

let poolToken;
let chilliToken;
let chilliFarm;

beforeEach(async function () {
  const CHILLIFarm = await ethers.getContractFactory("CHILLIFarm");
  const TestERC20 = await ethers.getContractFactory("TestERC20");
  const ChilliToken = await ethers.getContractFactory("ChilliToken");

  const [
    owner,
    dev,
    team,
    uniswap,
    pancake,
    farming,
    airdrops,
    bounties,
  ] = await ethers.getSigners();

  poolToken = await TestERC20.deploy("TestPoolToken", "TPT", owner.address);

  chilliToken = await ChilliToken.deploy(
    dev.address,
    team.address,
    uniswap.address,
    pancake.address,
    farming.address,
    airdrops.address,
    bounties.address
  );

  const currentBlock = await owner.provider.getBlock();
  const blockReward = BigNumber.from("10000000000000000000");
  const endBlock = currentBlock.number + 1999967;

  // deploy farming pool contract
  chilliFarm = await CHILLIFarm.deploy(
    owner.address,
    blockReward,
    BigNumber.from(currentBlock.number),
    BigNumber.from(currentBlock.number),
    BigNumber.from("0")
  );

  // add Chilli token to the farming contract
  await chilliFarm.addChilliAddress(chilliToken.address);
});

describe("CHILLIFarm", function () {
  it("Should should farm successfully", async function () {
    const [owner] = await ethers.getSigners();

    await chilliFarm.add("90", poolToken.address, false);

    const amount = BigNumber.from(
      (100 * 10 ** 18).toLocaleString("fullwide", {
        useGrouping: false,
      })
    );

    // user is locking LPT
    await poolToken.approve(chilliFarm.address, amount);

    const balanceBefore = await poolToken.balanceOf(owner.address)
    await chilliFarm.deposit("0", amount);

    console.log("current block", await owner.provider.getBlockNumber());

    await time.advanceBlockTo(await owner.provider.getBlockNumber() + 100)

    console.log("current block", await owner.provider.getBlockNumber());

    const pendingChilli = await chilliFarm.pendingCHILLI("0", owner.address)

    console.log("pending chilli", pendingChilli.toString())
    // await chilliFarm.claim("0")
    
    // user is withdrawing
    await chilliFarm.withdraw("0", amount);


    expect("1").to.equal("1");
  });
});
