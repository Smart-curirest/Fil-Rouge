// src/components/LogoutButton.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";
import { PersonDash } from "react-bootstrap-icons";
import { useUser } from "../contexts/UserContext"; // Import du contexte

export default function LogoutButton() {
  const navigate = useNavigate();
  const { user, token, setUser, setToken } = useUser();

  const [loading, setLoading] = useState(false);
  const [logoutError, setLogoutError] = useState("");

  const handleLogout = async () => {
    if (!window.confirm("Confirmez-vous la déconnexion ?")) return;

    setLoading(true);
    setLogoutError("");

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/logout",
        {}, // corps vide
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      // Nettoyage du contexte + localStorage (synchronisé automatiquement via useEffect)
      setUser(null);
      setToken(null);

      navigate("/login");
    } catch (err) {
      setLogoutError(
        err.response?.data?.message || "Erreur lors de la déconnexion."
      );
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={handleLogout}
        variant="danger"
        size="sm"
        disabled={loading}
        className="d-flex align-items-center rounded-5 px-4"
      >
        <PersonDash className="me-1" />
        {loading ? "Déconnexion..." : "Déconnexion"}
      </Button>

      {logoutError && <Alert variant="danger">{logoutError}</Alert>}
    </>
  );
}
