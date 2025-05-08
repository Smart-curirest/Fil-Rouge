import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Alert,
} from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useUser } from "../contexts/UserContext";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const { setUser, setToken } = useUser();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setServerError("");
    setIsSubmitting(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: formData.email,
        password: formData.password,
      });

      const token = response.data?.token;
      const user = response.data?.user;

      if (token && user) {
        // Stocker dans localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        // Mettre à jour le contexte global
        setToken(token);
        setUser(user);

        // Redirection après succès
        navigate("/logement");
      } else {
        throw new Error("Réponse invalide du serveur.");
      }
    } catch (error) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else if (error.response?.data?.message) {
        setServerError(error.response.data.message);
      } else {
        setServerError("Une erreur est survenue lors de la connexion.");
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
        <Col xs={12} md={3}>
          <Form onSubmit={handleSubmit}>
            <Button
              variant="outline-secondary"
              className="border-0 mb-3"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft /> Retour
            </Button>
            <p className="h1 fw-medium">Se connecter</p>
            <h1 className="h5 fw-normal mb-3 mb-md-4">@Gestion Logi</h1>

            {serverError && <Alert variant="danger">{serverError}</Alert>}

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

            <Form.Check
              type="checkbox"
              id="rememberMe"
              label="Se souvenir de moi"
              className="mb-3"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />

            <Button
              variant="primary"
              type="submit"
              className="w-100 py-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Connexion en cours..." : "Se connecter"}
            </Button>

            <p className="mt-3 text-body-secondary">
              Vous ne disposez pas encore d'un compte ?{" "}
              <Link to="/signup">cliquez ici</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
