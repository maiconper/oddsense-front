import React, { useState } from "react";
import "./index.css";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FixturesCarousel from "./components/FixturesCarousel";
import Footer from "./components/Footer";

const App = () => {
  const [selectedLeague, setSelectedLeague] = useState(null);

  const handleLeagueSelect = (league) => {
    console.log("Liga Selecionada:", league);
    setSelectedLeague(league);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <Sidebar onLeagueSelect={handleLeagueSelect} />
        <div className="carousel-container">
          <FixturesCarousel league={selectedLeague} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;


