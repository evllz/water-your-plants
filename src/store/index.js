import { createStore } from 'vuex'

export default createStore({
  state: {
    user_id: '',
    username:'',
    plants:[]
  },
  mutations: {
    SET_USER(state,status){
      console.log(status)
      state.user_id = status.data.id,
      state.username = status.data.username
    }
  },
  actions: {
  },
  modules: {
  }
})
