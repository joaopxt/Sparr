export default {
  registrarAluno(state, payload) {
    state.alunos.push(payload);
  },
  setAlunos(state, payload) {
    state.alunos = payload;
  },
};
