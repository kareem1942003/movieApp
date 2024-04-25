import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";

const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
};

// eslint-disable-next-line react-refresh/only-export-components
export const globalContext = createContext(initialState);

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  // @ts-ignore
  // eslint-disable-next-line no-undef
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
  }, [state]);

  return (
    <globalContext.Provider
      value={{
        watchList: state.watchList,
        moviesDispatch: dispatch,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default ContextProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useMovieContext = () => {
  return useContext(globalContext);
};
