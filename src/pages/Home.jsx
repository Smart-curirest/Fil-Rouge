import React from "react";
import Navbar from "../components/Navbar";
import HeaderImg from "../components/HeaderImg";
import { Col, Container, Row } from "react-bootstrap";
import FonctionCard from "../components/FonctionCard";
import FAQ from "../components/FAQ";

import Logis1 from "../assets/logis1.png";
import Logis2 from "../assets/logis2.png";
import Logis3 from "../assets/logis3.png";
import Logis5 from "../assets/logis5.png";
import Logis4 from "../assets/logis4.png";
import Logis6 from "../assets/logis6.png";
import Logement1 from "../assets/logementpage3.png";
import Logement2 from "../assets/logementpage4.png";
import Logement3 from "../assets/logementpage5.png";
import Footer from "../components/Footer";
import CommentCard from "../components/CommentCard";
import MiniSlide from "../components/Carousel";


function Home() {
  return (
    <>
      <Container fluid>
        <Navbar />
        <HeaderImg />
      </Container>
      <Container fluid className="my-5">
        <h2 className="fw-medium display-5 my-5 text-warning" data-aos="zoom-in">
          AVANTAGES
        </h2>
        <Row>
          <Col xs={12} md={4}>
            <FonctionCard
              aosDelay={0}
              iconName="Photos Réelles"
              //iconName= {<Icon1Circle />}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus
          esse vel dolorem corrupti facilis?"
            />
          </Col>
          <Col xs={12} md={4}>
            <FonctionCard
              aosDelay={200}
              iconName="Prix Transparents"
              //iconName={<Icon2Circle />}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus
          esse vel dolorem corrupti facilis?"
            />
          </Col>
          <Col xs={12} md={4}>
            <FonctionCard
              aosDelay={400}
              iconName="Contact direct"
              //iconName={<Icon3Circle />}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus
          esse vel dolorem corrupti facilis?"
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-5">
        <h2 className="fw-medium display-5 my-5 text-warning" data-aos="zoom-in">
          LOGEMENTS POPULAIRES
        </h2>
        <Row className="mb-3 gy-3 h-100">
          <Col xs={12} md={4}>
            <img
              src={Logis1}
              alt=""
              className="img-fluid w-80"
              data-aos="fade-up"
              data-aos-delay={0}
            />
          </Col>
          <Col xs={12} md={4}>
            <img 
            src={Logis2} 
            alt="" 
            className="img-fluid w-80" 
              data-aos="fade-up"
              data-aos-delay={200}
            />
          </Col>
          <Col xs={12} md={4}>
            <img 
            src={Logis3} 
            alt="" 
            className="img-fluid w-80" 
              data-aos="fade-up"
              data-aos-delay={400}
            />
          </Col>

          <Col xs={12} md={4}>
            <img 
            src={Logis4} 
            alt="" 
            className="img-fluid w-80" 
              data-aos="fade-up"
              data-aos-delay={600}
            />
          </Col>
          <Col xs={12} md={4}>
            <img 
            src={Logis5} 
            alt="" 
            className="img-fluid w-80" 
              data-aos="fade-up"
              data-aos-delay={800}
            />
          </Col>
          <Col xs={12} md={4}>
            <img 
            src={Logis6} 
            alt="" 
            className="img-fluid w-80" 
              data-aos="fade-up"
              data-aos-delay={1000}
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-5">
        <h2 className="fw-medium display-5 my-5 text-warning" data-aos="zoom-in">
          TEMOIGNAGES
        </h2>
        <Row className="d-flex h-100 align-items-stretch">
          <Col xs={12} md={3} className="h-100">
            <CommentCard 
              imgprofile={Logement1} 
              namecomment="Mark Aurel" 
              content="Tres belle initiative pour l'innovation de la technologie  "
            />
          </Col>
          <Col xs={12} md={3} className="h-100">
            <CommentCard 
              imgprofile={Logement2} 
              namecomment="Mark Elias" 
              content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
          </Col>
          <Col xs={12} md={3}>
            <CommentCard 
              imgprofile={Logement2} 
              namecomment="Mark Camp" 
              content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."  
            />
          </Col>
          <Col xs={12} md={3}>
            <CommentCard 
              imgprofile={Logement3} 
              namecomment="Mark Jerem" 
              content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."  
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-5">
        <h2 className="fw-medium display-5 my-5 text-warning" data-aos="zoom-in">
          POURQUOI NOUS CHOISIR
        </h2>
        <Row className="">
          <Col xs={12} md={6}>
            <FAQ />
          </Col>
          <Col xs={12} md={6}>
            <MiniSlide/>
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

export default Home;
