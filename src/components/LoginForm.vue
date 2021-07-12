<template>
  <img src="../assets/plantgroup.png"/>
  <div class="container">
  <div class="title">
    <typography class="headline">water your plants</typography>
  </div>
  <div>
    <w-card shadow class="card">
      <w-input v-model="username" class="mb5" inner-icon-left="mdi mdi-account" label="Username"/>
      <w-input v-model="password" :type="isPassword ? 'password' : 'text'"
                :inner-icon-left="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
                @click:inner-icon-left="isPassword = !isPassword" class="mb5" label="Password"/>
    </w-card>
    <w-button @click="login" class="ma1" bg-color="primary" round shadow lg>Login</w-button>
    <w-alert v-if="isError == true" error shadow round class="alert">Username or Password are incorrect.</w-alert>

  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginForm',
  data(){
    return({
      username:'',
      password:'',
      isPassword: true,
      isError:false,
     })
  },methods: {
    login: function(){
    let credentials = {username:this.username,password:this.password}
    axios.post('https://dont-let-it-die.herokuapp.com/auth/login',credentials)
    .then(res => {
      localStorage.setItem('token',res.data.token)
      this.username = ''
      this.password = ''
      this.$router.push('/dashboard')
    }).catch(err => {
      this.isError = true
    })
  }}
}
</script>

<style scoped>
.container{
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.title{
  margin: 1% 0 1% 0;;
}
.card{
  width: 50%;
  margin-left: 25%;
}
.alert{
  width: 50%;
  margin-left: 25%;
}
img{
  width: 100%;
  position: fixed;
  left: 0%;
  z-index: -1;
}
</style>
