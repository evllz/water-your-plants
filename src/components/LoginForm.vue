<template>
  <div class="hello">
    <w-card shadow class="card">
      <w-input v-model="username" class="mb5" inner-icon-left="mdi mdi-account" label="Username"/>
      <w-input v-model="password" :type="isPassword ? 'password' : 'text'"
                :inner-icon-left="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
                @click:inner-icon-left="isPassword = !isPassword" class="mb5" label="Password"/>
    </w-card>
    <w-button @click="testLog" class="ma1" bg-color="primary" round>Console log</w-button>
    <w-button @click="login" class="ma1" bg-color="primary" round>Login</w-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginForm',
  props: {
    msg: String
  },
  data(){
    return({
      username:'',
      password:'',
      isPassword: true
    })
  },methods: {
    testLog: function(){
    console.log(this.username, " ", this.password)
  }, login: function(){
    let credentials = {username:this.username,password:this.password}
    axios.post('https://dont-let-it-die.herokuapp.com/auth/login',credentials)
    .then(res => {
      localStorage.setItem('token',res.data.token)
      this.username = ''
      this.password = ''
      this.$router.push('/dashboard')
    }).catch(err => {
      console.error(err)
    })
  }}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card{
  width: 80%;
  margin-left: 10%;
}
</style>
