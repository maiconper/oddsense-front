import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const GamesToday = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Jogos de Hoje
      </Typography>
      <Grid container spacing={3}>
        {[1, 2, 3].map((game) => (
          <Grid item xs={12} md={4} key={game}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Time A vs Time B
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Campeonato Brasileiro
                </Typography>
                <Typography variant="subtitle2" sx={{ mt: 1 }}>
                  Horário: 16:00
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  startIcon={<StarBorderIcon />}
                  sx={{ color: "#76c893" }}
                >
                  Favoritar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GamesToday;
