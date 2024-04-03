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
    getApi() {
      axios
        // GET base
        .get(store.apiUrl, {
          params: store.queryparam,
        })
        // GET con chiave dinamica
        // .get(`${store.apiUrl}?api_key=${store.apiKey}`, {
        //   params: {
        //     query: store.tosearch,
        //     language: "it-IT",
        //   },
        // })
        .then((result) => {
          store.moviesList = result.data.results;
          console.log(store.moviesList);
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
  <Header @toSearch="getApi" />
  <Main />
</template>

<style lang="scss" scoped>
@use "./assets/scss/main.scss";
</style>
