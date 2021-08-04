<template>
  <w-transition-slide right>
    <w-card v-if="!showCard" shadow class="card">
      <w-form v-model="valid" @submit="signup">
        <w-input
          v-model="username"
          class="mb4"
          label="Username(Required)"
          inner-icon-left="mdi mdi-account"
          :validators="[validators.required]"
        ></w-input>
        <w-input
          v-model="password"
          class="mb4"
          label="Password(Required)"
          inner-icon-left="mdi mdi-eye"
          :validators="[validators.required]"
        ></w-input>
        <w-input
          v-model="phone"
          class="mb4"
          label="Phone(optional)"
          inner-icon-left="mdi mdi-phone"
        ></w-input>
        <w-button
          type="submit"
          class="my1 mr2 button"
          :disabled="valid === false"
          >Signup!</w-button
        >
        <w-button v-if="loading" type="reset" class="my1 button" bg-color="none"
          >Clear Form</w-button
        >
        <w-spinner v-if="loading" />
      </w-form>
    </w-card>
  </w-transition-slide>
</template>

<script>
import axios from "axios";
export default {
  props: ["showCard"],
  data() {
    return {
      username: "",
      password: "",
      phone: "",
      valid: false,
      validators: { required: value => !!value || "This field is required" },
      loading: false
    };
  },
  methods: {
    signup: function() {
      this.loading = !this.loading;
      let newuser = {
        username: this.username,
        password: this.password,
        phone: this.phone
      };
      axios
        .post("https://dont-let-it-die.herokuapp.com/auth/register", newuser)
        .then(res => {
          localStorage.setItem("token", res.data.token);
          this.username = "";
          this.password = "";
          this.phone = "";
          this.loading = !this.loading;
          this.$router.push("/dashboard");
        })
        .catch(err => {
          this.loading = !this.loading;
          console.log(err);
        });
    }
  }
};
</script>

<style>
.card {
  width: 50%;
  margin-left: 25%;
}
.button {
  margin: 5px;
}
</style>
