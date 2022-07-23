import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { AdamfoProtocol } from "../typechain-types";

describe("AdamfoProtocol", function () {
  let alice: SignerWithAddress,
    bob: SignerWithAddress,
    charly: SignerWithAddress;
  let protocol: AdamfoProtocol;

  it("Deploy", async () => {
    [alice, bob, charly] = await ethers.getSigners();

    const AdamfoProtocol = await ethers.getContractFactory("AdamfoProtocol");
    protocol = await AdamfoProtocol.deploy([
      alice.address,
      bob.address,
      charly.address,
    ]);

    expect(await protocol.balanceOf(alice.address, 0)).to.equal("1");
    expect(await protocol.balanceOf(bob.address, 0)).to.equal("1");
    expect(await protocol.balanceOf(charly.address, 0)).to.equal("1");

    // return { protocol, owner, other };
  });

  it("Register dept", async () => {
    await protocol.registerExpense(
      alice.address,
      [alice.address, bob.address, charly.address],
      9,
      "Dinner"
    );
    expect(await protocol.balanceOf(alice.address, 1)).to.equal("6");
    // expect(await protocol.balanceOf(alice.address, 1)).to.equal("6");
    // expect(await protocol.balanceOf(alice.address, 1)).to.equal("6");
  });
});
