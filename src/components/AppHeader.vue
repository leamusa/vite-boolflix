<script>
import { store } from "../data/store";

export default {
  name: "AppHeader",

  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <div class="logo">
      <h1>Boolflix</h1>
    </div>
    <div class="menu">
      <nav>
        <ul>
          <li @click="$emit('navToHome')">Home</li>
          <li @click="$emit('navToTV')">Serie TV</li>
          <li @click="$emit('navToMovies')">Film</li>
          <li>La mia lista</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  margin: 30px;
  h1 {
    color: red;
    font-size: 40px;
  }

  ul {
    display: flex;
  }
  li {
    margin: 20px;
    list-style-type: none;
    font-size: 20px;
  }
}
</style>
