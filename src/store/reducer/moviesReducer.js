const INITIAL_STATE = {
  moviesData: [],
};

export function moviesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_MOVIES_DATA":
      return {
        ...state,
        moviesData: action.moviesData,
      };
    default:
      return state;
  }
}
