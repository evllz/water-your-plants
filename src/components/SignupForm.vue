<template>
    <img src="../assets/plantgroup.png"/>
    <div class="container">
        <div class="title">
            <typography class="headline">water your plants</typography>
         </div>
        <w-card shadow class="card">
            <w-form v-model='valid' @submit="signup">
                <w-input v-model="username" class="mb4" label='Username(Required)' inner-icon-left="mdi mdi-account" :validators="[validators.required]"></w-input>
                <w-input v-model="password" class="mb4" label='Password(Required)' inner-icon-left="mdi mdi-eye" :validators="[validators.required]"></w-input>
                <w-input v-model="phone" class="mb4" label='Phone(optional)' inner-icon-left="mdi mdi-phone"></w-input>
                <w-button type="submit" class="my1 mr2 button" :disabled="valid === false">Signup!</w-button>
                <w-button type="reset" class="my1 button" bg-color='none'>Clear Form</w-button>
            </w-form>
        </w-card>    
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return({
            username: '',
            password: '',
            phone: '',
            valid: false,
            validators: {required: value => !!value || "This field is required"}
        })
    },
    methods:{
        signup: function(){
            let newuser = {username:this.username,password:this.password,phone:this.phone}
            axios.post('https://dont-let-it-die.herokuapp.com/auth/register',newuser)
            .then(res => {
                localStorage.setItem('token',res.data.token)
                this.username = ''
                this.password = ''
                this.phone = ''
                this.$router.push('/dashboard')
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style>
.container{
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.card{
  width: 50%;
  margin-left: 25%;
}
.title{
  margin: 1% 0 1% 0;;
}
.button{
    margin: 5px;
}
img{
  width: 100%;
  position: fixed;
  left: 0%;
  z-index: -1;
}
</style>