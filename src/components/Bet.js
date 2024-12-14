import React from "react";
import { Box, Typography } from "@mui/material";

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
            <Typography
                variant="body2"
                sx={{
                    color: "#FFFFFF",
                }}
            >
                {`Casa: ${bet.homeOdd} | Empate: ${bet.drawOdd} | Fora: ${bet.awayOdd}`}
            </Typography>
        </Box>
    );
};

export default Bet;
