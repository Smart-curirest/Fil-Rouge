import React from "react";
import { Accordion } from "react-bootstrap";

function FAQ({aosDelay}) {
  return (
    <>
      <Accordion
        defaultActiveKey="0"
        className="shadow-none border-1 rounded-5 mb-3 mb-md-0"
        data-aos="fade-up"
        data-aos-delay={aosDelay}
      >
        <Accordion.Item className="shadow-none border-1" eventKey="0">
          <Accordion.Header>
            <h3 className="fs-3 fw-semibold">VIVRE COMME A LA MAISON </h3>
          </Accordion.Header>
          <Accordion.Body className="fs-3 ">
          Découvrez des locaux conviviaux et partagez bien plus qu’un logement. Retrouvez les espaces qui vous ressemblent et vivez une expérience unique.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="shadow-none border-1" eventKey="1">
          <Accordion.Header>
            <h3 className="fs-3 fw-semibold">UN CADRE DE VIE AGREABLE </h3>
          </Accordion.Header>
          <Accordion.Body className="fs-3 ">
          Créez de beaux souvenirs autour de repas et de moments partagés. Votre futur logement vous attend, prêt à accueillir votre quotidien.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="shadow-none border-1" eventKey="2">
          <Accordion.Header>
            <h3 className="fs-3 fw-semibold">DES LOCAUX IDEAUX POUR VOTRE CONFORT</h3>
          </Accordion.Header>
          <Accordion.Body className="fs-3 ">
          Trouvez facilement des appartements, studios ou maisons adaptés à vos besoins. Profitez d'espaces modernes, chaleureux et bien équipés.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default FAQ;
