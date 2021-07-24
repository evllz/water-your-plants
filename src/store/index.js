import { createStore } from "vuex";
import { axiosWithAuth } from "@/services/axiosWithAuth.js";
import createPersistState from "vuex-persistedstate";
export default createStore({
  state: {
    user_id: "",
    username: "",
    plants: [],
  },
  mutations: {
    SET_USER(state, status) {
      (state.user_id = status.data.id), (state.username = status.data.username);
    },
    SET_PLANTS(state, status) {
      state.plants = status;
    },
  },
  actions: {
    fetchData() {
      axiosWithAuth()
        .get(
          `https://dont-let-it-die.herokuapp.com/plants/user/${this.state.user_id}`
        )
        .then((res) => {
          this.commit("SET_PLANTS", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
  plugins: [createPersistState()],
});
