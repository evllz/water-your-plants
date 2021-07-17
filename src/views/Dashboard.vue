<template>
  <h1>This is the dashboard</h1>
  <w-button @click="logout" class="ma1" bg-color="primary" round>Logout</w-button>
</template>

<script>
export default {
    name: 'Dashboard',
    methods: {
        logout: function(){
        localStorage.removeItem('token')
        this.$router.push('/')
        }, 
    },
    created(){
        console.log(this.$store.state)
    },
    beforeRouteEnter(routeTo, routeFrom, next){
        let token = localStorage.getItem('token')
        if(!token){
            next("/")
        }else{
            next()
        }
    }
    

}
</script>

<style>

</style>