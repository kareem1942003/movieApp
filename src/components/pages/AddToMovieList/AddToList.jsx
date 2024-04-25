import { Button, useTheme } from "@mui/material";
import { useMovieContext } from "../../Context/GlobalContext";
import { useNavigate } from "react-router-dom";
import * as actions from "../../Context/ActionType";

const AddToList = () => {
  const MovieContext = useMovieContext();
  const theme = useTheme();
  const navigate = useNavigate();
  const imageUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      style={{
        padding: "10px 30px",
        marginTop: "50px",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          color: theme.palette.info.main,
        }}
      >
        <h2>MY WATCHLIST</h2>
        <span
          style={{
            backgroundColor: theme.palette.info.main,
            padding: "10px",
            borderRadius: "10px",
            color: theme.palette.background.default,
            fontWeight: "bold",
          }}
        >
          {MovieContext.watchList.length} Movies
        </span>
      </div>
      <div style={{ padding: "10px 30px" }}>
        {MovieContext.watchList.length > 0 ? (
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
            {MovieContext.watchList.map((movie) => {
              return (
                <li
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  key={movie.id}
                >
                  <img
                    loading="lazy"
                    style={{ width: "200px" }}
                    src={`${imageUrl}${movie.poster_path}`}
                    alt=""
                  />
                  <Button
                    onClick={() => {
                      navigate(`/details/${movie.id}`);
                    }}
                    fullWidth
                    variant="contained"
                  >
                    Watch
                  </Button>
                  <Button
                    onClick={() => {
                      MovieContext.moviesDispatch({
                        type: actions.REMOVE_FROM_WARCH_LIST,
                        payload: movie.id,
                      });
                    }}
                    fullWidth
                    variant="contained"
                  >
                    Remove
                  </Button>
                </li>
              );
            })}
          </ul>
        ) : (
          <h1
            style={{
              marginTop: "30px",
              textAlign: "center",
              color: theme.palette.info.main,
            }}
          >
            No Movie Found
          </h1>
        )}
      </div>
    </div>
  );
};

export default AddToList;
