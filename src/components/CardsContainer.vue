<script>
import Card from "./partials/Card.vue";
import { store } from "../data/store";
export default {
  components: {
    Card,
  },
  props: {
    type: String,
  },
  data() {
    return {
      store,
    };
  },
  computed: {
    title() {
      return this.type === "movie" ? "Film" : "Serie TV";
    },
  },
};
</script>

<template>
  <div class="container">
    <h2>{{ title }}</h2>
    <div class="row row-cols-4 py-3">
      <Card v-for="card in store[type]" :key="card.id" :cardObj="card" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss";
</style>
