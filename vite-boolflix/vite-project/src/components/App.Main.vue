<script>
import CardComponent from "./Card.Component.vue";
import { store } from "../data/store";
export default {
  name: "AppMain",
  components: {
    CardComponent,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <div class="container"></div>
    <CardComponent v-for="film in store.listMovies.results" :card="Movies" />
  </main>
</template>

<style lang="scss"></style>
