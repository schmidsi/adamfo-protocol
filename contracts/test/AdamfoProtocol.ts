import { ethers } from "hardhat";

describe("AdamfoProtocol", function () {
  it("Should deploy", async () => {
    const [owner, other] = await ethers.getSigners();

    const AdamfoProtocol = await ethers.getContractFactory("AdamfoProtocol");
    const protocol = await AdamfoProtocol.deploy();

    // return { protocol, owner, other };
  });
});
