<template>
  <div id="app">
    <h1>{{message}}</h1>
  </div>
</template>

<script>
import contract from "./lib/contract";

export default {
  name: "app",
  data() {
    return {
      message: ""
    };
  },
  mounted: async function() {
    this.message = await contract.methods.say().call();
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
