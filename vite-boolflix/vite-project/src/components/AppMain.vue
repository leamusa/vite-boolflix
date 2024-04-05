<template>
  <main>
    <div class="container">
      <CardComponent
        v-for="movie in store.listMovies.results"
        :key="movie.id"
        :card="movie"
        v-if="store.listMovies"
      />
      <CardComponent
        v-for="moviesFound in store.MoviesFound"
        :key="moviesFound.id"
        :card="moviesFound"
      />
    </div>
  </main>
</template>

<script>
import axios from "axios"; // Import Axios library

import CardComponent from "../components/CardComponent.vue";
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
  mounted() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      console.log(store.apiUrl); // Print the API url
      axios
        .get(store.apiUrl) //  GET request to the API
        .then((result) => {
          let listMovies = result.data; // Save the movie data results
          console.log(listMovies); // Print the movie data to the console
          this.store.listMovies = listMovies; // Update the list of movies (in store)with the data obtained from the API call
        })
        .catch((error) => {
          console.log(error); // Handle errors during the API call
        });
    },
  },
};
</script>

<style lang="scss"></style>
