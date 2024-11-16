<template>
  <section>
    <base-card>
      <h2>{{ nomeInteiro }}</h2>
      <h3>Horas disponíveis: {{ selectedAluno.horasDisponiveis }}hr</h3>
    </base-card>
  </section>

  <section>
    <base-card>
      <header>
        <h2>Bora treinar?</h2>
        <base-button link :to="contactLink">Contato</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>

  <section>
    <base-card>
      <base-badge
        :type="selectedAluno.faixa"
        :title="selectedAluno.faixa"
      ></base-badge>
      <p>{{ selectedAluno.descricao }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedAluno: null,
    };
  },
  computed: {
    nomeInteiro() {
      return this.selectedAluno.nome + ' ' + this.selectedAluno.sobrenome;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contato';
    },
  },
  created() {
    this.selectedAluno = this.$store.getters['lobby/alunos'].find(
      (aluno) => aluno.id === this.id
    );
  },
};
</script>

<style></style>
