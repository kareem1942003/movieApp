/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";

const imageUrl = "https://image.tmdb.org/t/p/w200/";
// eslint-disable-next-line react/prop-types
const MovieResult = ({ movie }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Card
      className="card"
      sx={{
        backgroundColor: theme.palette.divider,
        borderRadius: "10px",
      }}
    >
      <CardActionArea sx={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 0",
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
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.original_title}
          </Typography>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Button
              color="info"
              variant="contained"
              onClick={() => {
                navigate(`/details/${movie.id}`);
              }}
            >
              <ErrorOutlineRoundedIcon sx={{ pr: "5px" }} />
              Diteals
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieResult;
