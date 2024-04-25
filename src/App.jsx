import { Box, ThemeProvider, createTheme } from "@mui/material";
import "./index.css";
import Header from "./components/Header";
import { getDesignTokens } from "./Theme";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ContextProvider from "../src/components/Context/GlobalContext";

// @ts-ignore

function App() {
  const [mode, setMode] = React.useState(
    localStorage.getItem("mode") == null
      ? "light"
      : localStorage.getItem("mode")
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <Box>
          <Header setMode={setMode} />
          <Outlet />
          <Footer />
        </Box>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
