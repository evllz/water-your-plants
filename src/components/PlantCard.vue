<template>
  <w-card v-for='plant in plants' :key="plant.id" class="card" :image="'../assets/cactus.png'" shadow>
          <p>Name: {{plant.nickname}}</p>
          <p>Species: {{plant.species}}</p>
          <p>H2O Frequency: {{plant.h2ofrequency}}</p>
          <p>Last Wareted: {{plant.isWatered}}</p>
  </w-card>
</template>

<script>
export default {
    name:'PlanCard',
    props: ['plants'],
    data(){
        return({
            // cactus: 
        })
    }
}
</script>

<style>
.card{
    width: 25%;
    margin: 1%;
}

</style>