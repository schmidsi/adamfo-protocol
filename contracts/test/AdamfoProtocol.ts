import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { AdamfoProtocol } from "../typechain-types";

describe("AdamfoProtocol walkthrough", function () {
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

  it("Alice expense", async () => {
    await protocol.registerExpense(
      alice.address,
      [alice.address, bob.address, charly.address],
      300,
      "Dinner"
    );
    expect(await protocol.balanceOf(alice.address, 1)).to.equal("200");
    expect(await protocol.balanceOf(bob.address, 2)).to.equal("100");
    expect(await protocol.balanceOf(charly.address, 2)).to.equal("100");
  });

  it("Bob expense", async () => {
    await protocol.registerExpense(
      bob.address,
      [alice.address, bob.address, charly.address],
      300,
      "Dinner"
    );
    expect(await protocol.balanceOf(alice.address, 1), "Alice credit").to.equal(
      "100"
    );
    expect(await protocol.balanceOf(bob.address, 1), "Bob credit").to.equal(
      "100"
    );
    expect(await protocol.balanceOf(bob.address, 2), "Bob dept").to.equal("0");
    expect(await protocol.balanceOf(charly.address, 2)).to.equal("200");
  });

  it("Charly expense", async () => {
    await protocol.registerExpense(
      charly.address,
      [alice.address, bob.address, charly.address],
      300,
      "Dinner"
    );
    expect(await protocol.balanceOf(alice.address, 1), "Alice credit").to.equal(
      "0"
    );
    expect(await protocol.balanceOf(bob.address, 1), "Bob credit").to.equal(
      "0"
    );
    expect(
      await protocol.balanceOf(charly.address, 1),
      "Charly credit"
    ).to.equal("0");

    expect(await protocol.balanceOf(alice.address, 2), "Alice credit").to.equal(
      "0"
    );
    expect(await protocol.balanceOf(bob.address, 2), "Bob dept").to.equal("0");
    expect(await protocol.balanceOf(charly.address, 2), "Charly dept").to.equal(
      "0"
    );
  });
});
