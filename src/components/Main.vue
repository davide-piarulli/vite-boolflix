<script>
import CardMovie from "./partials/CardMovie.vue";
import CardSeries from "./partials/CardSeries.vue";
import { store } from "../data/store";
export default {
  components: {
    CardMovie,
    CardSeries,
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
        :original_title="movie.original_title"
        :original_language="movie.original_language"
        :vote="movie.vote_average"
        :overview="movie.overview"
        :img="movie.poster_path"
      />
    </div>
  </div>
  <div class="container">
    <h2>SERIE TV</h2>
    <div class="row row-col-4 py-3"></div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss";
</style>
