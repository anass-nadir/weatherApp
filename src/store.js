import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: null,
    darkMode:
      (localStorage.getItem('dark-mode') &&
        localStorage.getItem('dark-mode') === 'true') ||
      false
  },
  getters: {
    user(state) {
      return state.user;
    },
    darkMode(state) {
      return state.darkMode;
    }
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data;
    },
    SWITCH_DARK_MODE(state) {
      localStorage.setItem('dark-mode', !state.darkMode);
      state.darkMode = !state.darkMode;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      if (user) {
        commit('SET_USER', {
          uid: user.uid,
          email: user.email
        });
      } else {
        commit('SET_USER', null);
      }
    }
  }
});
