import * as actions from "./ActionType";
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TO_WARCH_LIST:
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    case actions.REMOVE_FROM_WARCH_LIST:
      return {
        ...state,
        watchList: state.watchList.filter((movie) => {
          return movie.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};
