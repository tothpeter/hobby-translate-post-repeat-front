import { createStore } from 'vuex'

export default createStore({
  state: {
    currentUser: null,
  },
  getters: {
    currentUser: (state) => {
      return state.currentUser;
    },
  },
  actions: {
    currentUser(context, user) {
      context.commit('currentUser', user)
    },
  },
  mutations: {
    currentUser(state, user) {
      state.currentUser = user;
    },
  },
  modules: {
  }
})
