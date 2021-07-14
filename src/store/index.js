import { createStore } from 'vuex'

export default createStore({
  state: {
    current_user: null,
  },
  getters: {
    current_user: (state) => {
      return state.current_user;
    },
  },
  actions: {
    current_user(context, user) {
      context.commit('current_user', user)
    },
  },
  mutations: {
    current_user(state, user) {
      state.current_user = user;
    },
  },
  modules: {
  }
})
