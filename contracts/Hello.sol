pragma solidity ^0.5.0;

contract Hello {
  string name;

  constructor (string memory _name) public {
    name = _name;
  }

  function setName(string memory _name) public {
    name = _name;
  }

  function greet() public view returns (string memory) {
    return string(abi.encodePacked(bytes("Hello, "), bytes(name)));
  }
}