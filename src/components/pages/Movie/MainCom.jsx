/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/variant";
// eslint-disable-next-line react/prop-types
const MainCom = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/original/";
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: 600,
        backgroundImage: `linear-gradient(to top, #1f5d78b3 1%, rgba(0, 0, 255, 0)),url(${imageUrl}${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: " top center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        key={movie.id}
        className="content"
        style={{
          color: "#fff",
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          padding: "20px",
        }}
      >
        <img
          loading="lazy"
          className="imgPoster"
          style={{ borderRadius: "10px" }}
          src={`${imageUrl}${movie.poster_path}`}
          alt="Sorry"
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h1 className="title">{movie.original_title}</h1>
          <h5>{movie.release_date}</h5>
          <p>overview : {movie.overview} </p>
          <p>language : {movie.original_language} </p>
          <Button
            onClick={() => {
              navigate(`/details/${movie.id}`);
            }}
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
  );
};

export default MainCom;
