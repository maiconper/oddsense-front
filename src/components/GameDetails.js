import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      const response = await api.get(`/${id}`);
      setGame(response.data);
    };
    fetchGame();
  }, [id]);

  if (!game) return <p>Carregando...</p>;

  return (
    <div className="container">
      <h2>Detalhes do Jogo</h2>
      <p>Casa: {game.teamHome}</p>
      <p>Visitante: {game.teamAway}</p>
      <p>Data: {new Date(game.dateTime).toLocaleString()}</p>
      <a href={`/games/${id}/predict`} className="btn btn-primary">
        Criar Previsão
      </a>
    </div>
  );
};

export default GameDetails;
