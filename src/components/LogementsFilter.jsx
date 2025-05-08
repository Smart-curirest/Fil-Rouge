import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function LogementsFilter({ onFilter }) {
  const valeursInitiales = {
    prixMin: "",
    prixMax: "",
    chambres: "",
    ville: "",
    disponible: "",
  };

  const [filters, setFilters] = useState(valeursInitiales);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleReset = () => {
    setFilters(valeursInitiales);
    onFilter({}); // Recharge sans aucun filtre
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row className="g-2 align-items-end">
        <Col md>
          <Form.Control
            type="number"
            placeholder="Prix min"
            name="prixMin"
            value={filters.prixMin}
            onChange={handleChange}
          />
        </Col>
        <Col md>
          <Form.Control
            type="number"
            placeholder="Prix max"
            name="prixMax"
            value={filters.prixMax}
            onChange={handleChange}
          />
        </Col>
        <Col md>
          <Form.Control
            type="number"
            placeholder="Nombre min de chambres"
            name="chambres"
            value={filters.chambres}
            onChange={handleChange}
          />
        </Col>
        <Col md>
          <Form.Control
            type="text"
            placeholder="Ville"
            name="ville"
            value={filters.ville}
            onChange={handleChange}
          />
        </Col>
        <Col md>
          <Form.Select
            name="disponible"
            value={filters.disponible}
            onChange={handleChange}
          >
            <option value="">Disponibilité</option>
            <option value="1">Disponible</option>
            <option value="0">Non disponible</option>
          </Form.Select>
        </Col>
        <Col md="auto">
          <Button type="submit" variant="primary">
            Filtrer
          </Button>
        </Col>
        <Col md="auto">
          <Button variant="outline-secondary" onClick={handleReset}>
            Réinitialiser
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default LogementsFilter;
