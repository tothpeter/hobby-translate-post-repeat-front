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
    setCurrentUser(context, user) {
      context.commit('setCurrentUser', user)
    },
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
  },
  modules: {
  }
})
