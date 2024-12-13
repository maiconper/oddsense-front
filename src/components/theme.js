import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212", // Fundo principal
      paper: "#1e1e1e", // Cards e seções
    },
    text: {
      primary: "#FFFFFF", // Textos principais
      secondary: "#B3B3B3", // Textos secundários
    },
    primary: {
      main: "#1DB954", // Verde para botões e ícones principais
    },
    secondary: {
      main: "#666666", // Cinza médio para elementos secundários
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: { fontWeight: "bold", fontSize: "2.5rem", color: "#FFFFFF" },
    h2: { fontWeight: "bold", fontSize: "2rem", color: "#FFFFFF" },
    body1: { fontSize: "1rem", color: "#B3B3B3" },
    body2: { fontSize: "0.875rem", color: "#CCCCCC" },
  },
});

export default darkTheme;
