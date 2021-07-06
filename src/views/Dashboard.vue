<template>
  <h1>This is the dashboard</h1>
  <w-button @click="logout" class="ma1" bg-color="primary" round>Logout</w-button>
</template>

<script>
export default {
    name: 'Dashboard',
    methods: {logout(){
        localStorage.removeItem('token')
        this.$router.push('/')
    }
    }

}
</script>

<style>

</style>