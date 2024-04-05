import { reactive } from "vue";

export const store = reactive({
  apiUrl:
    "https://api.themoviedb.org/3/movie/popular?api_key=6d84d7352f8b6a3a28b7a098f5be2195",
  apiUrlSearch:
    "https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query",

  listMovies: [],
  searchMoviesFound: "",
});
