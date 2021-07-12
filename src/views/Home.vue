<template>
  <div class="home">
    <LoginForm v-if="alreadyUser == true"/>
    <SignupForm v-if="alreadyUser == false"/>
    <div>
      <w-button @click="here" v-if="alreadyUser == false" class="ma1" color="primary" text lg>Already a user? Login here.</w-button>
      <w-button @click="here" v-if="alreadyUser == true" class="ma1" color="primary" text lg>Not a user? Signup here.</w-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'
import SignupForm from "@/components/SignupForm.vue"

export default {
  name: 'Home',
  components: {
    LoginForm,
    SignupForm
  },
  data(){
    return({
      alreadyUser:false,
    })
  },
  methods:{
    here: function(){
      if(this.alreadyUser){
        this.alreadyUser = false
      }
      else if(!this.alreadyUser) {
        this.alreadyUser = true
      }
    }
  }
}
</script>
