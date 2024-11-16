<template>
  <section>
    <aluno-filter @change-filter="setFilters"></aluno-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/registro">Registre-se</base-button>
      </div>
      <ul v-if="lobbyVivo">
        <aluno-item
          v-for="aluno in filteredAlunos"
          :key="aluno.id"
          :id="aluno.id"
          :nome="aluno.nome"
          :sobrenome="aluno.sobrenome"
          :horasDisponiveis="aluno.horasDisponiveis"
          :faixa="aluno.faixa"
        ></aluno-item>
      </ul>
      <h3 v-else>Lobby vazio</h3>
    </base-card>
  </section>
</template>

<script>
import AlunoItem from '../../components/alunos/AlunoItem.vue';
import AlunoFilter from '../../components/alunos/AlunoFilter.vue';

export default {
  components: {
    AlunoItem,
    AlunoFilter,
  },
  data() {
    return {
      activeFilters: {
        branca: true,
        azul: true,
        marrom: true,
        preta: true,
      },
    };
  },
  computed: {
    filteredAlunos() {
      const alunos = this.$store.getters['lobby/alunos'];
      return alunos.filter((aluno) => {
        if (this.activeFilters.branca && aluno.faixa === 'branca') {
          return true;
        }
        if (this.activeFilters.azul && aluno.faixa === 'azul') {
          return true;
        }
        if (this.activeFilters.marrom && aluno.faixa === 'marrom') {
          return true;
        }
        if (this.activeFilters.preta && aluno.faixa === 'preta') {
          return true;
        } else {
          return false;
        }
      });
    },
    lobbyVivo() {
      return this.$store.getters['lobby/lobbyVivo'];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
