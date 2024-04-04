<script>
import { store } from "../../data/store";
export default {
  props: {
    cardObj: Object,
  },
};
</script>

<template>
  <div class="col py-2">
    <h3>{{ type }}</h3>
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img :src="poster_path" class="w-100" :alt="title" />
        </div>
        <div class="flip-card-back">
          <p><strong>Titolo</strong>: {{ cardObj.title || cardObj.name }}</p>
          <p>
            <strong>Titolo originale</strong>:
            {{ cardObj.original_title || cardObj.original_name }}
          </p>
          <p><strong>Lingua</strong>: {{ cardObj.original_language }}</p>
          <p><strong>Voto</strong>: {{ cardObj.vote }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/main.scss";
p {
  color: black;
}
</style>
