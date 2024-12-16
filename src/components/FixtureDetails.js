import React from "react";
import { Box, Typography, Avatar, List, ListItem, ListItemText, Divider, Grid, ThemeProvider } from "@mui/material";
import darkTheme from "./theme";
import Bet from "./Bet";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";

const FixtureDetails = ({ fixture, handleBackToHome }) => {
    console.log("fixture: ", fixture);
    if (!fixture) return <Typography>Carregando detalhes do jogo...</Typography>;
    const betData = fixture.bet;
    const fixtureData = fixture.fixture;
    const { homeTeam, awayTeam, events, lineups, statistics, statusLong, date, venue } = fixtureData;



    events.sort((a, b) => a.elapsedTime - b.elapsedTime);

    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={{
                backgroundColor: "background.default", // Usa o fundo padrão do tema
                color: "text.primary", // Usa o texto primário do tema
                minHeight: "100vh",
                padding: "20px",
            }}>
                <button
                    onClick={handleBackToHome}
                    style={{
                        margin: "10px 0",
                        padding: "10px 20px",
                        backgroundColor: "primary.main", // Verde do tema
                        color: "text.primary", // Texto do tema
                        borderRadius: "5px",
                        ":hover": {
                            backgroundColor: "secondary.main", // Cinza do tema ao passar o mouse
                        },
                    }}
                >
                    Voltar
                </button>
                {/* Título */}
                <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "20px" }}>
                    {homeTeam.name} vs {awayTeam.name}
                </Typography>

                {/* Informações Básicas */}
                <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
                    <Typography variant="body1">Status: {statusLong}</Typography>
                    <Typography variant="body1">Data: {new Date(date).toLocaleString()}</Typography>
                    {venue && venue.name && (
                        <Typography variant="body1">
                            Local: {venue.name}, {venue.city}
                        </Typography>
                    )}

                </Box>

                <Divider sx={{ marginY: 2 }} />

                {/* Estatísticas */}
                <Typography variant="h5" sx={{ marginTop: "20px" }}>
                    Estatísticas e Odds
                </Typography>

                <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
                    {/* Estatísticas */}
                    {statistics.map((stat) => (
                        <Grid item xs={6} sm={4} md={3} lg={2} key={stat.team.id}>
                            <Box
                                sx={{
                                    textAlign: "center",
                                    padding: 1,
                                    backgroundColor: "#fff",
                                    borderRadius: "8px",
                                    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
                                }}
                            >
                                <Avatar src={stat.team.logo} alt={stat.team.name} sx={{ margin: "0 auto", width: 40, height: 40 }} />
                                <Typography variant="body1" sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                                    {stat.team.name}
                                </Typography>
                                <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>Posse: {stat.ballPossession}</Typography>
                                <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>Chutes: {stat.shotsOnGoal}</Typography>
                                <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>Faltas: {stat.fouls}</Typography>
                                <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>Escanteios: {stat.cornerKicks}</Typography>
                            </Box>
                        </Grid>
                    ))}

                    {/* Odds */}
                    {betData.map((item) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                            <Bet bet={item} />
                        </Grid>
                    ))}
                </Grid>



                <Divider sx={{ marginY: 2 }} />

                {/* Eventos */}
                <Typography variant="h5" sx={{ marginBottom: "10px" }}>
                    Eventos
                </Typography>

                <Box sx={{ maxHeight: "300px", overflowY: "auto", padding: "10px", backgroundColor: "#fff", borderRadius: "8px" }}>
                    <Timeline sx={{ alignItems: "flex-start" }}>
                        {events.map((event, index) => (
                            <TimelineItem key={event.id} sx={{ "&::before": { flex: 0 } }}> {/* Remove o espaço extra do lado esquerdo */}
                                <TimelineSeparator>
                                    <TimelineDot
                                        color={event.type === "Goal" ? "success" : event.type === "Card" ? "warning" : "primary"}
                                        variant={event.type === "Red Card" ? "filled" : "outlined"} // Exemplo: preenchido para cartões vermelhos
                                    />
                                    {index < events.length - 1 && <TimelineConnector />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ textAlign: "left", marginLeft: "8px" }}>
                                    <Typography variant="body1">
                                        <strong>{event.elapsedTime}'</strong> - {event.type}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {event.detail} {event.comments ? `- ${event.comments}` : ""}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </Box>

                <Divider sx={{ marginY: 2 }} />

                {/* Lineups */}
                <Typography variant="h5" sx={{ marginBottom: "10px" }}>
                    Lineups
                </Typography>
                <Grid container spacing={2}>
                    {lineups.map((lineup) => (
                        <Grid item xs={6} key={lineup.teamId}>
                            <Box sx={{ backgroundColor: "#fff", padding: 2, borderRadius: "8px" }}>
                                {/* Nome do time */}
                                <Typography variant="h6" sx={{ textAlign: "center" }}>
                                    {lineup.teamId === homeTeam.id ? homeTeam.name : awayTeam.name}
                                </Typography>

                                {/* Formação */}
                                <Typography variant="body1" sx={{ textAlign: "center" }}>
                                    Formação: {lineup.formation}
                                </Typography>

                                {/* Jogadores Titulares */}
                                <Typography variant="body2" sx={{ marginTop: "10px" }}>
                                    <strong>Jogadores Titulares:</strong>
                                    <br />
                                    {lineup.players.map((player, index) => (
                                        <span key={player.id}>
                                            {player.name} ({player.position})
                                            {index < lineup.players.length - 1 ? ", " : ""}
                                        </span>
                                    ))}
                                </Typography>

                                {/* Substitutos */}
                                <Typography variant="body2" sx={{ marginTop: "10px" }}>
                                    <strong>Substitutos:</strong>
                                    <br />
                                    {lineup.substitutes.map((substitute, index) => (
                                        <span key={substitute.id}>
                                            {substitute.name} ({substitute.position})
                                            {index < lineup.substitutes.length - 1 ? ", " : ""}
                                        </span>
                                    ))}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}

                </Grid>
            </Box>
        </ThemeProvider>
    );
};

export default FixtureDetails;
