/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Button, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/variant";

const DetailsCom = () => {
  const movieId = useParams();
  const theme = useTheme();

  const tokeApi =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmJjOWQ2ZGRkODUxY2FiNTA0OTg1MWNiYTExMDQyZCIsInN1YiI6IjY1ZWU3YWU1MTNhZjVmMDE2MzVhMDM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.io7tAXg4gXg-tOOIFYeT-dbhf2CP4-vQrQ3ThHec_Z0";
  // const api = "42bc9d6ddd851cab5049851cba11042d";
  const imageUrl = "https://image.tmdb.org/t/p/original/";
  // const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api}`;
  const [movie, setMovei] = useState([]);
  const [video, setVideo] = useState();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId.movieId}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${tokeApi}`,
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((movie) => setMovei(movie))
      .catch((err) => console.error("error:" + err));

    const getVideo = async () => {
      const urlV =
        await `https://api.themoviedb.org/3/movie/${movieId.movieId}/videos`;
      const optionsV = await {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${tokeApi}`,
        },
      };

      fetch(urlV, optionsV)
        .then((res) => res.json())
        .then((video) => setVideo(video.results[0]))
        .catch((err) => console.error("error:" + err));
    };

    getVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div
        // @ts-ignore
        key={movie.id}
        style={{
          minHeight: 600,
          marginTop: "50px",
          // @ts-ignore
          backgroundImage: `linear-gradient(to top, #1f5d78b3 1%, rgba(0, 0, 255, 0)),url(${imageUrl}${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="content"
          style={{
            color: "#fff",
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            padding: "30px 0",
          }}
        >
          <img
            className="imgPoster"
            style={{ borderRadius: "10px" }}
            // @ts-ignore
            src={`${imageUrl}${movie.poster_path}`}
            alt="Sorry"
          />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <h2 className="title">
              {
                // @ts-ignore
                movie.original_title
              }
            </h2>
            <h5>
              {
                // @ts-ignore
                movie.release_date
              }
            </h5>
            <p>
              overview :{" "}
              {
                // @ts-ignore
                movie.overview
              }{" "}
            </p>
            <p>
              language :{" "}
              {
                // @ts-ignore
                movie.original_language
              }{" "}
            </p>
            <p>
              {
                // @ts-ignore
                movie.runtime
              }{" "}
              min
            </p>
            <Button
              sx={{ width: "fit-content" }}
              variant="contained"
              color="info"
            >
              <PlayCircleOutlineRoundedIcon sx={{ pr: "5px" }} />
              Watch Traial
            </Button>
          </div>
        </motion.div>
      </div>
      <div
        className="video"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: theme.palette.background.default,
          minHeight: "95vh",
          padding: "20px 0",
        }}
      >
        {" "}
        <h1
          style={{
            fontSize: "40px",
            margin: "20px 0",
            color: theme.palette.info.main,
          }}
        >
          Happy Time
        </h1>
        {video != undefined ? (
          <YouTube
            iframeClassName="youtubeVideo"
            opts={{ width: "700px", height: "400px" }}
            // @ts-ignore
            key={video.id}
            // @ts-ignore
            videoId={video.key}
          />
        ) : null}
      </div>
    </div>
  );
};

export default DetailsCom;
