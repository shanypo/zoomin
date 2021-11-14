import axios from "axios";
import { serviceStorage } from "./storageService";

export const moviesService = {
  getData,
  setIsFavorite,
};

const STAR_WARS_URL = "https://swapi.dev/api/films/";
const KEY = "MOVIES";
async function getData() {
  const movies =
    serviceStorage.loadFromStorage(KEY) || (await axios.get(STAR_WARS_URL));
  serviceStorage.storeToStorage(KEY, movies);
  return movies.data.results;
}

function setIsFavorite(favoriteMovie) {
  let movies = serviceStorage.loadFromStorage(KEY);
  let idx = movies.data.results.findIndex(
    (movie) => movie.title === favoriteMovie.title
  );
  movies.data.results.splice(idx, 1, favoriteMovie);
  serviceStorage.storeToStorage(KEY, movies);
}
