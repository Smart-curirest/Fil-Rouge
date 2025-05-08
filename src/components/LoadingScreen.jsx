import React from "react";
import { Container, Spinner } from "react-bootstrap";

function LoadingScreen() {
  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="text-center">
          <Spinner animation="border" role="status" className="mb-3">
            <span className="visually-hidden">Chargement...</span>
          </Spinner>
          <div>Chargement...</div>
        </div>
      </Container>
    </>
  );
}

export default LoadingScreen;
