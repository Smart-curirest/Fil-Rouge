import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Card,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

function AddLogementForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    prix: "",
    adresse: "",
    disponible: true,
    surface: "",
    chambres: "",
    salles_de_bain: "",
    image: null,
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setServerError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // client-side required fields check
    const newErrors = {};
    [
      "titre",
      "description",
      "prix",
      "adresse",
      "chambres",
      "salles_de_bain",
    ].forEach((field) => {
      if (!formData[field] || formData[field].toString().trim() === "") {
        newErrors[field] = `Le champ ${field} est requis.`;
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    const payload = new FormData();
    payload.append("titre", formData.titre);
    payload.append("description", formData.description);
    payload.append("prix", formData.prix);
    payload.append("adresse", formData.adresse);
    // boolean must be sent as '1' or '0'
    payload.append("disponible", formData.disponible ? "1" : "0");
    payload.append("surface", formData.surface);
    payload.append("chambres", formData.chambres);
    payload.append("salles_de_bain", formData.salles_de_bain);
    if (formData.image) {
      payload.append("image", formData.image);
    }

    try {
      const token = localStorage.getItem("token");
      await axios.post("http://127.0.0.1:8000/api/posts", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      });
      navigate("/logement");
    } catch (err) {
      console.error(err.response?.data);
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        setServerError(
          err.response?.data?.message ||
            "Une erreur est survenue lors de l'envoi du formulaire."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Button
            variant="outline-secondary"
            className="border-0 mb-3"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft /> Retour
          </Button>
          <Card>
            <Card.Body>
              <h2 className="mb-4">Ajouter un logement</h2>
              {serverError && <Alert variant="danger">{serverError}</Alert>}
              <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <FloatingLabel controlId="titre" label="Titre" className="mb-3">
                  <Form.Control
                    name="titre"
                    type="text"
                    placeholder="Titre"
                    value={formData.titre}
                    onChange={handleChange}
                    isInvalid={!!errors.titre}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.titre}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel
                  controlId="description"
                  label="Description"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    name="description"
                    placeholder="Description"
                    style={{ height: "100px" }}
                    value={formData.description}
                    onChange={handleChange}
                    isInvalid={!!errors.description}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <Row className="g-2">
                  <Col>
                    <FloatingLabel
                      controlId="prix"
                      label="Prix (CFA)"
                      className="mb-3"
                    >
                      <Form.Control
                        name="prix"
                        type="number"
                        placeholder="Prix"
                        value={formData.prix}
                        onChange={handleChange}
                        isInvalid={!!errors.prix}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.prix}
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>

                  <Col>
                    <FloatingLabel
                      controlId="surface"
                      label="Surface (m²)"
                      className="mb-3"
                    >
                      <Form.Control
                        name="surface"
                        type="number"
                        placeholder="Surface"
                        value={formData.surface}
                        onChange={handleChange}
                        isInvalid={!!errors.surface}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.surface}
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                </Row>

                <FloatingLabel
                  controlId="adresse"
                  label="Adresse"
                  className="mb-3"
                >
                  <Form.Control
                    name="adresse"
                    type="text"
                    placeholder="Adresse"
                    value={formData.adresse}
                    onChange={handleChange}
                    isInvalid={!!errors.adresse}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.adresse}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <Form.Check
                  type="checkbox"
                  id="disponible"
                  name="disponible"
                  label="Disponible"
                  className="mb-3"
                  checked={formData.disponible}
                  onChange={handleChange}
                />

                <Row className="g-2">
                  <Col>
                    <FloatingLabel
                      controlId="chambres"
                      label="Chambres"
                      className="mb-3"
                    >
                      <Form.Control
                        name="chambres"
                        type="number"
                        placeholder="Chambres"
                        value={formData.chambres}
                        onChange={handleChange}
                        isInvalid={!!errors.chambres}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.chambres}
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>

                  <Col>
                    <FloatingLabel
                      controlId="salles_de_bain"
                      label="Salles de bain"
                      className="mb-3"
                    >
                      <Form.Control
                        name="salles_de_bain"
                        type="number"
                        placeholder="Salles de bain"
                        value={formData.salles_de_bain}
                        onChange={handleChange}
                        isInvalid={!!errors.salles_de_bain}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.salles_de_bain}
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                </Row>

                <Form.Group controlId="image" className="mb-3">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    isInvalid={!!errors.image}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.image}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-100"
                >
                  {isSubmitting ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    "Ajouter"
                  )}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AddLogementForm;
  


