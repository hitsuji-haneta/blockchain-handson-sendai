pragma solidity ^0.5.0;

contract Hello2 {
  address payable internal owner;
  string name;
  uint public balance;

  constructor (string memory _name) public {
    name = _name;
    owner = msg.sender;
  }

  function setName(string memory _name) public payable {
    require(msg.value == 0.01 ether, "料金は0.01ETHです。");
    balance += msg.value;
    name = _name;
  }

  function greet() public view returns (string memory) {
    return string(abi.encodePacked(bytes("Hello, "), bytes(name)));
  }

  function withdraw() public {
    require(msg.sender == owner, "オーナー以外は引き出しできません。");
    uint amount = balance;
    balance = 0;
    owner.transfer(amount);
  }
}
