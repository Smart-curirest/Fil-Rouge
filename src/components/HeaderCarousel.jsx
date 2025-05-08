import React from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import canvasImg1 from "../assets/Group 53.png";
import canvasImg2 from "../assets/Group 54.png";
import canvasImg3 from "../assets/Group 52.png";
import { Search } from "react-bootstrap-icons";

function HeaderCarousel() {
  const slides = [canvasImg1, canvasImg2, canvasImg3];

  return (
    <Container fluid className="py-4">
      {/* Carousel wrapper */}
      <div className="position-relative" style={{ zIndex: 0 }}>
        <Carousel
          controls={true}
          indicators={false}
          fade
          interval={3000}
          pause={false}
          touch={true} // Enable swipe on touch devices
          keyboard={true} // Allow keyboard navigation
        >
          {slides.map((imgSrc, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100 img-fluid rounded-4 object-fit-cover"
                style={{ maxHeight: "60vh" }}
                src={imgSrc}
                alt={`Slide ${idx + 1}`}
                loading="lazy"
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Desktop overlay search */}
        <div
          className="d-none d-md-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
          style={{ pointerEvents: "none", zIndex: 1 }}
        >
          <Col md={6} className="px-0">
            <Card
              className="shadow-none bg-transparent border-0 mx-auto"
              style={{ pointerEvents: "auto" }}
            >
              <Card.Body className="p-3 shadow-none bg-transparent border-0">
                <InputGroup>
                  <Form.Control
                    placeholder="Entrez votre recherche"
                    aria-label="Recherche"
                    name="searchData"
                  />
                  <Button variant="dark" type="submit">
                    <Search />
                  </Button>
                </InputGroup>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </div>

      {/* Mobile: carousel then search below */}
      <Row className="justify-content-center d-flex d-md-none mt-4">
        <Col xs={12}>
          <Card
            className="shadow-none bg-transparent border-0 mx-auto"
            style={{ pointerEvents: "auto" }}
          >
            <Card.Body className="p-3 shadow-none bg-transparent border-0">
              <InputGroup>
                <Form.Control
                  placeholder="Entrez votre recherche"
                  aria-label="Recherche"
                    name="searchData"
                />
                <Button variant="light" type="submit">
                  <Search />
                </Button>
              </InputGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HeaderCarousel;
