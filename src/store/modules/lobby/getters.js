export default {
  alunos(state) {
    return state.alunos;
  },
  lobbyVivo(state) {
    return state.alunos && state.alunos.length > 0;
  },
};
