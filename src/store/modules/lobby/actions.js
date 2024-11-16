export default {
  registrarAluno(context, data) {
    const alunoData = {
      id: 'a3',
      nome: data.nome,
      sobrenome: data.sobrenome,
      descricao: data.desc,
      horasDisponiveis: data.horas,
      faixa: data.faixa,
    };

    context.commit('registrarAluno', alunoData);
  },
};
