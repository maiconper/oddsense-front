import React, { useState, useEffect } from "react";
import "./index.css";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FixturesCarousel from "./components/FixturesCarousel";
import Footer from "./components/Footer";
import FeaturedFixtures from "./components/FeaturedFixture";
import { CircularProgress, Typography } from "@mui/material";
import FixtureDetails from "./components/FixtureDetails";

import darkTheme from "./components/theme";

const App = () => {
  const [selectedLeague, setSelectedLeague] = useState(null);
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("home"); // Estado para gerenciar a visualização
  const [selectedFixture, setSelectedFixture] = useState(null); //


  const handleFixtureSelect = (data) => {
    console.log("Fixture selecionada:", data);
    setSelectedFixture(data); // Armazena a fixture selecionada
    setView("details"); // Muda a visualização para detalhes
  };

  const handleBackToHome = () => {
    setView("home"); // Volta à visualização inicial
    setSelectedFixture(null); // Limpa o fixture selecionado
  };

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#121212",
          color: "#FFFFFF",
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  const handleLeagueSelect = (league) => {
    console.log("Liga Selecionada:", league);
    setSelectedLeague(league);
  };

  return (
    <>
      {view === 'home' && (

        <div className="app-container">
          <Header />
          <div className="content-container">
            <Sidebar onLeagueSelect={handleLeagueSelect} />

            <div className="carousel-container">
              <FeaturedFixtures fixtures={fixtures} onFixtureSelect={handleFixtureSelect} />
              <FixturesCarousel fixtures={fixtures} />
            </div>
          </div>
          <Footer />
        </div >
      )
      }
      {
        view === "details" && selectedFixture && (

          <div>
            <div className="app-container">
              <Header />
              <div className="content-container">
                <Sidebar onLeagueSelect={handleLeagueSelect} />

                <div className="carousel-container">
                  <FixtureDetails fixture={selectedFixture} handleBackToHome={() => setView("home")} />
                </div>
              </div>
              <Footer />
            </div >
          </div>

        )
      }
    </>
  );
};

export default App;


