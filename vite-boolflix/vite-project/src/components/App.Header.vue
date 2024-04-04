<script>
export default {
  name: "AppHeader",
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
