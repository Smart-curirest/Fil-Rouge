import React, { useEffect, useState } from "react";

import { fetchLogements } from "../services/LogementService";
import LoadingScreen from "../components/LoadingScreen";
import { Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import LogementsFilter from "./LogementsFilter";
import { WalletFill } from "react-bootstrap-icons";

function ListLogement() {
  const [logements, setLogements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadLogements = (filtres = {}) => {
    setLoading(true);
    fetchLogements(filtres)
      .then((data) => setLogements(data.data || data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    loadLogements(); // Chargement initial sans filtre
  }, []);

  useEffect(() => {
    fetchLogements()
      .then((data) => {
        // Si votre API renvoie { data: [...] }
        setLogements(data.data || data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingScreen />;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <>
      <LogementsFilter onFilter={loadLogements} />

      {logements.map((log) => (
        <Col xs={12} md={4}>
          <ProductCard
            key={log.id}
            logementKey={log.id}
            logementLink={log.id}
            aosDelay={0}
            logementName={log.titre}
            location={log.adresse}
            logementImg={`http://127.0.0.1:8000/storage/${log.image_path}`}
            iconName={<WalletFill />}
            price={log.prix}
            content={log.description}
            date={log.created_at.replace("T", " ").split(".")[0]}
          />
        </Col>
      ))}
    </>
  );
}

export default ListLogement;
