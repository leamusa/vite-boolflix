<script>
import CardComponent from "../components/Card.Component.vue";
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
    <CardComponent v-for="Movies in store.listMovies.results" :card="Movies" />
  </main>
</template>

<style lang="scss"></style>
