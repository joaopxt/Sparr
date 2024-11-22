export default {
  contactAluno(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      alunoId: payload.alunoId,
      userEmail: payload.email,
      message: payload.message,
    };
    context.commit('addTreino', newRequest);
  },
};
