import http from "@/plugins/axios"

const state = {
  instagramProfiles: [],
};

const getters = {
  instagramProfiles: (state) => state.instagramProfiles,
};

const actions = {
  async fetchInstagramProfiles({ commit }) {
    const response = await http.get("/instagram_profiles");
    commit("setInstagramProfiles", response.data);
  }
};

const mutations = {
  setInstagramProfiles: (state, instagramProfiles) => (state.instagramProfiles = instagramProfiles),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
