/* eslint-disable react/prop-types */
import { Button, IconButton, Tooltip, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/variant";
import { useMovieContext } from "../../Context/GlobalContext";
import * as actions from "../../Context/ActionType";
import TurnedInNotRoundedIcon from "@mui/icons-material/TurnedInNotRounded";
import TurnedInRoundedIcon from "@mui/icons-material/TurnedInRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";

const imageUrl = "https://image.tmdb.org/t/p/w200/";
// eslint-disable-next-line react/prop-types
const MoviesCom = ({ movie }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const MovieContext = useMovieContext();

  const findMovie = MovieContext.watchList.find((o) => {
    return movie.id === o.id;
  });

  const watchListDisabled = findMovie === undefined ? false : true;

  return (
    <Card
      className="card"
      sx={{
        backgroundColor: theme.palette.divider,
        borderRadius: "10px",
      }}
    >
      <CardActionArea>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        >
          <img
            loading="lazy"
            className="img"
            style={{ borderRadius: "10px" }}
            // eslint-disable-next-line react/prop-types
            src={`${imageUrl}${movie.poster_path}`}
            // eslint-disable-next-line react/prop-types
            alt={movie.original_title}
          />
        </motion.div>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h6" component="div">
            {movie.original_title}
          </Typography>

          <div
            className="buttons"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Button
              onClick={() => {
                navigate(`/details/${movie.id}`);
              }}
              color="info"
              variant="contained"
            >
              <PlayCircleOutlineRoundedIcon sx={{ pr: "5px" }} />
              Watch
            </Button>
            <Button
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
              }}
              disabled={watchListDisabled}
            >
              {
                <Tooltip placement="top" title="Add To Watch List">
                  <IconButton
                    onClick={() => {
                      MovieContext.moviesDispatch({
                        type: actions.ADD_TO_WARCH_LIST,
                        payload: movie,
                      });
                    }}
                  >
                    {watchListDisabled == false ? (
                      <TurnedInNotRoundedIcon />
                    ) : (
                      <TurnedInRoundedIcon />
                    )}
                  </IconButton>
                </Tooltip>
              }
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MoviesCom;
