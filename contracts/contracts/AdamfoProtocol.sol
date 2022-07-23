// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

// Import this file to use console.log
import "hardhat/console.sol";

contract AdamfoProtocol is ERC1155 {
    uint256 public constant MEMBER_TOKEN = 0;
    uint256 public constant CREDIT = 1;

    mapping(address => uint256) public dept;

    event RegisterExpense(
        address lender,
        address[] participants,
        uint256 amount,
        string description
    );

    // The rest are NFTs

    constructor(address[] memory members)
        ERC1155("https://adamfo.xyz/api/item/{id}.json")
    {
        for (uint i = 0; i < members.length; i++) {
            _mint(members[i], MEMBER_TOKEN, 1, "");
        }
    }

    function registerExpense(
        address payer,
        address[] memory participants,
        uint256 amount,
        string memory description
    ) public {
        require(balanceOf(payer, MEMBER_TOKEN) >= 1, "Payer must be member");
        require(participants.length >= 1, "Participants must be at least one");

        // TODO: Check if this is an unsafe math operation
        uint256 deptPerBorrower = amount / participants.length;
        uint256 remainingDept = 0;
        uint256 creditOfParticipant = 0;

        for (uint i = 0; i < participants.length; i++) {
            require(
                balanceOf(participants[i], MEMBER_TOKEN) >= 1,
                "Participant must be member"
            );

            if (participants[i] != payer) {
                creditOfParticipant = balanceOf(participants[i], CREDIT);

                if (deptPerBorrower >= creditOfParticipant) {
                    remainingDept = deptPerBorrower - creditOfParticipant;
                    _burn(participants[i], CREDIT, creditOfParticipant);
                    _mint(payer, CREDIT, remainingDept, "");
                    dept[participants[i]] =
                        dept[participants[i]] +
                        remainingDept;
                } else {
                    _burn(participants[i], CREDIT, deptPerBorrower);
                }
            }
        }

        emit RegisterExpense(payer, participants, amount, description);
    }

    function payBack(address member) public payable {
        require(balanceOf(member, MEMBER_TOKEN) >= 1, "Must be (for) a member");
        require(msg.value > 0, "Must pay back debt");
        dept[member] = dept[member] - msg.value;
    }
}
