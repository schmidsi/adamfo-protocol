import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { AdamfoProtocol } from "../typechain-types";
import { isGeneratorFunction } from "util/types";

describe("AdamfoProtocol walkthrough", function () {
  let alice: SignerWithAddress,
    bob: SignerWithAddress,
    charly: SignerWithAddress,
    david: SignerWithAddress;
  let protocol: AdamfoProtocol;

  it("Deploy", async () => {
    [alice, bob, charly, david] = await ethers.getSigners();

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
    await protocol
      .connect(alice)
      .registerExpense(
        [alice.address, bob.address, charly.address],
        300,
        "Dinner"
      );
    expect(await protocol.balanceOf(alice.address, 1)).to.equal("200");
    expect(await protocol.balanceOf(bob.address, 2)).to.equal("100");
    expect(await protocol.balanceOf(charly.address, 2)).to.equal("100");
  });

  it("Bob expense", async () => {
    await protocol
      .connect(bob)
      .registerExpense(
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

  it("Can not transfer dept", async () => {
    try {
      await protocol
        .connect(charly)
        .safeTransferFrom(charly.address, alice.address, 2, 100, "0x00");

      expect(false).equal(true);
    } catch (e: any) {
      expect(e.message).to.include("cannot transfer dept");
    }

    try {
      await protocol
        .connect(charly)
        .safeBatchTransferFrom(
          charly.address,
          alice.address,
          [2],
          [100],
          "0x00"
        );

      expect(false).equal(true);
    } catch (e: any) {
      expect(e.message).to.include("cannot transfer dept");
    }
  });

  it("Can transfer credit", async () => {
    await protocol
      .connect(alice)
      .safeTransferFrom(alice.address, david.address, 1, 100, "0x00");
    expect(await protocol.balanceOf(alice.address, 1)).to.equal("0");
    expect(await protocol.balanceOf(david.address, 1)).to.equal("100");

    await protocol
      .connect(david)
      .safeTransferFrom(david.address, alice.address, 1, 100, "0x00");
    expect(await protocol.balanceOf(alice.address, 1)).to.equal("100");
    expect(await protocol.balanceOf(david.address, 1)).to.equal("0");
  });

  it("Charly expense", async () => {
    await protocol
      .connect(charly)
      .registerExpense(
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

  it("More complex example", async () => {
    await protocol
      .connect(alice)
      .registerExpense(
        [alice.address, bob.address, charly.address],
        300,
        "Something"
      );
    await protocol
      .connect(bob)
      .registerExpense([bob.address, charly.address], 600, "Something");
    expect(await protocol.balanceOf(bob.address, 1), "Bob credit").to.equal(
      "200"
    );
    expect(await protocol.balanceOf(charly.address, 2), "Charly debt").to.equal(
      "400"
    );
    await protocol
      .connect(charly)
      .registerExpense([alice.address, charly.address], 360, "Something");
    expect(await protocol.balanceOf(alice.address, 1), "Alice credit").to.equal(
      "20"
    );
    expect(await protocol.balanceOf(charly.address, 2), "Charly debt").to.equal(
      "220"
    );
  });

  it("Payback and withdraw", async () => {
    await protocol.connect(charly).payBack({ value: 210 });
    expect(await protocol.balanceOf(charly.address, 2), "Charly debt").to.equal(
      "10"
    );

    await protocol.connect(alice).withdraw("10");
    expect(await protocol.balanceOf(alice.address, 1), "Alice credit").to.equal(
      "10"
    );
  });

  it("Peer 2 peer settlement", async () => {
    await protocol
      .connect(alice)
      .safeTransferFrom(alice.address, charly.address, 1, 8, "0x00");

    expect(await protocol.balanceOf(alice.address, 1), "Alice credit").to.equal(
      "2"
    );
    expect(await protocol.balanceOf(alice.address, 2), "Alice debt").to.equal(
      "0"
    );
    expect(await protocol.balanceOf(charly.address, 2), "Charly debt").to.equal(
      "2"
    );
    expect(
      await protocol.balanceOf(charly.address, 1),
      "Charly credit"
    ).to.equal("0");
  });
});
