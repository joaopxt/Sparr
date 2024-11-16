import { createStore } from 'vuex';
import lobbyModules from './modules/lobby/index';

const store = createStore({
  modules: {
    lobby: lobbyModules,
  },
});

export default store;
