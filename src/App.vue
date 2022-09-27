/* eslint-disable */
<template>
  <login />
</template>

<script>
import login from "./components/Log-in.vue";

export default {
  name: "App",
  components: { login },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
  background: rgb(206, 209, 222);
}
</style>
