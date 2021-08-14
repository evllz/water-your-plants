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
import { axiosWithAuth } from "@/services/axiosWithAuth.js";
import axios from "axios";
export default {
  name: "NewPlantForm",
  components: {
    Datepicker
  },
  data() {
    return {
      nickname: "",
      species: "",
      h2oFrequency: "",
      IsWatered: ref(new Date()),
      user_id: this.$store.state.user_id,
      valid: false,
      validators: { required: value => !!value || "This field is required" },
      loading: false
    };
  },
  props: {
    showCard: { type: Boolean },
    addPlant: { type: Function }
  },
  methods: {
    test: function() {
      console.log(this.$props);
    },
    savePlant: function() {
      this.loading = !this.loading;
      axios
        .post(
          "https://dont-let-it-die.herokuapp.com/plants/",
          {
            nickname: this.nickname,
            species: this.species,
            h2oFrequency: this.h2oFrequency,
            user_id: this.user_id,
            Image_url: null,
            IsWatered: this.IsWatered
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        )
        .then(res => {
          console.log(res);
          this.loading = !this.loading;
          this.$store.dispatch("fetchData");
          // this.$props.addPlant()
        })
        .catch(err => {
          console.log({ messege: err });
          this.loading = !this.loading;
        });
    }
  }
};
</script>

<style scoped>
.card {
  position: fixed;
  z-index: 1;
  top: 15%;
  left: 36%;
}
label {
  color: #234781;
}
.datepicker {
  margin-bottom: 2%;
}
</style>
