<script>
import axios from "axios";
import { store } from "./data/store";
import Header from "./components/Header.vue";
import CardsContainer from "./components/CardsContainer.vue";
export default {
  components: {
    Header,
    CardsContainer,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getApi(type) {
      axios
        .get(store.apiUrl + type, {
          params: store.apiParams,
        })
        .then((res) => {
          store[type] = res.data.results;
          console.log(store[type]);
        });
    },
    startSearch() {
      this.getApi("movie");
      this.getApi("tv");
    },
  },
  mounted() {
    this.startSearch();
  },
};
</script>

<template>
  <Header @startSearch="startSearch" />
  <CardsContainer type="movie" v-if="store.movie.length > 0" />
  <CardsContainer type="tv" v-if="store.tv.length > 0 "/>
</template>

<style lang="scss" scoped>
@use "./assets/scss/main.scss";
</style>
