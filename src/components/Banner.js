import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1e1e1e",
        py: 5,
        textAlign: "center",
        color: "#FFFFFF",
        borderBottom: "1px solid #333",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", color: "#1DB954" }}>
        Jogos em Destaque
      </Typography>
      <Typography variant="h6">
        Não perca os maiores confrontos de hoje!
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 2, backgroundColor: "#1DB954", color: "#000000" }}
      >
        Ver Mais
      </Button>
    </Box>
  );
};

export default Banner;
