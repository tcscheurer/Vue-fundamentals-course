import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
  },
  actions: {
    /* const {state, getters, commit, dispatch, rootState} = context;  => context is the param of Vuex actions */
    // commit is a function that we use to call mutations
    getParts({commit}){
      axios.get('/api/parts').then( response => {
        commit('updateParts', response.data);
      }).catch(e => console.error(e));
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      // We're going to actually return the promise here
      return axios.post('/api/cart', cart).then(() => commit('addRobotToCart', robot))
        .catch(error => console.error(error));
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter( item => item.head.onSale);
    }
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    }
  },
};
