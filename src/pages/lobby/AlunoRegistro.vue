<template>
  <section>
    <base-card>
      <h2>Registre-se agora!</h2>
      <aluno-form @save-data="saveData"></aluno-form>
    </base-card>
  </section>
</template>

<script>
import AlunoForm from '../../components/alunos/AlunoForm.vue';

export default {
  components: {
    AlunoForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('lobby/registrarAluno', data);
      this.$router.replace('/alunos');
    },
  },
};
</script>

<style></style>
