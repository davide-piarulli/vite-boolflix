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
    <nav class="navbar">
      <div class="container">
        <div class="row d-flex">
          <div class="col-6 d-flex">
            <a class="navbar-brand" href="#">
              <img
                src="/src/assets/img/favicon_io/android-chrome-512x512.png"
                alt="Logo"
                width="50"
                height="50"
                class="d-inline-block align-text-top"
              />
              <h2 class="d-inline-block">BOOLFLIX</h2>
            </a>
            <ul class="navbar-nav d-flex">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Series</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
          <div class="col-6 d-flex">
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
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss";
header {
  background-color: black;
  .navbar {
    background-color: black;
    // height: 100px;
    .nav-link {
      color: rgb(165, 165, 165);
    }
    h2 {
      color: white;
    }
  }
}
</style>
