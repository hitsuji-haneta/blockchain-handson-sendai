<template>
  <div>
    <h1>{{balance}} ETH</h1>
    <button v-on:click="withdraw">引き出し</button>
    <p>{{status}}</p>
  </div>
</template>

<script>
import Web3 from "web3";
import { contract, getAccount } from "../lib/contract";

export default {
  name: "app",
  data() {
    return {
      balance: 0,
      status: ""
    };
  },
  mounted: async function() {
    this.getBalance();
  },
  methods: {
    withdraw: async function() {
      this.status = "引き出し中…";
      const from = await getAccount();
      contract.methods
        .withdraw()
        .send({ from, gas: 40000, gasPrice: Web3.utils.toWei("100", "gwei") })
        .on("receipt", receipt => {
          console.log(receipt);
          this.status = "成功しました！😆";
          this.getBalance();
        })
        .on("error", error => {
          console.log(error);
          this.status = "失敗しました😢";
        });
    },
    getBalance: async function() {
      const currentBalance = await contract.methods.balance().call();
      this.balance = Web3.utils.fromWei(currentBalance, "ether");
    }
  }
};
</script>
