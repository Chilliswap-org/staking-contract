# ChilliSwap Staking Contracts

## How to Test Locally

Make sure you've [Hardhat](https://hardhat.org/) installed (Hardhat is an alternative to Truffle Suite).

**Clone the repo**
```
git clone git@bitbucket.org:osamabariphp/chilliswa-staking-contracts.git
```
**Install Dependencies**
```
npm install
```

**Start Local Hardhat Node**
```
npx hardhat node
```

**Run Tests**
```
npx hardhat test
```


npx hardhat run --network kovan scripts/deploy.js

npx hardhat verify --network kovan 0x2BcB0bFc218E998AE0912029Ba09563FE9F36546 "0x440B7Ecbe0eB1Af96354D85573b01b6071d4437a" "0x888f5146446Bf02A0362EeFbC31EDA2473975039" "0xb27512D6a6824b28d1a109f1b66159759772c502" "0x6c016421936A97CEE4FaDffa165D81AcB1C11855" "0x703108FcB31d54327B268487f7C77Bc3aa45aad6" "0x86f279c1fE2f13ae3803910BB82f2BF0c44ed0d8"


npx hardhat verify --network kovan 0x6c016421936A97CEE4FaDffa165D81AcB1C11855 "0x79bD6ED26F7bB3a3443DAAA635C40bAA8559f0b5" "4946100190240000000" "23917750" "23917750" "2592000"


 npx hardhat run --network mainnet  scripts/deploy.js


 npx hardhat verify --network mainnet 0xdf98e4306eff7e3d839f9ca54c56959e578cea04 "0x440B7Ecbe0eB1Af96354D85573b01b6071d4437a" "0x888f5146446Bf02A0362EeFbC31EDA2473975039" "0xb27512D6a6824b28d1a109f1b66159759772c502" "0x36144b7bae0821d7592e3dcb97f5cf3a5723684a" "0x703108FcB31d54327B268487f7C77Bc3aa45aad6" "0x86f279c1fE2f13ae3803910BB82f2BF0c44ed0d8"

 npx hardhat verify --network mainnet 0x36144b7bae0821d7592e3dcb97f5cf3a5723684a "0x79bD6ED26F7bB3a3443DAAA635C40bAA8559f0b5" "4946100190240000000" "12212159" "12212159" "2592000"
