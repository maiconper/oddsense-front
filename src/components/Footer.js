import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        py: 3,
        color: "#fff",
        textAlign: "center",
        width: "100%", // Garante que ocupa toda a largura
        boxSizing: "border-box",
      }}
    >
      <Typography variant="body2">
        &copy; 2024 OddSense. Todos os direitos reservados.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mt: 1,
        }}
      >
        <Button href="#" sx={{ color: "#76c893" }}>
          Contato
        </Button>
        <Button href="#" sx={{ color: "#76c893" }}>
          Sobre Nós
        </Button>
        <Button href="#" sx={{ color: "#76c893" }}>
          Política de Privacidade
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
