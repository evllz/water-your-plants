<template>
  <w-card shadow inner-icon-left="md pencil">
    <w-toolbar>
      <div class="title2">{{ plant.nickname }}</div>
      <div class="spacer"></div>
      <w-button
        @click="editCard = !editCard"
        class="ma1"
        bg-color="success"
        shadow
        ><w-icon> mdi mdi-pencil </w-icon></w-button
      >
    </w-toolbar>
    <img v-if="!plant.image_url" src="../assets/cactus.png" />
    <img v-if="plant.image_url" src="plant.image_url" />
    <p>Species: {{ plant.species }}</p>
    <p>H2O Frequency: {{ plant.h2oFrequency }} days</p>
    <p>Last Wareted: {{ new Date(plant.isWatered).toDateString() }}</p>
    <edit-plant-form v-if="editCard" :toggleEdit="toggleEdit" :plant="plant" />
  </w-card>
</template>

<script>
import EditPlantForm from "../components/EditPlantForm.vue";
export default {
  name: "PlanCard",
  components: {
    EditPlantForm,
  },
  props: ["plant"],
  data() {
    return {
      editCard: false,
    };
  },
  methods: {
    press: function () {
      console.log(this.editIcon);
      this.editIcon = "mdi mdi-pencil-outline";
    },
    toggleEdit: function () {
      this.editCard = !this.editCard;
    },
  },
};
</script>

<style scoped>
img {
  max-height: 100%;
  max-width: 100%;
}
</style>
