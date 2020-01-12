<template>
  <div id="app">
    <h1>{{message}}</h1>
    <p>{{name}}</p>
    <input type="text" v-on:input="changeName" />
    <button v-on:click="setName">名前を登録</button>
    <p>{{status}}</p>
  </div>
</template>

<script>
import { contract, getCoinbase } from "./lib/contract";
// import { contract, getCoinbase, CHARGE } from "./lib/contract2";

export default {
  name: "app",
  data() {
    return {
      message: "",
      name: "",
      status: ""
    };
  },
  mounted: async function() {
    this.greet();
  },
  methods: {
    setName: async function() {
      console.log(this.name);
      this.status = "名前を変更中…";
      const from = await getCoinbase();
      contract.methods
        .setName(this.name)
        .send({ from })
        // .send({ from, value: CHARGE })  //contract2用
        .on("receipt", receipt => {
          console.log(receipt);
          this.status = "成功しました！😆";
          this.greet();
        })
        .on("error", error => {
          console.log(error);
          this.status = "失敗しました😢";
        });
    },
    changeName: function(event) {
      this.name = event.target.value;
    },
    greet: async function() {
      this.message = await contract.methods.greet().call();
    }
  }
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
