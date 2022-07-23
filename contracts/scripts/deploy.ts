/* eslint-disable node/no-unsupported-features/es-syntax */
import fs from "fs";
import { ethers } from "hardhat";

const NETWORK_MAP: { [key: string]: string } = {
  maticmum: "mumbai",
  unknown: "localhost",
  homestead: "mainnet",
};

async function main() {
  const { name } = await ethers.provider.getNetwork();

  const chainName: string = NETWORK_MAP[name] || name;

  const AdamfoProtocol = await ethers.getContractFactory("AdamfoProtocol");
  const instance = await AdamfoProtocol.deploy();

  const addresses = fs.readFileSync(`./networks.json`).toString();

  const newAddresses = {
    ...JSON.parse(addresses),
    [chainName]: {
      AdamfoProtocol: {
        address: instance.address,
        startBlock: instance.deployTransaction.blockNumber,
      },
    },
  };

  fs.writeFileSync(`./networks.json`, JSON.stringify(newAddresses, null, 2));
  // fs.writeFileSync(
  //   `../subgraph/networks.json`,
  //   JSON.stringify(newAddresses, null, 2)
  // );
  // fs.writeFileSync(
  //   `../frontend/networks.json`,
  //   JSON.stringify(newAddresses, null, 2)
  // );

  console.log(
    "AdamfoProtocol deployed to:",
    instance.address,
    "on network:",
    chainName,
    "in block:",
    instance.deployTransaction.blockNumber
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
