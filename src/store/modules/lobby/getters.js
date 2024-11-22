export default {
  alunos(state) {
    return state.alunos;
  },
  lobbyVivo(state) {
    return state.alunos && state.alunos.length > 0;
  },
  isRegistered(_, getters, _2, rootGetters) {
    const alunos = getters.alunos;
    const userId = rootGetters.userId;
    return alunos.some((aluno) => aluno.id === userId);
  },
};
