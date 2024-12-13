import React, { useEffect, useState } from "react";
import { CircularProgress, Box, Typography } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Fixture from "./Fixture";

const FixturesCarousel = ({ league }) => {
    const [fixtures, setFixtures] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFixtures = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/fixtures/today");
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

    if (loading) {
        return (
            <Box sx={{ textAlign: "center", color: "#FFFFFF", mt: 4 }}>
                <CircularProgress color="primary" />
                <Typography variant="h6" sx={{ mt: 2 }}>
                    Carregando jogos...
                </Typography>
            </Box>
        );
    }

    if (fixtures.length === 0) {
        return (
            <Box sx={{ textAlign: "center", color: "#FFFFFF", mt: 4 }}>
                <Typography variant="h6">Nenhum jogo encontrado para hoje.</Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: "16px",
                boxSizing: "border-box",
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: "16px", textAlign: "center" }}>
                Jogos Ao Vivo
            </Typography>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation={true}
                pagination={{ clickable: true }}
                spaceBetween={10} // Espaço entre os slides
                slidesPerView={5} // Exibe 3 slides por vez
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                {fixtures.map((fixture) => (
                    <SwiperSlide
                        key={fixture.id}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Fixture fixture={fixture} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default FixturesCarousel;
