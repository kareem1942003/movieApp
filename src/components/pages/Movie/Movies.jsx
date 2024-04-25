/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import MoviesCom from "./MoviesCom";
import { Box, Button, useTheme } from "@mui/material";
import MainCom from "../Movie/MainCom";
import Slider from "./Slider";

const api = "42bc9d6ddd851cab5049851cba11042d";

// const baseUrl = "https://api.themoviedb.org/3?api_key=";
// const movieUrl = "/discover/movie";
// const imageUrl = "https://image.tmdb.org/t/p/w500/";
// const searchUrl = `/search/movie?query=`;
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization: `Bearer ${tokeApi} `,
//   },
// };

const Movies = () => {
  const [movies, setMoveis] = useState([]);
  const [countPage, setCountPage] = useState(1);
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api}&page=${countPage}`;
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        if (res.data.results) {
          setMoveis(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countPage]);

  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: "5px 0",
        marginTop: "50px",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {movies.map((movie, i) => <MainCom key={i} movie={movie} />).splice(2, 1)}
      <Slider />

      <Box>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "15px 0",
          }}
        >
          {movies.length > 0 ? (
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
                listStyle: "none",
              }}
            >
              {movies.map((movie) => (
                <li key={movie.id}>
                  <MoviesCom movie={movie} />
                </li>
              ))}
            </ul>
          ) : (
            <h1
              style={{
                color: theme.palette.info.main,
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              Not Found
            </h1>
          )}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "15px 0",
          }}
        >
          <Button
            color="info"
            variant="contained"
            onClick={() => setCountPage(countPage + 1)}
          >
            Load More..
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Movies;
