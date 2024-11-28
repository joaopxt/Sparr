<template>
  <section>
    <base-card>
      <h2>Page not found</h2>
      <p>
        This page could not be found - volte ao
        <router-link to="/alunos">início</router-link>
      </p>
    </base-card>
  </section>
</template>

<script>
import BaseCard from '../components/ui/BaseCard.vue';
export default {
  components: { BaseCard },
};
</script>

<style></style>
