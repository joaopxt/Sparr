import { createStore } from 'vuex';
import lobbyModules from './modules/lobby/index';
import matchesModules from './modules/matches/index';

const store = createStore({
  modules: {
    lobby: lobbyModules,
    treinos: matchesModules,
  },
  state() {
    return {
      userId: 'a1',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
