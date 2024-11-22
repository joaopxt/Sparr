<template>
  <section>
    <base-card>
      <header>
        <h2>Meus treinos</h2>
      </header>
      <ul v-if="hasTreinos">
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
</template>

<script>
import TreinoItem from '../../components/treinos/TreinoItem.vue';

export default {
  components: {
    TreinoItem,
  },
  computed: {
    receivedTreinos() {
      return this.$store.getters['treinos/treinos'];
    },
    hasTreinos() {
      return this.$store.getters['treinos/hasTreinos'];
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
