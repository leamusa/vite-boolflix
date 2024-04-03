<template>
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./data/store"; // Correction: Fixing the path to the store module

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getMovies() {
      console.log(this.store.apiUrl);
      axios
        .get(this.store.apiUrl)
        .then((result) => {
          this.store.listMovies = result.data;
          console.log(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getMovies();
  },
};
</script>

<style lang="scss">
@import "./styles/general.scss";
</style>
