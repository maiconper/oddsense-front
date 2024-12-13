import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa o CSS principal do Swiper
import "swiper/css/navigation"; // Importa estilos de navegação
import "swiper/css/pagination"; // Importa estilos de paginação

const TestCarousel = () => {
    return (
        <Swiper
            navigation // Ativa setas de navegação
            pagination={{ clickable: true }} // Ativa pontos clicáveis para paginação
            spaceBetween={20}
            slidesPerView={1}
            style={{
                width: "100%", // O carrossel ocupa 100% da largura disponível
                height: "300px", // Altura mínima para garantir visibilidade
                backgroundColor: "#f8f9fa", // Fundo claro para facilitar a visualização
            }}
        >
            <SwiperSlide>
                <div style={{ backgroundColor: "red", height: "100%", color: "#fff", textAlign: "center", paddingTop: "20px" }}>
                    Slide 1
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ backgroundColor: "blue", height: "100%", color: "#fff", textAlign: "center", paddingTop: "20px" }}>
                    Slide 2
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ backgroundColor: "green", height: "100%", color: "#fff", textAlign: "center", paddingTop: "20px" }}>
                    Slide 3
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default TestCarousel;
