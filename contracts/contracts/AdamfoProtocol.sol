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
        address[] memory participants,
        uint256 amount,
        string memory description
    ) public {
        address payer = msg.sender;
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

    function payBack() public payable {
        require(
            balanceOf(msg.sender, MEMBER_TOKEN) >= 1,
            "Must be (for) a member"
        );
        require(msg.value > 0, "Must pay back debt");
        // Possible extension: Overpay
        require(msg.value <= balanceOf(msg.sender, DEPT), "Cannot overpay");
        _burn(msg.sender, DEPT, msg.value);
    }

    function withdraw(uint256 amount) public payable {
        require(
            balanceOf(msg.sender, MEMBER_TOKEN) >= 1,
            "Must be (for) a member"
        );
        require(
            amount <= balanceOf(msg.sender, CREDIT),
            "Cannot withdraw more than you have"
        );
        uint256 balance = address(this).balance;

        if (balance > amount) {
            _burn(msg.sender, CREDIT, amount);
            payable(msg.sender).transfer(amount);
        } else {
            _burn(msg.sender, CREDIT, balance);
            payable(msg.sender).transfer(balance);
        }
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public override {
        require(
            from == _msgSender() || isApprovedForAll(from, _msgSender()),
            "ERC1155: caller is not token owner nor approved"
        );
        require(id != DEPT, "ERC1155: cannot transfer dept");
        _safeTransferFrom(from, to, id, amount, data);
    }

    /**
     * @dev See {IERC1155-safeBatchTransferFrom}.
     */
    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public override {
        require(
            from == _msgSender() || isApprovedForAll(from, _msgSender()),
            "ERC1155: caller is not token owner nor approved"
        );
        for (uint i = 0; i < ids.length; i++) {
            require(ids[i] != DEPT, "ERC1155: cannot transfer dept");
        }
        _safeBatchTransferFrom(from, to, ids, amounts, data);
    }
}
