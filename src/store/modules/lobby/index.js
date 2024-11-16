import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      alunos: [
        {
          id: 'a1',
          nome: 'João',
          sobrenome: 'Peixoto',
          faixa: 'preta',
          descricao:
            'Meu nome é João, estou começando a treinar jiu-jitsu e gostaria de um parceiro de treino',
          horasDisponiveis: 2,
        },
        {
          id: 'a2',
          nome: 'Cris',
          sobrenome: 'Sousa',
          faixa: 'azul',
          descricao: 'Meu nome é Cris, e estou procurando um parceiro de Jiu',
          horasDisponiveis: 1,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
