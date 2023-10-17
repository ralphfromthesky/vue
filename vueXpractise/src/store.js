import { createStore } from 'vuex';

export default createStore({
  state: {
    // Your application's state goes here
    count: 0,
  },
  mutations: {
    // Mutations are used to modify the state
    increment(state) {
      state.count++;
    },
  },
  actions: {
    // Actions are where you put your business logic
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
  },
  getters: {
    // Getters are used to compute derived state
    doubleCount(state) {
      return state.count * 2;
    },
  },
});
