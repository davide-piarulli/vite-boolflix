<script>
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {},
};
</script>

<template>
  <header>
    <div class="container h-100">
      <div class="row d-flex h-100">
        <div class="col title">
          <h1>BOOLFLIX</h1>
        </div>
        <div class="col d-flex">
          <input
            v-model.trim="store.apiParams.query"
            @keyup.enter="$emit('startSearch')"
            type="text"
            class="form-control w-25"
            placeholder="Cerca un Film"
          />
          <button @click="$emit('startSearch')" class="btn btn-danger">
            Search
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss";
header {
  height: 100px;
  background-color: black;
  h1 {
    color: white;
  }
  input,
  button {
    height: 50%;
  }
}
</style>
