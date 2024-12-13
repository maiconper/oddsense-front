import React, { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

const PredictionForm = () => {
  const { id } = useParams();
  const [mainPrediction, setMainPrediction] = useState("");
  const [secondaryPrediction, setSecondaryPrediction] = useState("");
  const [justification, setJustification] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post("/predictions", {
        gameId: id,
        mainPrediction,
        secondaryPrediction,
        justification,
      });
      alert("Previsão criada com sucesso!");
    } catch (error) {
      alert("Erro ao criar previsão!");
    }
  };

  return (
    <div className="container">
      <h2>Criar Previsão</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Previsão Principal</label>
          <input
            type="text"
            className="form-control"
            value={mainPrediction}
            onChange={(e) => setMainPrediction(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Previsão Secundária</label>
          <input
            type="text"
            className="form-control"
            value={secondaryPrediction}
            onChange={(e) => setSecondaryPrediction(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Justificativa</label>
          <textarea
            className="form-control"
            value={justification}
            onChange={(e) => setJustification(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default PredictionForm;
