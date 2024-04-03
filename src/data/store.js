import { reactive } from "vue";

export const store = reactive({
  apiUrl:
    "https://api.themoviedb.org/3/search/movie?api_key=4de2e4abbe2b16645cae6c104cd97b53&query=ritorno",
  apiKey: "4de2e4abbe2b16645cae6c104cd97b53",
  moviesList: [],
  queryparam: {
    query: "",
  },
});
