<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !nome.isValid }">
      <label for="nome">Nome</label>
      <input
        type="text"
        id="nome"
        v-model.trim="nome.val"
        @blur="clearValidity('nome')"
      />
      <p v-if="!nome.isValid">Nome não pode estar vazio</p>
    </div>
    <div class="form-control" :class="{ invalid: !sobrenome.isValid }">
      <label for="sobrenome">Sobrenome</label>
      <input
        type="text"
        id="sobrenome"
        v-model.trim="sobrenome.val"
        @blur="clearValidity('sobrenome')"
      />
      <p v-if="!sobrenome.isValid">Sobrenome não pode estar vazio</p>
    </div>
    <div class="form-control" :class="{ invalid: !descricao.isValid }">
      <label for="sobrenome">Descrição</label>
      <textarea
        id="descricao"
        rows="5"
        v-model.trim="descricao.val"
        @blur="clearValidity('descricao')"
      ></textarea>
      <p v-if="!descricao.isValid">Descrição não pode estar vazia</p>
    </div>
    <div class="form-control" :class="{ invalid: !horasDisponiveis.isValid }">
      <label for="horas">Horas Disponíveis</label>
      <input
        type="number"
        id="horas"
        v-model.number="horasDisponiveis.val"
        @blur="clearValidity('horasDisponiveis')"
      />
      <p v-if="!horasDisponiveis.isValid">
        Você deve ter ao menos 1 hora disponível
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !faixa.isValid }">
      <label for="faixa">Faixa</label>
      <div>
        <select
          name="faixa"
          id="faixa"
          v-model="faixa.val"
          @blur="clearValidity('faixa')"
        >
          <option value="branca">Branca</option>
          <option value="azul">Azul</option>
          <option value="marrom">Marrom</option>
          <option value="preta">Preta</option>
        </select>
        <p v-if="!faixa.isValid">Você deve ser graduado em ao menos 1 faixa</p>
      </div>
    </div>
    <p v-if="!formIsValid">Revise os dados inseridos!</p>
    <base-button>Registrar</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      nome: {
        val: '',
        isValid: true,
      },
      sobrenome: {
        val: '',
        isValid: true,
      },
      descricao: {
        val: '',
        isValid: true,
      },
      horasDisponiveis: {
        val: '',
        isValid: true,
      },
      faixa: {
        val: '',
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.nome.val === '') {
        this.nome.isValid = false;
        this.formIsValid = false;
      }
      if (this.sobrenome.val === '') {
        this.sobrenome.isValid = false;
        this.formIsValid = false;
      }
      if (this.descricao.val === '') {
        this.descricao.isValid = false;
        this.formIsValid = false;
      }
      if (this.faixa.val === '') {
        this.faixa.isValid = false;
        this.formIsValid = false;
      }
      if (!this.horasDisponiveis.val || this.horasDisponiveis.val <= 0) {
        this.horasDisponiveis.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        nome: this.nome.val,
        sobrenome: this.sobrenome.val,
        desc: this.descricao.val,
        horas: this.horasDisponiveis.val,
        faixa: this.faixa.val,
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
.invalid textarea,
.invalid select {
  border: 1px solid red;
}
</style>
