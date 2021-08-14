<template>
  <w-card shadow inner-icon-left="md pencil">
    <w-toolbar>
      <div class="title2">{{plant.nickname}}</div>
      <div class="spacer"></div>
      <w-button class="ma1" bg-color="success" shadow><w-icon> {{editIcon}} </w-icon></w-button>
    </w-toolbar>
    <img v-if="!plant.image_url" src="../assets/cactus.png" />
    <img v-if="plant.image_url" src="plant.image_url" />
    <p>Species: {{ plant.species }}</p>
    <p>H2O Frequency: {{ plant.h2oFrequency }} days</p>
    <p>Last Wareted: {{ new Date(plant.isWatered).toDateString() }}</p>
  </w-card>
</template>

<script>
export default {
  name: "PlanCard",
  props: ["plant"],
  data(){
    return({
        editIcon: 'mdi mdi-pencil'
    })
  },
  methods:{
    press:function() {
      console.log(this.editIcon)
      this.editIcon = 'mdi mdi-pencil-outline'
    }
  }
};
</script>

<style scoped>
img {
  max-height: 100%;
  max-width: 100%;
}
</style>
