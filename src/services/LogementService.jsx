// src/services/logementService.js
import axios from "axios";

export function fetchLogements(filters = {}) {
  return axios
    .get("http://127.0.0.1:8000/api/posts", {
      params: filters, // Ajout des paramètres de requête
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}
