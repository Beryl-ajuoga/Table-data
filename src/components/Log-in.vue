/* eslint-disable */
<template>
  <form>
    <label>Username:</label>
    <input type="username" required v-model="username" />

    <label>Email:</label>
    <input type="Email" required v-model="Email" />

    <label>password:</label>
    <input type="password" required v-model="password" />

    <div class="login">
      <button>Login></button>
    </div>
  </form>

  <p>{{ username }}</p>
  <p>{{ Email }}</p>
  <p>{{ password }}</p>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      Email: "",
      password: "",
    };
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(34, 59, 89);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: rgb(246, 242, 242);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
button {
  background: rgb(17, 17, 76);
  text-align: center;
  border: 0;
  padding: 10px 20px;
  color: rgb(232, 232, 237);
  border-radius: 20px;
}
</style>
