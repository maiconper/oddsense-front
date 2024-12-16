import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const leaguesByCountry = {
  Argentina: [{ id: 128, name: "Liga Profesional Argentina" }],
  Brazil: [{ id: 71, name: "Brasileirão Série A" }],
  England: [{ id: 39, name: "Premier League" }],
  Spain: [{ id: 140, name: "La Liga" }],
  Italy: [{ id: 135, name: "Serie A" }],
  Germany: [{ id: 78, name: "Bundesliga" }],
  France: [{ id: 61, name: "Ligue 1" }],
  Portugal: [{ id: 94, name: "Primeira Liga" }],
  Netherlands: [{ id: 88, name: "Eredivisie" }],
  Belgium: [{ id: 144, name: "Pro League" }],
  Mexico: [{ id: 262, name: "Liga MX" }],
  USA: [{ id: 253, name: "Major League Soccer" }],
  Russia: [{ id: 203, name: "Russian Premier League" }],
  Turkey: [{ id: 223, name: "Süper Lig" }],
  Arabia: [{ id: 225, name: "Süper Lig" }],
};



const Sidebar = ({ onLeagueSelect }) => {
  const [openCountries, setOpenCountries] = useState({});

  // Alternar a exibição das ligas por país
  const handleToggleCountry = (country) => {
    setOpenCountries((prev) => ({
      ...prev,
      [country]: !prev[country],
    }));
  };

  return (
    <Box sx={{
      height: "100%", // Altura total
      width: "100px", // Define uma largura fixa para a Sidebar
      overflowY: "auto", // Adiciona barra de rolagem vertical se necessário
      padding: 2,
      backgroundColor: "#121212", // Cor de fundo para destacar a Sidebar
    }}>
      <Typography variant="h6" sx={{ color: "#FFFFFF", mb: 2 }}>
        Principais Ligas
      </Typography>
      <List>
        {Object.entries(leaguesByCountry).map(([country, leagues]) => (
          <Box key={country}>
            <ListItem onClick={() => handleToggleCountry(country)}>
              <ListItemText primary={country} sx={{ color: "#FFFFFF" }} />
              {openCountries[country] ? (
                <ExpandLess sx={{ color: "#FFFFFF" }} />
              ) : (
                <ExpandMore sx={{ color: "#FFFFFF" }} />
              )}
            </ListItem>
            <Collapse in={openCountries[country]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {leagues.map((league) => (
                  <ListItem
                    key={league.id}
                    sx={{ pl: 4 }}
                    onClick={() => onLeagueSelect(league)}
                  >
                    <ListItemText primary={league.name} sx={{ color: "#B3B3B3" }} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
