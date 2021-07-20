const state = {
  currentUser: null,
};

const getters = {
  currentUser: (state) => {
    return state.currentUser;
  },
};

const actions = {
  setCurrentUser(context, user) {
    context.commit('setCurrentUser', user);
  },
};

const mutations = {
  setCurrentUser(state, user) {
    state.currentUser = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
