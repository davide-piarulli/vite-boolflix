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
    return {
      // axios,
    };
  },
  methods: {
    getApi() {
      axios
        .get(`${store.apiUrl}?api_key=${store.apiKey}`, {
          params: {
            query: store.tosearch,
            language: "it-IT",
          },
        })
        .then((result) => {
          console.log(store.moviesList);
          store.moviesList = result.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <Header @startSearch="getApi" />
  <Main />
</template>

<style lang="scss" scoped>
@use "./assets/scss/main.scss";
</style>
