import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/games", // Substitua pelo seu endpoint real
});

export default api;
