import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "#1DB954" }}
        >
          OddSense
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {[
            "Jogos de Hoje",
            "Próximos Jogos",
            "Favoritos",
            "Configurações",
          ].map((item) => (
            <Button
              key={item}
              sx={{
                color: "#FFFFFF",
                textTransform: "none",
                "&:hover": { color: "#1DB954" },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#1e1e1e",
              borderRadius: 1,
              pl: 1,
            }}
          >
            <InputBase
              placeholder="Buscar por times ou jogos..."
              sx={{ ml: 1, flex: 1, color: "#FFFFFF" }}
            />
            <IconButton>
              <SearchIcon sx={{ color: "#1DB954" }} />
            </IconButton>
          </Box>
          <Button
            variant="outlined"
            sx={{ color: "#1DB954", borderColor: "#1DB954" }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#1DB954", color: "#000000" }}
          >
            Registro
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
