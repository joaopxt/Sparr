export default {
  treinos(state, _, _2, rootGetters) {
    const alunoId = rootGetters.userId;
    return state.treinos.filter((x) => x.alunoId === alunoId);
  },
  hasTreinos(_, getters) {
    return getters.treinos && getters.treinos.length > 0;
  },
};
