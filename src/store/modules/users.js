
import axios from 'axios';

export default {
  state: {
    user: null,
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    /*
    foo(state, getters, rootState){
      // state is the local namespaced state -> state is namespaced by default
      // getters are either local or global level to the store depending on if the module is namespaced
      // rootState is the actual rootState of the store (all modules)
    }
    */
  },
  actions: {
    signIn({ commit }) {
      axios.post('/api/sign-in')
        .then(result => commit('updateCurrentUser', result.data))
        .catch(console.error);
    },
  },
};
