import { moviesService } from "../../services/moviesService";

export function loadMoviesData() {
  return async (dispatch) => {
    try {
      const moviesData = await moviesService.getData();
      dispatch({ type: "SET_BITCOIN_DATA", moviesData });
    } catch (err) {
      console.log(err);
    }
  };
}
