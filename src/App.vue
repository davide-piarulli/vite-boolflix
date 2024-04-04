<script>
import axios from "axios";
import { store } from "./data/store";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {};
  },
  methods: {
    getMovies() {
      axios
        .get(store.apiUrl + "movie", {
          params: store.apiParams,
        })
        .then((result) => {
          store.moviesList = result.data.results;
          console.log(store.moviesList);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getSeries() {
      axios
        .get(store.apiUrl + "tv", {
          params: store.apiParams,
        })
        .then((result) => {
          store.seriesList = result.data.results;
          console.log(store.seriesList);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getMovies();
    this.getSeries();
  },
};
</script>

<template>
  <Header @toSearch="getMovies" />
  <Main />
</template>

<style lang="scss" scoped>
@use "./assets/scss/main.scss";
</style>
