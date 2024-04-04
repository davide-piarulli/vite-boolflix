import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/search/",
  apiParams: {
    api_key: "4de2e4abbe2b16645cae6c104cd97b53",
    language: "it - IT",
    query: "",
  },
  movie: [],
  tv: [],
});
