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
.sc-card {
  flex-basis: 25%;
  min-height: 300px;
  padding: 15px;
  text-align: center;
  position: relative;

  img {
    max-width: 300px;
    display: flex;
  }

  &:hover .change {
    opacity: 5;
    border: 1px solid white;
  }

  .change {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.445);
  }

  .text {
    font-size: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: left;
  }
}
</style>
