import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const UpcomingGames = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Próximos Jogos
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
        <Box sx={{ flex: 1, display: "flex", overflowX: "auto", gap: 2 }}>
          {[1, 2, 3, 4].map((game) => (
            <Card
              key={game}
              sx={{ minWidth: 200, borderRadius: 2, boxShadow: 3 }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Time X vs Time Y
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Liga dos Campeões
                </Typography>
                <Typography variant="subtitle2">Horário: 19:00</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <IconButton>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default UpcomingGames;
