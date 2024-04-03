import { reactive } from "vue";

export const store = reactive({
  apiUrl:
    "https://api.themoviedb.org/3/movie/550?api_key=ebfa26eb4296a97b334871864071019e",

  listMovies: [],
});
