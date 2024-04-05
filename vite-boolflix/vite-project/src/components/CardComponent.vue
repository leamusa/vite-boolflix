<script>
export default {
  name: "CardComponent",
  props: {
    card: Object,
  },
  methods: {
    getUrlimg() {
      if (this.card && this.card.poster_path) {
        let url = "https://image.tmdb.org/t/p/original";
        url += this.card.poster_path;
        return url;
      } else {
        return "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png";
      }
    },
  },
};
</script>

<template>
  <div class="sc-card col-3">
    <img :src="getUrlimg()" alt="" />

    <!--  -->
    <div class="change" v-if="card">
      <div class="text">
        <h4>Title:{{ card.title }}</h4>
        <h3>Title Original:{{ card.original_title }}</h3>
        <p>Language:{{ card.original_language }}</p>
        <p>Vote:{{ card.vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<style>
img {
  width: 100px;
}
</style>
