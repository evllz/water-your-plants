<template>
  <w-transition-slide left>
    <w-card v-if="showCard" shadow class="card">
      <w-input
        v-model="username"
        class="mb5"
        inner-icon-left="mdi mdi-account"
        label="Username"
      />
      <w-input
        v-model="password"
        :type="isPassword ? 'password' : 'text'"
        :inner-icon-left="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
        @click:inner-icon-left="isPassword = !isPassword"
        @keyup.enter="login"
        class="mb5"
        label="Password"
      />
      <w-button
        v-if="!loading"
        @click="login"
        class="ma1"
        bg-color="primary"
        round
        shadow
        lg
        >Login</w-button
      >
      <w-spinner v-if="loading" />
      <w-alert v-if="isError == true" error shadow round class="alert"
        >Username or Password are incorrect.</w-alert
      >
    </w-card>
  </w-transition-slide>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginForm",
  props: ["showCard"],
  data() {
    return {
      username: "",
      password: "",
      isPassword: true,
      isError: false,
      loading: false
    };
  },
  methods: {
    login: function() {
      this.loading = !this.loading;
      let credentials = { username: this.username, password: this.password };
      axios
        .post("https://dont-let-it-die.herokuapp.com/auth/login", credentials)
        .then(res => {
          this.$store.commit("SET_USER", res.data);
          localStorage.setItem("token", res.data.token);
          this.username = "";
          this.password = "";
          this.loading = !this.loading;
          this.$router.push("/dashboard");
        })
        .catch(err => {
          this.loading = !this.loading;
          this.isError = true;
        });
    }
  }
};
</script>

<style scoped>
.card {
  width: 50%;
  margin-left: 25%;
}
.alert {
  width: 50%;
  margin-left: 25%;
}
</style>
