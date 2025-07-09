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
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <SampleArrow direction="next" />,
  prevArrow: <SampleArrow direction="prev" />,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
  ]
};

  const images = [Logis1, Logis2, Logis3, Logis4, Logis5, Logis6];

  return (
    <div className="my-5" data-aos="fade-up">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img
              src={img}
              alt={`Logement ${index + 1}`}
              style={{ 
                height: '30rem',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
const SampleArrow = ({ onClick, direction }) => (
  <button 
    onClick={onClick}
    style={{
      position: 'absolute',
      top: '50%',
      [direction === 'prev' ? 'left' : 'right']: '15px',
      transform: 'translateY(-50%)',
      zIndex: 1,
      background: 'rgba(255, 193, 7, 0.8)',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      color: 'white',
      fontSize: '20px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    {direction === 'prev' ? '◄' : '►'}
  </button>
);

function Home() {
  return (
    <>
      <Container fluid>
        <Navbar />
        <HeaderImg />
      </Container>
      <Container className="d-flex flex-column align-items-center my-5">
        <Container fluid className="my-5">
        <h2 className="fw-bold display-4 text-center mb-5" data-aos="zoom-in">
          <span className="text-warning">AVANTAGES</span>
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
        <h2 className="fw-bold display-4 text-center mb-5" data-aos="zoom-in">
          <span className="text-warning">GALERIE DE LOGEMENTS</span> 
        </h2>
        <ImageCarousel />
      </Container>
      <Container fluid className="my-5 py-4 bg-light">
        <h2 className="fw-bold display-4 text-center mb-5" data-aos="zoom-in">
          <span className="text-warning">TÉMOIGNAGES</span> DE NOS CLIENTS
        </h2>
  
        <Row className="g-4 justify-content-center">
          <Col xs={12} md={6} lg={3} data-aos="fade-up" data-aos-delay="100">
            <div className="h-100 d-flex flex-column">
              <CommentCard 
                imgprofile={Logement1}
                namecomment="Sarah Dupont"
                content="Service exceptionnel ! J'ai trouvé mon logement idéal en moins d'une semaine."
                className="shadow-lg flex-grow-1"
              />
            </div>
          </Col>

          <Col xs={12} md={6} lg={3} data-aos="fade-up" data-aos-delay="200">
            <div className="h-100 d-flex flex-column">
              <CommentCard 
                imgprofile={Logement2}
                namecomment="Pierre Martin"
                content="Transparence des prix appréciable. Aucun frais caché, je recommande !"
                className="shadow-lg flex-grow-1 bg-white" 
              />
            </div>
          </Col>

          <Col xs={12} md={6} lg={3} data-aos="fade-up" data-aos-delay="300">
            <div className="h-100 d-flex flex-column">
              <CommentCard 
                imgprofile={Logement2}
                namecomment="Emma Leroy"
                content="Les photos correspondent parfaitement à la réalité. Très professionnel."
                className="shadow-lg flex-grow-1 border-top border-4 border-warning"
              />
            </div>
          </Col>

          <Col xs={12} md={6} lg={3} data-aos="fade-up" data-aos-delay="400">
            <div className="h-100 d-flex flex-column">
              <CommentCard 
                imgprofile={Logement3}
                namecomment="Thomas Moreau"
                content="L'équipe m'a accompagné à chaque étape. Un sans-faute !"
                className="shadow-lg flex-grow-1 bg-gradient-light"
              />
            </div>
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
