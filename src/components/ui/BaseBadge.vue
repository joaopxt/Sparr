<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.branca {
  background-color: rgb(236, 236, 236);
  color: #000000;
}

.azul {
  background-color: rgb(116, 149, 255);
  color: rgb(14, 30, 255);
}

.roxa {
  background-color: rgb(158, 116, 255);
  color: rgb(117, 1, 163);
}

.marrom {
  background-color: #8d723f;
  color: rgb(252, 143, 1);
}

.preta {
  background-color: #272727;
  color: #f1f1f1;
}
</style>
