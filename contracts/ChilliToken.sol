// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.7.5;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ChilliToken is ERC20 {

    uint256 constant public multiplier = (10 ** 18);

    constructor(
        address _development,
        address _team,
        address _uniswap,
        address _pancake,
        address _farming,
        address _airdrops,
        address _bounties
        ) ERC20("Chilli Token", "CHLI") {
        _mint(_development, 192_00_000 * multiplier);
        _mint(_team, 9_600_000 * multiplier);
        _mint(_uniswap, 28_800_000 * multiplier);
        _mint(_pancake, 9_600_000 * multiplier);
        _mint(_farming, 24_000_000 * multiplier);
        _mint(_airdrops, 2_400_000 * multiplier);
        _mint(_bounties, 2_400_000 * multiplier);
    }
}