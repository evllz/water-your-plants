<template>
  <div class="home">
    <img src="../assets/plantgroup.png" />
    <div class="container">
      <div class="title">
        <h1 class="title">water your plants</h1>
      </div>
      <LoginForm :showCard="showCard" v-if="alreadyUser == true" />
      <SignupForm :showCard="showCard" v-if="alreadyUser == false" />
    </div>
    <div>
      <w-button
        @click="here"
        v-if="alreadyUser == false"
        class="ma1"
        color="primary"
        text
        lg
        >Already a user? Login here.</w-button
      >
      <w-button
        @click="here"
        v-if="alreadyUser == true"
        class="ma1"
        color="primary"
        text
        lg
        >Not a user? Signup here.</w-button
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from "@/components/LoginForm.vue";
import SignupForm from "@/components/SignupForm.vue";

export default {
  name: "Home",
  components: {
    LoginForm,
    SignupForm
  },
  data() {
    return {
      showCard: true,
      alreadyUser: true
    };
  },
  methods: {
    here: function() {
      if (this.alreadyUser) {
        this.showCard = false;
        this.alreadyUser = false;
      } else if (!this.alreadyUser) {
        this.showCard = true;
        this.alreadyUser = true;
      }
    }
  }
};
</script>
<style scoped>
.container {
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.title {
  margin: 1% 0 1% 0;
}
img {
  width: 100%;
  position: fixed;
  left: 0%;
  z-index: -1;
}
</style>
