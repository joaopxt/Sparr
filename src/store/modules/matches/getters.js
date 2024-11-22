export default {
  treinos(state) {
    return state.treinos;
  },
  hasTreinos(state) {
    return state.treinos && state.treinos.length > 0;
  },
};
