// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

// Import this file to use console.log
import "hardhat/console.sol";

contract AdamfoProtocol is ERC1155 {
    uint256 public constant MEMBER_TOKEN = 0;
    uint256 public constant CREDIT = 1;
    uint256 public constant DEPT = 2;

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
        uint256 deptPerParticipant = amount / participants.length;
        uint256 remainingDept = 0;
        uint256 creditOfParticipant = 0;
        uint256 deptOfPayer = balanceOf(payer, DEPT);

        for (uint i = 0; i < participants.length; i++) {
            require(
                balanceOf(participants[i], MEMBER_TOKEN) >= 1,
                "Participant must be member"
            );

            if (participants[i] != payer) {
                creditOfParticipant = balanceOf(participants[i], CREDIT);

                if (deptPerParticipant >= creditOfParticipant) {
                    remainingDept = deptPerParticipant - creditOfParticipant;
                    _burn(participants[i], CREDIT, creditOfParticipant);
                    _mint(participants[i], DEPT, remainingDept, "");

                    deptOfPayer = balanceOf(payer, DEPT);

                    // console.log("Dept of {}: ",)

                    if (deptOfPayer == 0) {
                        _mint(payer, CREDIT, remainingDept, "");
                    } else if (deptOfPayer < remainingDept) {
                        _burn(payer, DEPT, deptOfPayer);
                        _mint(payer, CREDIT, remainingDept - deptOfPayer, "");
                    } else {
                        _burn(payer, DEPT, creditOfParticipant);
                    }
                } else {
                    _burn(participants[i], CREDIT, deptPerParticipant);
                    _burn(payer, DEPT, deptPerParticipant);
                }
            }
        }

        emit RegisterExpense(payer, participants, amount, description);
    }

    function payBack(address member) public payable {
        require(balanceOf(member, MEMBER_TOKEN) >= 1, "Must be (for) a member");
        require(msg.value > 0, "Must pay back debt");
        // Possible extension: Overpay
        require(msg.value <= balanceOf(member, DEPT), "Cannot overpay");
        _burn(member, DEPT, msg.value);
    }
}
