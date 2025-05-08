// src/components/LogementDetail.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, Navigate } from "react-router-dom";
import { Container, Card, Alert, Button } from "react-bootstrap";
import { ArrowLeft, GeoAltFill } from "react-bootstrap-icons";
import LoadingScreen from "../components/LoadingScreen";

export default function LogementDetail() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [delError, setDelError] = useState("");
  const [error, setError] = useState(null);

  // Récupération de l'utilisateur stocké (login)
  const [user] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/posts/${id}`)
      .then(({ data }) => {
        setLogement(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Impossible de charger ce logement.");
        setLoading(false);
      });
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Confirmez-vous la suppression ?")) return;
    setDeleting(true);
    setDelError("");
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://127.0.0.1:8000/api/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      Navigate("/logement");
    } catch (err) {
      setDelError(
        err.response?.data?.message || "Erreur lors de la suppression."
      );
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <Container className="text-center my-5">
        <LoadingScreen />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">{error}</Alert>
        <Link to="/logement" className="text-decoration-none">
          <Button variant="outline-secondary" className="border-0 mb-3">
            <ArrowLeft /> Retour
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Link to="/logement" className="text-decoration-none">
        <Button variant="outline-secondary" className="border-0 mb-3">
          <ArrowLeft /> Retour
        </Button>
      </Link>
      <Card>
        {logement.image_path && (
          <Card.Img
            variant="top"
            src={`http://127.0.0.1:8000/storage/${logement.image_path}`}
            style={{ maxHeight: "400px" }}
            className="object-fit-cover"
          />
        )}
        <Card.Body>
          <Card.Title className="display-2 fw-bold text-capitalize">
            \{logement.titre}
          </Card.Title>
          <Card.Text className="fs-2 fw-bold text-capitalize text-success">
            <GeoAltFill />
            {logement.description}
          </Card.Text>
          <hr />
          <p>
            <strong>Prix :</strong> {logement.prix} CFA
          </p>
          <p>
            <strong>Adresse :</strong> {logement.adresse}
          </p>
          <p>
            <strong>Surface :</strong> {logement.surface ?? "—"} m²
          </p>
          <p>
            <strong>Chambres :</strong> {logement.chambres}
          </p>
          <p>
            <strong>Salles de bain :</strong> {logement.salles_de_bain}
          </p>
          <p>
            <strong>Disponibilité :</strong>{" "}
            {logement.disponible ? "Disponible" : "Indisponible"}
          </p>

          <Button variant="primary" className="me-md-5">
            Contacter le proprietaire
          </Button>

          {user && logement.user_id === user.id && (
            <>
              {delError && <Alert variant="danger">{delError}</Alert>}
              <Button
                variant="danger"
                onClick={handleDelete}
                disabled={deleting}
                className=""
              >
                {deleting ? "Suppression..." : "Retirer ce logement"}
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}
