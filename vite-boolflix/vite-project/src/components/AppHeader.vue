<script>
import { store } from "../data/store";
import axios from "axios";
export default {
  name: "AppHeader",

  data() {
    return {
      store,
      search: "",
    };
  },
  methods: {
    search() {
      let apiUrlsearchUser = store.apiUrlSearch + this.search;

      axios
        .get(apiUrlsearchUser)
        .then((result) => {
          store.listMoviesFound = result.data;
          console.log(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <header>
    <div class="logo">
      <h1>Boolflix</h1>
    </div>
    <div class="search">
      <input type="text" v-model="store.searchText" />
      <button @click="searchMovies()">search</button>

      <ul>
        <li v-for="results in store.results">
          {{ results.original_title }}
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss"></style>
