import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { AdamfoPool } from "../typechain-types";

describe("AdamfoProtocol walkthrough", function () {
  let alice: SignerWithAddress,
    bob: SignerWithAddress,
    charly: SignerWithAddress,
    david: SignerWithAddress;
  let pool: AdamfoPool;

  it("Deploy", async () => {
    [alice, bob, charly, david] = await ethers.getSigners();

    const AdamfoProtocol = await ethers.getContractFactory("AdamfoProtocol");
    const deployed = await AdamfoProtocol.deploy();
    const events = (
      await (
        await deployed.createPool([alice.address, bob.address, charly.address])
      ).wait()
    ).events;

    const poolAddress = (events || []).reduce((prev, event) => {
      if (prev) return prev;
      return event.args?.childAddress;
    }, "");

    pool = (await ethers.getContractFactory("AdamfoPool")).attach(poolAddress);

    expect(await pool.balanceOf(alice.address, 0)).to.equal("1");
    expect(await pool.balanceOf(bob.address, 0)).to.equal("1");
    expect(await pool.balanceOf(charly.address, 0)).to.equal("1");

    // return { pool, owner, other };
  });

  it("Alice expense", async () => {
    await pool
      .connect(alice)
      .registerExpense(
        [alice.address, bob.address, charly.address],
        300,
        "Dinner"
      );
    expect(await pool.balanceOf(alice.address, 1)).to.equal("200");
    expect(await pool.balanceOf(bob.address, 2)).to.equal("100");
    expect(await pool.balanceOf(charly.address, 2)).to.equal("100");
  });

  it("Bob expense", async () => {
    await pool
      .connect(bob)
      .registerExpense(
        [alice.address, bob.address, charly.address],
        300,
        "Dinner"
      );
    expect(await pool.balanceOf(alice.address, 1), "Alice credit").to.equal(
      "100"
    );
    expect(await pool.balanceOf(bob.address, 1), "Bob credit").to.equal("100");
    expect(await pool.balanceOf(bob.address, 2), "Bob dept").to.equal("0");
    expect(await pool.balanceOf(charly.address, 2)).to.equal("200");
  });

  it("Can not transfer dept", async () => {
    try {
      await pool
        .connect(charly)
        .safeTransferFrom(charly.address, alice.address, 2, 100, "0x00");

      expect(false).equal(true);
    } catch (e: any) {
      expect(e.message).to.include("cannot transfer dept");
    }

    try {
      await pool
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
    await pool
      .connect(alice)
      .safeTransferFrom(alice.address, david.address, 1, 100, "0x00");
    expect(await pool.balanceOf(alice.address, 1)).to.equal("0");
    expect(await pool.balanceOf(david.address, 1)).to.equal("100");

    await pool
      .connect(david)
      .safeTransferFrom(david.address, alice.address, 1, 100, "0x00");
    expect(await pool.balanceOf(alice.address, 1)).to.equal("100");
    expect(await pool.balanceOf(david.address, 1)).to.equal("0");
  });

  it("Charly expense", async () => {
    await pool
      .connect(charly)
      .registerExpense(
        [alice.address, bob.address, charly.address],
        300,
        "Dinner"
      );
    expect(await pool.balanceOf(alice.address, 1), "Alice credit").to.equal(
      "0"
    );
    expect(await pool.balanceOf(bob.address, 1), "Bob credit").to.equal("0");
    expect(await pool.balanceOf(charly.address, 1), "Charly credit").to.equal(
      "0"
    );

    expect(await pool.balanceOf(alice.address, 2), "Alice credit").to.equal(
      "0"
    );
    expect(await pool.balanceOf(bob.address, 2), "Bob dept").to.equal("0");
    expect(await pool.balanceOf(charly.address, 2), "Charly dept").to.equal(
      "0"
    );
  });

  it("More complex example", async () => {
    await pool
      .connect(alice)
      .registerExpense(
        [alice.address, bob.address, charly.address],
        300,
        "Something"
      );
    await pool
      .connect(bob)
      .registerExpense([bob.address, charly.address], 600, "Something");
    expect(await pool.balanceOf(bob.address, 1), "Bob credit").to.equal("200");
    expect(await pool.balanceOf(charly.address, 2), "Charly debt").to.equal(
      "400"
    );
    await pool
      .connect(charly)
      .registerExpense([alice.address, charly.address], 360, "Something");
    expect(await pool.balanceOf(alice.address, 1), "Alice credit").to.equal(
      "20"
    );
    expect(await pool.balanceOf(charly.address, 2), "Charly debt").to.equal(
      "220"
    );
  });

  it("Payback and withdraw", async () => {
    await pool.connect(charly).payBack({ value: 210 });
    expect(await pool.balanceOf(charly.address, 2), "Charly debt").to.equal(
      "10"
    );

    await pool.connect(alice).withdraw("10");
    expect(await pool.balanceOf(alice.address, 1), "Alice credit").to.equal(
      "10"
    );
  });

  it("Peer 2 peer settlement", async () => {
    await pool
      .connect(alice)
      .safeTransferFrom(alice.address, charly.address, 1, 8, "0x00");

    expect(await pool.balanceOf(alice.address, 1), "Alice credit").to.equal(
      "2"
    );
    expect(await pool.balanceOf(alice.address, 2), "Alice debt").to.equal("0");
    expect(await pool.balanceOf(charly.address, 2), "Charly debt").to.equal(
      "2"
    );
    expect(await pool.balanceOf(charly.address, 1), "Charly credit").to.equal(
      "0"
    );
  });
});
