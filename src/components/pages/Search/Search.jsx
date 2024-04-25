// @ts-nocheck
import { Box, IconButton, Paper, useTheme } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import MovieResult from "./MovieResult";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/variant";
// const api = "42bc9d6ddd851cab5049851cba11042d";
const tokeApi =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmJjOWQ2ZGRkODUxY2FiNTA0OTg1MWNiYTExMDQyZCIsInN1YiI6IjY1ZWU3YWU1MTNhZjVmMDE2MzVhMDM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.io7tAXg4gXg-tOOIFYeT-dbhf2CP4-vQrQ3ThHec_Z0";
// const baseUrl = "https://api.themoviedb.org/3?api_key=";
// const movieUrl = "/discover/movie";
// const imageUrl = "https://image.tmdb.org/t/p/w500/";
const searchUrl = `/search/movie?query=`;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${tokeApi} `,
  },
};
const Search = () => {
  const theme = useTheme();
  const [searchValue, setSearchValue] = useState("");
  const [moveis, setMoveis] = useState([]);
  const [countPage, setCountPage] = useState(1);

  const apiUrl = `https://api.themoviedb.org/3${searchUrl}${searchValue}&page=${countPage}`;
  useEffect(() => {
    axios
      .get(apiUrl, options)
      .then((res) => {
        if (res.data.results) {
          setMoveis(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, countPage]);

  return (
    <Paper
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: "20px",
          borderRadius: "0px",
        }}
      >
        <input
          value={searchValue}
          onChange={(e) => {
            // @ts-ignore
            setSearchValue(e.target.value);
          }}
          style={{
            width: "50%",
            padding: "8px 10px",
            borderRadius: "5px",
            fontSize: "17px",
            outline: "none",
            border: "none",
            backgroundColor: theme.palette.divider,
            color: theme.palette.mode == "dark" ? "#fff" : "#000",
          }}
          placeholder="Search Movies"
          type="text"
        ></input>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "20px 0",
          }}
        >
          <IconButton
            sx={{ backgroundColor: theme.palette.divider }}
            onClick={() =>
              countPage <= 1 ? null : setCountPage(countPage - 1)
            }
          >
            <ArrowLeftRoundedIcon />
          </IconButton>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "30px",
              height: "30px",
              padding: "5px",
              backgroundColor: "#29b6f6",
              borderRadius: "50%",
            }}
          >
            {countPage}
          </p>
          <IconButton
            sx={{ backgroundColor: theme.palette.divider }}
            onClick={() => setCountPage(countPage + 1)}
          >
            <ArrowRightRoundedIcon />
          </IconButton>
        </div>
        <Box
          sx={{
            padding: "20px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {moveis.length > 0 ? (
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "40px",
                justifyContent: "center",
                alignItems: "center",
                listStyle: "none",
              }}
            >
              {moveis.map((movie) => (
                <motion.li
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  key={movie.id}
                >
                  <MovieResult movie={movie} />
                </motion.li>
              ))}
            </ul>
          ) : (
            <h1>Not Found</h1>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default Search;
