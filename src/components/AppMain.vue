<template>
  <main>
    <div class="search-container">
      <input type="text" v-model="searchQuery" />
      <button @click="searchMovies">Search</button>
    </div>
    <div v-if="movies.length">
      <CardComponent v-for="movie in movies" :key="movie.id" :card="movie" />
    </div>
    <div v-else>
      <p>No movies available.</p>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import CardComponent from "../components/CardComponent.vue";
import { store } from "../data/store";

export default {
  name: "AppMain",
  components: { CardComponent },
  data() {
    return { movies: [], searchQuery: "" };
  },
  methods: {
    async searchMovies() {
      if (!this.searchQuery.trim()) return;
      const url = `${store.baseUrl}/search/movie`;
      const params = {
        api_key: store.apiParams.api_key,
        query: this.searchQuery.trim(),
        language: store.apiParams.language,
      };
      try {
        const response = await axios.get(url, { params });
        this.movies = response.data.results;
      } catch (error) {
        console.error("Error during search:", error);
        alert("An error occurred during the search. Please try again.");
      } finally {
        this.searchQuery = "";
      }
    },
  },
};
</script>

<style scoped>
.search-container {
  margin-bottom: 20px;
}
.search-container input {
  width: 200px;
  padding: 5px;
  margin-right: 10px;
}
.search-container button {
  padding: 5px 10px;
}
</style>
