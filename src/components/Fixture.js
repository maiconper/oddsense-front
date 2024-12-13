import React from "react";
import { Box, Typography, Avatar, Card, CardContent } from "@mui/material";

const Fixture = ({ fixture }) => {
    return (
        <Card
            sx={{
                backgroundColor: "#1e1e1e",
                borderRadius: 2,
                padding: 2,
                boxShadow: 3,
                width: "300px", // Largura fixa para os cards
                height: "250px", // Altura fixa para manter alinhamento
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // Garante espaçamento uniforme
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {/* Time da Casa */}
                    <Box sx={{ textAlign: "center", flex: 1 }}>
                        <Avatar
                            src={fixture.homeTeam.logo}
                            alt={fixture.homeTeam.name}
                            sx={{
                                width: 64,
                                height: 64,
                                margin: "0 auto",
                            }}
                        />
                        <Typography variant="h6" sx={{ color: "#FFFFFF", mt: 1 }}>
                            {fixture.homeTeam.name}
                        </Typography>
                    </Box>

                    {/* Placar */}
                    <Box
                        sx={{
                            textAlign: "center",
                            flex: "0 0 auto",
                            minWidth: "80px",
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: "#FFFFFF",
                                fontWeight: "bold",
                            }}
                        >
                            {fixture.homeGoals ?? 0} - {fixture.awayGoals ?? 0}
                        </Typography>
                    </Box>

                    {/* Time Visitante */}
                    <Box sx={{ textAlign: "center", flex: 1 }}>
                        <Avatar
                            src={fixture.awayTeam.logo}
                            alt={fixture.awayTeam.name}
                            sx={{
                                width: 64,
                                height: 64,
                                margin: "0 auto",
                            }}
                        />
                        <Typography variant="h6" sx={{ color: "#FFFFFF", mt: 1 }}>
                            {fixture.awayTeam.name}
                        </Typography>
                    </Box>
                </Box>
                {/* Liga e Status */}
                <Typography
                    variant="body2"
                    sx={{
                        color: "#B3B3B3",
                        textAlign: "center",
                        mt: 2,
                    }}
                >
                    {fixture.league.name} - {fixture.statusLong}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: "#B3B3B3",
                        textAlign: "center",
                        mt: 1,
                    }}
                >
                    Horário:{" "}
                    {new Date(fixture.date).toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Fixture;
