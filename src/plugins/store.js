// store.js

import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    profile: {
      username: '',
      role: '',
      avtarLink:''
    },
  },
  mutations: {
    setProfile(state, newProfile) {
      state.profile = newProfile;
    },
  },
  actions: {
    updateProfile({ commit }, newProfile) {
      commit('setProfile', newProfile);
    },
  },
  getters: {
    getProfile: state => state.profile,
  },
  plugins: [createPersistedState()],
});

export default store;
