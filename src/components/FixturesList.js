import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  CircularProgress,
} from "@mui/material";

const FixturesList = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);

  // Chamada à API do backend
  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/fixtures/today"
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados das fixtures.");
        }
        const data = await response.json();
        setFixtures(data);
      } catch (error) {
        console.error("Erro na chamada da API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFixtures();
  }, []);

  // Renderização
  if (loading) {
    return (
      <Container sx={{ mt: 4, textAlign: "center", color: "#FFFFFF" }}>
        <CircularProgress color="primary" />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Carregando jogos do dia...
        </Typography>
      </Container>
    );
  }

  if (fixtures.length === 0) {
    return (
      <Container sx={{ mt: 4, textAlign: "center", color: "#FFFFFF" }}>
        <Typography variant="h6">Nenhum jogo encontrado para hoje.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "#FFFFFF", mb: 3 }}
      >
        Jogos de Hoje
      </Typography>
      <Grid container spacing={3}>
        {fixtures.map((fixture) => (
          <Grid item xs={12} md={6} key={fixture.id}>
            <Card
              sx={{ backgroundColor: "#1e1e1e", borderRadius: 2, boxShadow: 3 }}
            >
              <CardContent>
                <Grid container alignItems="center" spacing={2}>
                  {/* Time Casa */}
                  <Grid item xs={5} sx={{ textAlign: "center" }}>
                    <Avatar
                      src={fixture.homeTeam.logo}
                      alt={fixture.homeTeam.name}
                      sx={{ width: 64, height: 64, margin: "0 auto" }}
                    />
                    <Typography variant="h6" sx={{ color: "#FFFFFF", mt: 1 }}>
                      {fixture.homeTeam.name}
                    </Typography>
                  </Grid>

                  {/* Placar */}
                  <Grid item xs={2} sx={{ textAlign: "center" }}>
                    <Typography variant="h4" sx={{ color: "#FFFFFF" }}>
                      {fixture.homeTeam.winner ? "🏆" : ""}{" "}
                      {fixture.homeTeam.winner === false ? " " : ""}
                      {fixture.awayTeam.winner ? "🏆" : ""}
                    </Typography>
                  </Grid>

                  {/* Time Visitante */}
                  <Grid item xs={5} sx={{ textAlign: "center" }}>
                    <Avatar
                      src={fixture.awayTeam.logo}
                      alt={fixture.awayTeam.name}
                      sx={{ width: 64, height: 64, margin: "0 auto" }}
                    />
                    <Typography variant="h6" sx={{ color: "#FFFFFF", mt: 1 }}>
                      {fixture.awayTeam.name}
                    </Typography>
                  </Grid>
                </Grid>

                {/* Informações Adicionais */}
                <Typography variant="body2" sx={{ color: "#B3B3B3", textAlign: "center", mt: 2 }}>
                  {fixture.league.name} - {fixture.statusLong}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#B3B3B3", textAlign: "center", mt: 1 }}
                >
                  Horário:{" "}
                  {new Date(fixture.date).toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Typography>
                {fixture.venue?.name && fixture.venue?.city && (
                  <Typography
                    variant="body2"
                    sx={{ color: "#B3B3B3", textAlign: "center", mt: 1 }}
                  >
                    Estádio: {fixture.venue.name}, {fixture.venue.city}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FixturesList;
