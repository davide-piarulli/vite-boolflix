<script>
import { store } from '../../data/store';
export default {
  props: {
    title: String,
    original_title: String,
    original_language: String,
    vote: Number,
    // overview: String,
    img: String,
  },
};
</script>

<template>
  <div class="col py-2">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img :src="poster_path" class="w-100" :alt="title" />
        </div>
        <div class="flip-card-back">
          <p><strong>Titolo</strong>: {{ title }}</p>
          <p><strong>Titolo originale</strong>: {{ original_title }}</p>
          <p><strong>Lingua</strong>: {{ original_language }}</p>
          <p><strong>Voto</strong>: {{ vote }}</p>
          <!-- <p><strong>Trama</strong>: {{ overview }}</p> -->
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
