<template>
  <header>
    <w-flex>
      <h1>My Plants</h1>
    </w-flex>
    <w-flex justify-end>
      <w-button @click="addPlant" class="ma1 button" bg-color="primary" round shadow
        >Add Plant</w-button
      >
      <w-button @click="logout" class="ma1 button" bg-color="primary" round shadow
        >Logout</w-button
      >
    </w-flex>
  </header>
  <new-plant-form v-if="showCard" :addPlant="addPlant" />
  <!-- <button @click="test">test</button> -->
  <div class="cardContainer">
    <div v-for="plant in plants" :key="plant.id" class="card">
      <plant-card :plant="plant" />
    </div>
  </div>

  <!-- <w-button @click="testing" class="ma1" bg-color="primary" round>Console</w-button> -->
</template>

<script>
import { mapState } from "vuex";
import NewPlantForm from "../components/NewPlantForm.vue";
import PlantCard from "../components/PlantCard.vue";

export default {
  name: "Dashboard",
  components: {
    PlantCard,
    NewPlantForm
  },
  data() {
    return {
      showCard: false
    };
  },
  computed: {
    ...mapState({
      plants: state => state.plants
    })
  },
  methods: {
    logout: function() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
    addPlant: function() {
      if (this.showCard) {
        this.showCard = !this.showCard;
      } else {
        this.showCard = !this.showCard;
      }
    },
    test: function() {
      console.log(this.showCard);
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    let token = localStorage.getItem("token");
    if (!token) {
      next("/");
    } else {
      next();
    }
  },
  mounted() {
    this.$store.dispatch("fetchData");
  }
};
</script>

<style>
.cardContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 15%;
}
.card {
  width: 25%;
  margin: 1%;
}
header {
  display: flex;
  flex-direction: row;
}
.button {
  justify-self: end;
}
</style>
