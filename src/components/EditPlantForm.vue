<template>
  <w-card shadow class="card" bg-color="white">
    <button @click="test">test</button>
    <w-form v-model="valid">
      <w-input
        v-model="plant.nickname"
        class="mb4"
        label="Nickname"
        :validators="[validators.required]"
      ></w-input>
      <w-input
        v-model="plant.species"
        class="mb4"
        label="Species"
        :validators="[validators.required]"
      ></w-input>
      <w-input
        v-model="plant.h2oFrequency"
        class="mb4"
        label="H2O Frequency (Days)"
        :validators="[validators.required]"
      ></w-input>
      <div class="datepicker">
        <label for="datepicker">Last watered?</label>
        <datepicker v-model="plant.IsWatered" />
      </div>
      <w-button
        v-if="!loading"
        class="my1 button"
        bg-color="primary"
        @click="toggleEdit"
        >Close</w-button
      ><br />
      <w-button
        shadow
        class="ma1"
        bg-color="error"
        icon="mdi mdi-delete"
        @click="deletePlant"
        >Delete</w-button
      >
      <w-spinner v-if="loading" />
    </w-form>
  </w-card>
</template>

<script>
import Datepicker from "vue3-datepicker";
import { ref } from "vue";
export default {
  name: "EditPlantForm",
  components: {
    Datepicker,
  },
  data() {
    return {
      valid: false,
      validators: { required: (value) => !!value || "This field is required" },
      loading: false,
    };
  },
  props: {
    editCard: { type: Boolean },
    toggleEdit: { type: Function },
    plant: { type: Object },
  },
  methods: {
    test: function () {
      console.log(this.$props);
    },
    deletePlant: function () {
      //   console.log(this.$props.plant.id);
      this.$store.commit("DELETE_PLANT", this.$props.plant.id);
      this.toggleEdit();
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
