import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";// O arquivo onde você criou o tema
import darkTheme from "./components/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <ThemeProvider theme={darkTheme}>

    <App />

  </ThemeProvider>


);
