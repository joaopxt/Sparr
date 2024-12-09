export default {
  async registrarAluno(context, data) {
    const userId = context.rootGetters.userId;
    const alunoData = {
      nome: data.nome,
      sobrenome: data.sobrenome,
      descricao: data.desc,
      horasDisponiveis: data.horas,
      faixa: data.faixa,
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `https://sparrdevelopment-3f564-default-rtdb.firebaseio.com/alunos/${userId}.json?auth=${token}`,
      {
        method: 'PUT',
        body: JSON.stringify(alunoData),
      }
    );

    //const responseData = await response.json();

    if (!response.ok) {
      console.log('Error');
    }

    context.commit('registrarAluno', {
      ...alunoData,
      id: userId,
    });
  },
  async loadAlunos(context) {
    const response = await fetch(
      `https://sparrdevelopment-3f564-default-rtdb.firebaseio.com/alunos.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const alunos = [];

    for (const key in responseData) {
      const aluno = {
        id: key,
        nome: responseData[key].nome,
        sobrenome: responseData[key].sobrenome,
        descricao: responseData[key].descricao,
        horasDisponiveis: responseData[key].horasDisponiveis,
        faixa: responseData[key].faixa,
      };
      alunos.push(aluno);
    }

    context.commit('setAlunos', alunos);
  },
};
