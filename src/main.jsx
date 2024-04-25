import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Movies from "../src/components/pages/Movie/Movies";
import Search from "../src/components/pages/Search/Search";
import DetailsCom from "./components/pages/Movie/DetailsCom";
import AddToList from "./components/pages/AddToMovieList/AddToList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Movies />} />
      <Route path="*" element={<Movies />} />
      <Route path="movies" element={<Movies />}>
        <Route path="details/:movieId" element={<DetailsCom />} />
      </Route>
      <Route path="search" element={<Search />} />
      <Route path="details/:movieId" element={<DetailsCom />}></Route>
      <Route path="watch_list" element={<AddToList />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
