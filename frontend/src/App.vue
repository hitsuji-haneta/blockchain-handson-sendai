<template>
  <div id="app">
    <h1>Hello!</h1>
  </div>
</template>

<script>
import Web3 from "web3";
let web3;
if (typeof window.web3 !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
} else {
  alert("MetaMaskをインストールして下さい");
}
const address = "0x1565BAEcC6C68620BD45347A96Aa6928b808464c";
const abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string"
      }
    ],
    name: "setGreeting",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    constant: true,
    inputs: [],
    name: "say",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
const contract = new web3.eth.Contract(abi, address);
const say = async function() {
  const message = await contract.methods.say().call();
  console.log(message);
}
say();

export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
