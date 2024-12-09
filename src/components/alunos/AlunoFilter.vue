<template>
  <base-card>
    <h2>Ache seu sparr</h2>
    <span class="filter-option">
      <input type="checkbox" id="branca" checked @change="setFilter" />
      <label for="branca">Branca</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="azul" checked @change="setFilter" />
      <label for="azul">Azul</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="roxa" checked @change="setFilter" />
      <label for="roxa">Roxa</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="marrom" checked @change="setFilter" />
      <label for="marrom">Marrom</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="preta" checked @change="setFilter" />
      <label for="preta">Preta</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        branca: true,
        azul: true,
        roxa: true,
        marrom: true,
        preta: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
