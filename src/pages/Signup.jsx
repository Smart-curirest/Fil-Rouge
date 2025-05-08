import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Card,
  Alert,
} from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Le prénom est requis.";
    if (!formData.lastName.trim()) newErrors.lastName = "Le nom est requis.";
    if (!formData.email.trim()) newErrors.email = "L'email est requis.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email invalide.";
    if (!formData.password) newErrors.password = "Le mot de passe est requis.";
    if (formData.password !== formData.password_confirmation)
      newErrors.password_confirmation =
        "Les mots de passe ne correspondent pas.";
    if (!formData.terms)
      newErrors.terms = "Vous devez accepter les conditions.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    setSuccessMessage("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name: formData.name,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
      });
      setSuccessMessage("Inscription réussie !");
      navigate('/login');
      setFormData({
        name: "",
        lastName: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false,
      });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        setServerError("Une erreur est survenue lors de l'inscription.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={5} lg={4}>
          <Card className="border-0 shadow-none">
            <Card.Body className="p-4">
              <Button
                variant="outline-secondary"
                className="border-0 mb-3"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft /> Retour
              </Button>
              <h2 className="h1 fw-medium">Créer un compte</h2>
              <h1 className="h5 fw-normal mb-3 mb-md-4">@Gestion Logi</h1>
              <Form noValidate onSubmit={handleSubmit}>
                {serverError && <Alert variant="danger">{serverError}</Alert>}
                {successMessage && (
                  <Alert variant="success">{successMessage}</Alert>
                )}
                <Row className="g-2">
                  <Col xs={12} sm={6}>
                    <FloatingLabel
                      controlId="floatingFirstName"
                      label="Prénom"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Prénom"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} sm={6}>
                    <FloatingLabel
                      controlId="floatingLastName"
                      label="Nom"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Nom"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        isInvalid={!!errors.lastName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.lastName}
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                </Row>

                <FloatingLabel
                  controlId="floatingEmail"
                  label="Adresse email"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingPassword"
                  label="Mot de passe"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    placeholder="Mot de passe"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingConfirmPassword"
                  label="Confirmer mot de passe"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    placeholder="Confirmer mot de passe"
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    isInvalid={!!errors.password_confirmation}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password_confirmation}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <Form.Check
                  type="checkbox"
                  id="terms"
                  name="terms"
                  label="J'accepte les conditions d'utilisation"
                  className="mb-3"
                  checked={formData.terms}
                  onChange={handleChange}
                  isInvalid={!!errors.terms}
                  feedback={errors.terms}
                  feedbackType="invalid"
                />

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Inscription en cours..." : "S'inscrire"}
                </Button>
                <p className="mt-3 text-body-secondary">
                  Vous disposez d'un compte ?{" "}
                  <Link to="/login">cliquez ici</Link>
                </p>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
