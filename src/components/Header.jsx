import { Box, IconButton, useTheme } from "@mui/material";
import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { SearchRounded } from "@mui/icons-material";

// eslint-disable-next-line react/prop-types
const Header = ({ setMode }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          }}
        >
          {" "}
          <div
            className="logoAndTitle"
            style={{ display: "flex", gap: "30px" }}
          >
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                color: theme.palette.info.main,
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault();
                navigate("movies");
              }}
            >
              K
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontWeight: "bold",
              }}
              className="links"
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                }}
                to="movies"
              >
                Movies
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                }}
                to="watch_list"
              >
                Watch List
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                }}
                to="search"
              >
                Search
              </Link>
            </div>
          </div>
          <div style={{ display: "flex" }} className="iconsHeaders">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "0 10px",
              }}
            >
              <IconButton
                onClick={() => {
                  navigate("search");
                }}
              >
                <SearchRounded />
              </IconButton>
            </div>
            <div>
              {theme.palette.mode === "light" ? (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    setMode((prevMode) =>
                      prevMode === "light" ? "dark" : "light"
                    );
                  }}
                  color="inherit"
                >
                  <NightlightRoundedIcon />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    setMode((prevMode) =>
                      prevMode === "light" ? "dark" : "light"
                    );
                  }}
                  color="inherit"
                >
                  <LightModeRoundedIcon />
                </IconButton>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
