<template>
  <li>
    <h3>{{ nome }}</h3>
    <h4>Horas disponíveis: {{ horasDisponiveis }}hr</h4>
    <div>
      <base-badge :type="faixa" :title="faixa"></base-badge>
    </div>
    <div class="actions">
      <base-button link mode="outline" :to="contatoAlunoLink"
        >Contato</base-button
      >
      <base-button link :to="detalheAlunoLink">Ver detalhes</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'nome', 'sobrenome', 'horasDisponiveis', 'faixa'],
  computed: {
    nomeInteiro() {
      return this.nome + ' ' + this.sobrenome;
    },
    contatoAlunoLink() {
      return `${this.$route.path}/${this.id}/contato`;
    },
    detalheAlunoLink() {
      return `${this.$route.path}/${this.id}`;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
