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
      <div class="container-fluid">
        <div class="row row-cols-1 row-cols-md-2 justify-content-around w-100">
          <div class="col d-flex">
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
            <ul
              class="nav d-flex justify-content-around justify-content-center align-content-center"
            >
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
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss";
header {
  background-color: black;
  .navbar {
    .nav-link {
      color: rgb(165, 165, 165);
    }
    li {
      display: inline-block;
    }
    h2 {
      color: white;
    }
  }
}
</style>
