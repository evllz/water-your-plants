<template>
  <w-card shadow class="card" bg-color="white">
    <!-- <button @click="test">test</button> -->
    <w-form v-model="valid">
      <w-input
        v-model="nickname"
        class="mb4"
        label="Nickname"
        :validators="[validators.required]"
      ></w-input>
      <w-input
        v-model="species"
        class="mb4"
        label="Species"
        :validators="[validators.required]"
      ></w-input>
      <w-input
        v-model="h2oFrequency"
        class="mb4"
        label="H2O Frequency (Days)"
        :validators="[validators.required]"
      ></w-input>
      <div class="datepicker">
        <label for="datepicker">Last watered?</label>
        <datepicker v-model="IsWatered" />
      </div>
      <w-button
        v-if="!loading"
        @click="savePlant"
        class="my1 mr2 button"
        :disabled="valid === false"
        >Save</w-button
      >
      <w-button
        v-if="!loading"
        class="my1 button"
        bg-color="none"
        @click="addPlant"
        >Cancel</w-button
      >
      <w-spinner v-if="loading" />
    </w-form>
  </w-card>
</template>

<script>
import Datepicker from "vue3-datepicker";
import { ref } from "vue";
// import { axiosWithAuth } from "@/services/axiosWithAuth.js";
// import axios from "axios";
export default {
  name: "NewPlantForm",
  components: {
    Datepicker,
  },
  data() {
    return {
      nickname: "",
      species: "",
      h2oFrequency: "",
      IsWatered: ref(new Date()),
      user_id: this.$store.state.user_id,
      valid: false,
      validators: { required: (value) => !!value || "This field is required" },
      loading: false,
    };
  },
  props: {
    showCard: { type: Boolean },
    addPlant: { type: Function },
  },
  methods: {
    test: function () {
      console.log(this.$props);
    },
    savePlant: function () {
      let plant = {
        nickname: this.nickname,
        species: this.species,
        h2oFrequency: this.h2oFrequency,
        IsWatered: this.IsWatered.toDateString(),
      };
      this.$store.commit("ADD_PLANT", plant);
      this.addPlant();
    },
  },
};
</script>

<style scoped>
.card {
  position: fixed;
  z-index: 99;
  top: 15%;
  left: 36%;
  border: solid rgb(0, 0, 0) 1px;
}
label {
  color: #234781;
}
.datepicker {
  margin-bottom: 2%;
}
</style>
