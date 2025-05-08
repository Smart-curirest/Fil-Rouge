import React from "react";
import { Col, Row } from "react-bootstrap";
import canvasImg from "../assets/head.png";

function HeaderImg() {
  return (
    <>
      <Row>
        <Col md={12}>
          <div className="position-relative">
            <img src={canvasImg} alt="" className="img-fluid object-fit-cover min-vh-0 w-100" loading="lazy" />
            <div className="position-absolute top-50 start-0 translate-left text-left ms-5">
              <h1 className="display-1 fw-medium text-warning line"> <br />
              FIND YOUR HOME SOUL
              </h1> 
              <p className="text-white fw-black fs-2">
              A place to call home for a fresh start and a new outlook <br />  <br />  

              Find the place that feels right — for a new journey, a new story. <br />
              Connect with those who make it possible.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default HeaderImg;
