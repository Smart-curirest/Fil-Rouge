import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import HeaderCarousel from "../components/HeaderCarousel";
import ProductCard from "../components/ProductCard";
import { Heart, HeartFill } from "react-bootstrap-icons";
import Footer from "../components/Footer";
import ListLogement from "../components/ListLogement";

import Logement4 from "../assets/logementpage6.png";
import Logement5 from "../assets/logementpage7.png";
import Logement6 from "../assets/logementpage8.png";
import Logement7 from "../assets/logis1.png";
import Logement8 from "../assets/logis2.png";
import Logement9 from "../assets/logis3.png";

function Logement() {
  return (
    <>
      <Container fluid>
        <Navbar />
        <HeaderCarousel />
      </Container>
      <Container fluid className="my-5">
        <h2 className="fw-medium display-5 my-5 text-warning" data-aos="zoom-in">
          LOGEMENTS POPULAIRES
        </h2>
        
        <Row>
          <ListLogement />
        </Row>
      </Container>
      <Container fluid className="my-5">
        <h2 className="fw-medium display-5 my-5 text-warning" data-aos="zoom-in">
          LOGEMENTS RECENTS
        </h2>
        <Row>
          <Col xs={12} md={4}>
            <ProductCard
              aosDelay={0}
              logementName="LOGEMENT4"
              logementImg={Logement4}
              date='20.03.2030'
              location="Maroua"             
              iconName={<HeartFill />}
              price={150}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus
          esse vel dolorem corrupti facilis?"
            />
          </Col>
          <Col xs={12} md={4}>
            <ProductCard
              aosDelay={200}
              logementName="LOGEMENT5"
              logementImg={Logement5}
              date='20.03.2030'
              location="Maroua"             
              iconName={<Heart />}
              price={10}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus
          esse vel dolorem corrupti facilis?"
            />
          </Col>
          <Col xs={12} md={4}>
            <ProductCard
              aosDelay={400}
              logementName="LOGEMENT6"
              logementImg={Logement6}
              date='20.03.2030'
              location="Maroua"             
              iconName={<Heart />}
              price={5}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus
          esse vel dolorem corrupti facilis?"
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-5">
        <h2 className="fw-medium display-5 my-5 text-warning" data-aos="zoom-in">
          TOUS LES LOGEMENTS
        </h2>
        <Row>
          <Col xs={12} md={4}>
            <ProductCard
              aosDelay={0}
              logementName="LOGEMENT7"
              logementImg={Logement7}
              location="ODZA"
              iconName={<HeartFill />}
              date='20.03.2030'
              price={150}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus
          esse vel dolorem corrupti facilis?"
            />
          </Col>
          <Col xs={12} md={4}>
            <ProductCard
              aosDelay={200}
              logementName="LOGEMENT8"
              logementImg={Logement8}
              location="Douala"
              iconName={<Heart />}
              date='20.03.2030'
              price={10}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus
          esse vel dolorem corrupti facilis?"
            />
          </Col>
          <Col xs={12} md={4}>
            <ProductCard
              aosDelay={400}
              logementName="LOGEMENT9"
              logementLink={1}
              logementImg={Logement9}
              location="Yaounde"
              iconName={<Heart />}
              price={5}
              date='20.03.2030'
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus
          esse vel dolorem corrupti facilis?"
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className="mt-5">
        <Row className="align-items-stretch">
          <Footer />
        </Row>
      </Container>
    </>
  );
}

export default Logement;
