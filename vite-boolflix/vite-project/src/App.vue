<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

import { store } from "./data/store";

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
  mounted() {
    this.getMovies(); // Chiamata alla funzione per ottenere i film quando il componente è montato
  },
  methods: {
    async getMovies() {
      try {
        const response = await axios.get(store.apiUrl); // Esegue la richiesta GET all'API
        this.store.listMovies = response.data; // Aggiorna la lista dei film nello store Vuex con i dati ottenuti dalla chiamata API
      } catch (error) {
        console.error("Error fetching movies:", error); // Gestisce eventuali errori durante la chiamata API
      }
    },
  },
};
</script>

<template>
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss"></style>
