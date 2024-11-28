<template>
  <div>
    <base-dialog
      :show="!!error"
      title="'Occoreu um erro!'"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <aluno-filter @change-filter="setFilters"></aluno-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadAlunos">Refresh</base-button>
          <base-button v-if="!isRegistered && !isLoading" link to="/registro"
            >Registre-se</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="lobbyVivo">
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
  </div>
</template>

<script>
import AlunoItem from '../../components/alunos/AlunoItem.vue';
import AlunoFilter from '../../components/alunos/AlunoFilter.vue';
import BaseDialog from '../../components/ui/BaseDialog.vue';

export default {
  components: {
    AlunoItem,
    AlunoFilter,
    BaseDialog,
  },
  data() {
    return {
      activeFilters: {
        branca: true,
        azul: true,
        marrom: true,
        preta: true,
      },
      isLoading: false,
      error: null,
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
      return !this.isLoading && this.$store.getters['lobby/lobbyVivo'];
    },
    isRegistered() {
      return this.$store.getters['lobby/isRegistered'];
    },
  },
  created() {
    this.loadAlunos();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadAlunos() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('lobby/loadAlunos');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
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
