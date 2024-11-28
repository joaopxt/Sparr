export default {
  async contactAluno(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://sparrdevelopment-3f564-default-rtdb.firebaseio.com/treinos/${payload.alunoId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    newRequest.id = responseData.name;
    newRequest.alunoId = payload.alunoId;

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request');
      throw error;
    }

    context.commit('addTreino', newRequest);
  },

  async fetchTreinos(context) {
    const alunoId = context.rootGetters.userId;
    const response = await fetch(
      `https://sparrdevelopment-3f564-default-rtdb.firebaseio.com/treinos/${alunoId}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch request'
      );
      throw error;
    }

    const treinos = [];

    for (const key in responseData) {
      const treino = {
        id: key,
        alunoId: alunoId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };

      treinos.push(treino);
    }

    context.commit('setTreinos', treinos);
  },
};
