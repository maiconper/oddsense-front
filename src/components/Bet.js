import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Bet = ({ bet }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                padding: "8px",
                backgroundColor: "#1e1e1e",
                borderRadius: "8px",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.5)",
            }}
        >
            {/* Nome da Casa */}
            <Typography
                variant="subtitle2"
                sx={{
                    color: "#FFD700", // Dourado para destacar o nome da casa
                    fontWeight: "bold",
                }}
            >
                {bet.houseName}
            </Typography>

            {/* Odds */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "8px",
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#2196F3", // Azul para destacar
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        flex: 1,
                        textTransform: "none",
                        ":hover": {
                            backgroundColor: "#1976D2", // Azul mais escuro ao passar o mouse
                        },
                    }}
                >
                    Casa: {bet.homeOdd}
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#4CAF50", // Verde para empate
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        flex: 1,
                        textTransform: "none",
                        ":hover": {
                            backgroundColor: "#388E3C", // Verde mais escuro ao passar o mouse
                        },
                    }}
                >
                    Empate: {bet.drawOdd}
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#F44336", // Vermelho para fora
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        flex: 1,
                        textTransform: "none",
                        ":hover": {
                            backgroundColor: "#D32F2F", // Vermelho mais escuro ao passar o mouse
                        },
                    }}
                >
                    Fora: {bet.awayOdd}
                </Button>
            </Box>
        </Box>
    );
};

export default Bet;
