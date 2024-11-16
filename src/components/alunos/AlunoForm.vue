<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="nome">Nome</label>
      <input type="text" id="nome" v-model.trim="nome" />
    </div>
    <div class="form-control">
      <label for="sobrenome">Sobrenome</label>
      <input type="text" id="sobrenome" v-model.trim="sobrenome" />
    </div>
    <div class="form-control">
      <label for="sobrenome">Descrição</label>
      <textarea id="descricao" rows="5" v-model.trim="descricao"></textarea>
    </div>
    <div class="form-control">
      <label for="horas">Horas Disponíveis</label>
      <input type="number" id="horas" v-model.number="horasDisponiveis" />
    </div>
    <div class="form-control">
      <h3>Faixa</h3>
      <div>
        <select name="faixa" id="faixa" v-model="faixa">
          <option value="branca">Branca</option>
          <option value="azul">Azul</option>
          <option value="marrom">Marrom</option>
          <option value="preta">Preta</option>
        </select>
      </div>
    </div>
    <base-button>Registrar</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      nome: '',
      sobrenome: '',
      descricao: '',
      horasDisponiveis: null,
      faixa: '',
    };
  },
  methods: {
    submitForm() {
      const formData = {
        nome: this.nome,
        sobrenome: this.sobrenome,
        desc: this.descricao,
        horas: this.horasDisponiveis,
        faixa: this.faixa,
      };

      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

select {
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
