<script>
import CardMovie from "./partials/CardMovie.vue";
import { store } from "../data/store";
export default {
  components: {
    CardMovie,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <h2>FILM</h2>
    <div class="row row-col-4 py-3">
      <CardMovie
        v-for="movie in store.moviesList"
        :key="movie.id"
        :title="movie.title"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss";
</style>
