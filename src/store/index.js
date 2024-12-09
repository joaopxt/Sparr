import { createStore } from 'vuex';
import lobbyModules from './modules/lobby/index';
import matchesModules from './modules/matches/index';
import authModule from './modules/auth/index';

const store = createStore({
  modules: {
    lobby: lobbyModules,
    treinos: matchesModules,
    auth: authModule,
  },
});

export default store;
