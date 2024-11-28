export default {
  addTreino(state, payload) {
    state.treinos.push(payload);
  },
  setTreinos(state, payload) {
    state.treinos = payload;
  },
};
