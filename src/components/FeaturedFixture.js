import React from "react";
import { Box, Typography } from "@mui/material";
import Fixture from "./Fixture";

const FeaturedFixtures = ({ fixtures }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                marginBottom: "16px",
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: "16px", textAlign: "center" }}>
                Destaques do Dia
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "100%",
                    flexWrap: "wrap", // Permite quebra em telas menores
                    gap: 2,
                }}
            >
                {fixtures.slice(0, 3).map((fixture) => (
                    <Box key={fixture.id} sx={{ flex: "0 1 calc(33.33% - 16px)" }}>
                        <Fixture fixture={fixture} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default FeaturedFixtures;
