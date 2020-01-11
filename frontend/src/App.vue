<template>
  <div id="app">
    <h1>Hello!</h1>
  </div>
</template>

<script>
import Web3 from "web3";
let web3;
if (typeof Web3 !== "undefined") {
  web3 = new Web3(Web3.currentProvider);
} else {
  alert("MetaMaskをインストールして下さい");
}
console.log(web3);

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
