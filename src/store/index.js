import Vue from 'vue';
import Vuex from 'vuex';

import robotsModule from './modules/robots';
import usersModule from './modules/users';

Vue.use(Vuex);

// Vue's change detection works by tapping into getters and setters, so intitial state is very important, if it not on defaul state
// it will not be picked up, this is similair to how you have to define a default reducer in redux for each peice in combine reducers
export default new Vuex.Store({
  modules: {
    robots: robotsModule,
    users: usersModule,
  }
});

// Note that state is always automatically namespaced by modules but it has to be configured for actions/mutations/getters
