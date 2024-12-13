import React, { useEffect, useState } from "react";
import api from "../services/api";

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await api.get("");
      setGames(response.data);
    };
    fetchGames();
  }, []);

  return (
    <div className="container">
      <h2>Lista de Jogos</h2>
      <ul className="list-group">
        {games.map((game) => (
          <li key={game.id} className="list-group-item">
            <a href={`/games/${game.id}`}>
              {game.teamHome} vs {game.teamAway}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
