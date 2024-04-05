<script>
export default {
  props: {
    cardObj: Object,
  },
  data() {
    return {
      isFlag: true,
      isPoster: true,
    };
  },
  methods: {
    getImage(image) {
      return new URL(`../../assets/img/${image}.png`, import.meta.url).href;
    },
    ratingStars() {
      return Math.round(this.cardObj.vote_average / 2);
    },
  },
};
</script>

<template>
  <div class="col py-2">
    <h3>{{ type }}</h3>
    <div class="flip-container">
      <div class="flip-card card">
        <div class="flip-card-front">
          <img
            v-if="isPoster"
            @error="isPoster = false"
            :src="`https://image.tmdb.org/t/p/w342/${cardObj.poster_path}`"
            :alt="cardObj.name || cardObj.original_title"
            class="w-100"
          />
          <img
            v-else
            :src="`../../../src/assets/img/no-image.png`"
            :alt="cardObj.name || cardObj.original_title"
            class="w-100"
          />
        </div>
        <div class="flip-card-back">
          <!-- TITOLI -->
          <p><strong>Titolo</strong>: {{ cardObj.title || cardObj.name }}</p>
          <p>
            <strong>Titolo originale</strong>:
            {{ cardObj.original_title || cardObj.original_name }}
          </p>
          <!-- /TITOLI -->

          <!-- BANDIERE -->
          <p v-if="isFlag">
            <strong>Lingua</strong>:
            <img
              :src="getImage(cardObj.original_language)"
              @error="isFlag = false"
              :alt="cardObj.original_language"
              class="flag"
            />
          </p>
          <p v-else><strong>Lingua</strong>:{{ cardObj.original_language }}</p>
          <!-- /BANDIERE -->

          <!-- STELLINE -->
          <p>
            <strong>Voto</strong>:
            <span v-for="star in ratingStars()" :key="star">
              <i class="fa-solid fa-star star full"></i>
            </span>

            <span v-for="star in 5 - ratingStars()" :key="star">
              <i class="fa-regular fa-star star empty"></i>
            </span>
          </p>
          <!-- /STELLINE -->

          <p class="overview"><strong>Trama</strong>: {{ cardObj.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/main.scss";
.flip-container {
  height: 450px;
  &:hover .card {
    transform: rotateY(180deg);
  }
  .card {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1s;
    transform-style: preserve-3d;
  }
}
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  align-items: center;
  justify-content: center;
}
.flip-card-back {
  transform: rotateY(180deg);
  .flag {
    width: 32px;
  }
  .star.full {
    color: yellow;
  }
  .star.empty {
    color: black;
  }
  .overview {
    overflow-y: auto;
    height: 62%;
  }
}
</style>
