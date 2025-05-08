import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "react-bootstrap";

function FonctionCard({ iconName, content, aosDelay }) {
  return (
    <>
      <Card
        className="shadow-none border-1 rounded-4 py-2 mb-md-0 mb-3 bg-primary"
        data-aos="fade-up"
        data-aos-delay={aosDelay}
      >
        <CardHeader className="fw-black fs-2 bg-transparent border-0 py-0">
          {iconName}
        </CardHeader>
        <CardBody className="py-3 fs-3">{content}</CardBody>
        <CardFooter className="fs-5 text-right bg-transparent border-0">
          Pages
        </CardFooter>
      </Card>
    </>
  );
}

export default FonctionCard; 
