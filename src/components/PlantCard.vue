<template>
  <w-card :title="plant.nickname" shadow>
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
  props: ["plant"]
};
</script>

<style scoped>
img {
  max-height: 100%;
  max-width: 100%;
}
</style>
