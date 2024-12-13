import React, { useEffect, useState } from "react";
import { CircularProgress, Box, Typography } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Fixture from "./Fixture";
import { FaCircle } from "react-icons/fa";
import { keyframes } from "@mui/system";

const FixturesCarousel = ({ fixtures }) => {
    const blink = keyframes`
    0%, 100% { opacity: 1  ; }
    50% { opacity: 0.5; }
  `;

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
            {/* Título com Ícone de Ao Vivo */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center", // Alinha verticalmente o ícone com o texto
                    justifyContent: "center",
                    gap: "8px", // Espaçamento entre o texto e o ícone
                    marginBottom: "16px",
                }}
            >
                <Typography variant="h4" sx={{ textAlign: "center", color: "#FFFFFF" }}>
                    Ao Vivo
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        animation: `${blink} 2s infinite`,
                    }}
                >
                    <FaCircle style={{ color: "red", fontSize: "16px" }} />
                </Box>;
            </Box>

            {/* Carrossel */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation={true}
                pagination={{ clickable: true }}
                spaceBetween={10} // Espaço entre os slides
                slidesPerView={5} // Exibe 5 slides por vez
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

            {/* Keyframes CSS */}
            <style>
                {`
                @keyframes blink {
                    0%, 100% { opacity: 1; } // Totalmente visível
                    50% { opacity: 0; }     // Invisível no meio da animação
                }
                `}
            </style>
        </Box>
    );
};

export default FixturesCarousel;
