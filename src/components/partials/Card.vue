<script>
export default {
  props: {
    cardObj: Object,
  },
  methods:{
    flag(){

    }
  }
};
</script>

<template>
  <div class="col py-2">
    <h3>{{ type }}</h3>
    <div class="flip-card card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="" class="w-100" :alt="title" />
        </div>
        <div class="flip-card-back">
          <p><strong>Titolo</strong>: {{ cardObj.title || cardObj.name }}</p>
          <p>
            <strong>Titolo originale</strong>:
            {{ cardObj.original_title || cardObj.original_name }}
          </p>
          <p><strong>Lingua</strong>: 
            <!-- <img :src="" alt="">  -->
          </p>
          <p><strong>Voto</strong>: {{ cardObj.vote_average }}</p>
          <p><strong>Trama</strong>: {{ cardObj.overview }}</p>
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
