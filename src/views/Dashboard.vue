<template>
    <h1>My Plants</h1>
    <div class="cardContainer">
        <plant-card :plants="plants"  />
    </div>
  
  <w-button @click="logout" class="ma1" bg-color="primary" round>Logout</w-button>
  <!-- <w-button @click="testing" class="ma1" bg-color="primary" round>Console</w-button> -->
</template>

<script>

import {mapState} from 'vuex'
import PlantCard from '../components/PlantCard.vue'
export default {
    name: 'Dashboard',
    components:{
        PlantCard
    },
    computed:{
        ...mapState({
            plants: state => state.plants,
        })
    },
    methods: {
        logout: function(){
        localStorage.removeItem('token')
        this.$router.push('/')
        }, 
        testing: function(){
            console.log(this.$store.state.user_id)
        }
    },
    beforeRouteEnter(routeTo, routeFrom, next){
            let token = localStorage.getItem('token')
            if(!token){
                next("/")
            }else{
                next()
        }
    },
    mounted(){
        this.$store.dispatch('fetchData')
    },
}
</script>

<style>
.cardContainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 15%;
}
</style>