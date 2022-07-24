// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

// Import this file to use console.log
import "hardhat/console.sol";

contract AdamfoProtocol {
    event PoolCreated(address childAddress, address[] members, uint identifier);

    uint public pools = 0;

    function createPool(address[] memory members) external {
        AdamfoPool pool = new AdamfoPool(members, pools);
        emit PoolCreated(address(pool), members, pools);
        pools = pools + 1;
    }
}

contract AdamfoPool is ERC1155 {
    uint256 public constant MEMBER_TOKEN = 0;
    uint256 public constant CREDIT = 1;
    uint256 public constant DEPT = 2;

    event RegisterExpense(
        address payer,
        address[] participants,
        uint256 amount,
        string description
    );

    event PayBack(address lender, uint256 amount);

    event Peer2PeerSettlement(address sender, address receiver, uint256 amount);

    constructor(address[] memory members, uint poolId)
        ERC1155(
            string(
                abi.encodePacked(
                    "https://adamfo.xyz/api/pool/",
                    poolId,
                    "/item/{id}.json"
                )
            )
        )
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
        emit PayBack(msg.sender, msg.value);
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

    function _afterTokenTransfer(
        address,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory
    ) internal override {
        for (uint i = 0; i < ids.length; i++) {
            if (ids[i] == CREDIT && from != address(0) && to != address(0)) {
                uint256 receiverDept = balanceOf(to, DEPT);

                if (receiverDept > 0) {
                    emit Peer2PeerSettlement(from, to, amounts[i]);

                    if (amounts[i] > receiverDept) {
                        _burn(to, DEPT, receiverDept);
                        _mint(to, CREDIT, amounts[i] - receiverDept, "");
                    } else {
                        _burn(to, DEPT, amounts[i]);
                        _burn(to, CREDIT, amounts[i]);
                    }
                }
            }
        }
    }
}
