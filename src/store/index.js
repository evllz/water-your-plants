import { createStore } from "vuex";
import { axiosWithAuth } from "@/services/axiosWithAuth.js";
import createPersistState from "vuex-persistedstate";
import data from '../data/plants.json'
export default createStore({
  state: {
    user_id: "",
    username: "",
    plants: []
  },
  mutations: {
    SET_USER(state, status) {
      (state.user_id = status.data.id), (state.username = status.data.username);
    },
    SET_PLANTS(state, status) {
      state.plants = status;
    },
    ADD_PLANT(state, status) {
      state.plants = [...state.plants, status]
    },
    DELETE_PLANT(state, status) {
      let newPlants = state.plants.filter(plant => {
        if (plant.id != status) {
          return plant
        }
      })
      state.plants = newPlants
    }
  },
  actions: {
    fetchData() {
      axiosWithAuth()
        .get(
          `https://dont-let-it-die.herokuapp.com/plants/user/${this.state.user_id}`
        )
        .then(res => {
          this.commit("SET_PLANTS", res.data);
        })
        .catch(err => {
          this.commit("SET_PLANTS", data.values);
        });
    }
  },
  modules: {},
  plugins: [createPersistState()]
});
