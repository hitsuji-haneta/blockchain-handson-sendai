<template>
  <div id="app">
    <h1>{{message}}</h1>
    <input type="text" v-on:input="changeName" />
    <button v-on:click="setName">名前を登録</button>
    <p>{{name}}</p>
  </div>
</template>

<script>
import contract from "./lib/contract";

export default {
  name: "app",
  data() {
    return {
      message: "",
      name: ""
    };
  },
  mounted: async function() {
    this.message = await contract.methods.greet().call();
  },
  methods: {
    setName: function() {
      console.log(this.name);
    },
    changeName: function(event) {
      this.name = event.target.value;
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
