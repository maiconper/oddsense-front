import React from "react";
import { Box, Typography } from "@mui/material";
import { FaFire } from "react-icons/fa";

const FeaturedFixtures = ({ fixtures }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "100%",
                padding: "16px",
                boxSizing: "border-box",
                backgroundColor: "#1e1e1e",
                borderRadius: "8px",
            }}
        >
            {/* Título */}
            <Typography
                variant="h5"
                sx={{
                    marginBottom: "16px",
                    color: "#FFFFFF",
                }}
            >
                Destaques
            </Typography>

            {/* Fixtures Destaques */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "32px", // Espaçamento aumentado entre os fixtures
                    width: "100%",
                }}
            >
                {fixtures.slice(0, 6).map((fixture) => {
                    // Validação para garantir que os dados estão disponíveis
                    const homeTeam = fixture?.homeTeam || { name: "N/A", logo: "" };
                    const awayTeam = fixture?.awayTeam || { name: "N/A", logo: "" };
                    const goals = fixture?.goals || { home: 0, away: 0 };
                    const league = fixture?.league || { name: "Sem Liga" };

                    return (
                        <Box
                            key={fixture.id}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "150va",
                                height: "250px",
                                position: "relative",
                                overflow: "hidden", // Garante que o GIF não ultrapasse os limites do card
                                borderRadius: "12px",
                            }}
                        >
                            {/* GIF como fundo */}
                            <img
                                src="https://i.gifer.com/EkA5.gif"
                                alt="Fogo"
                                style={{
                                    position: "absolute",
                                    top: "-20px", // Ajusta a posição vertical para centralizar o fogo
                                    left: "-20px", // Ajusta a posição horizontal para cobrir as bordas
                                    width: "calc(100% + 40px)", // Expande o GIF para além das bordas do card
                                    height: "calc(100% + 40px)", // Expande o GIF para além das bordas
                                    objectFit: "cover", // Garante que o GIF seja dimensionado corretamente
                                    // Coloca o GIF atrás do conteúdo do card
                                    borderRadius: "inherit", // Segue as bordas arredondadas do card
                                }}
                            />

                            {/* Conteúdo do Card */}
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(44, 44, 44, 0.9)", // Fundo semi-transparente para legibilidade
                                    zIndex: 1, // Coloca o conteúdo acima do GIF
                                    borderRadius: "inherit",
                                    padding: "16px",
                                }}
                            >
                                {/* Ícone de Fogo */}
                                <FaFire
                                    style={{
                                        position: "absolute",
                                        top: "8px",
                                        right: "8px",
                                        color: "#FF4500",
                                        fontSize: "24px",
                                    }}
                                />

                                {/* Escudo e Informações do Time */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        gap: "8px",
                                        width: "100%",
                                    }}
                                >
                                    {/* Time da Casa */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            width: "50%",
                                        }}
                                    >
                                        <img
                                            src={homeTeam.logo}
                                            alt={homeTeam.name}
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                marginBottom: "8px",
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#FFFFFF",
                                                textAlign: "center",
                                            }}
                                        >
                                            {homeTeam.name}
                                        </Typography>
                                    </Box>

                                    {/* Placar */}
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "#FFD700",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            whiteSpace: "nowrap", // Evita quebra de linha
                                        }}
                                    >
                                        {goals.home} x {goals.away}
                                    </Typography>

                                    {/* Time Visitante */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            width: "50%",
                                        }}
                                    >
                                        <img
                                            src={awayTeam.logo}
                                            alt={awayTeam.name}
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                marginBottom: "8px",
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#FFFFFF",
                                                textAlign: "center",
                                            }}
                                        >
                                            {awayTeam.name}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Informações da Liga */}
                                <Typography
                                    variant="caption"
                                    sx={{
                                        marginTop: "16px",
                                        color: "#B3B3B3",
                                        textAlign: "center",
                                    }}
                                >
                                    {league.name}
                                </Typography>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

export default FeaturedFixtures;
