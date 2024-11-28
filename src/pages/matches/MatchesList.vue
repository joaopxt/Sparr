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
      <base-card>
        <header>
          <h2>Meus treinos</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasTreinos && !isLoading">
          <treino-item
            v-for="treino in receivedTreinos"
            :key="treino.id"
            :email="treino.userEmail"
            :message="treino.message"
          ></treino-item>
        </ul>
        <h3 v-else>Você não tem nenhum treino ainda!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import TreinoItem from '../../components/treinos/TreinoItem.vue';
import BaseDialog from '../../components/ui/BaseDialog.vue';

export default {
  components: {
    TreinoItem,
    BaseDialog,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    receivedTreinos() {
      return this.$store.getters['treinos/treinos'];
    },
    hasTreinos() {
      return this.$store.getters['treinos/hasTreinos'];
    },
  },
  created() {
    this.loadTreinos();
  },
  methods: {
    async loadTreinos() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('treinos/fetchTreinos');
      } catch (error) {
        this.error = error.message || 'Something failed!';
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
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
