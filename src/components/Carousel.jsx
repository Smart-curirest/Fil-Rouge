import React from "react";
import { Carousel } from "react-bootstrap";
import choice1 from "../assets/choice1.png"
import choice2 from "../assets/choice2.png"
import choice3 from "../assets/choice3.png"

function MiniSlide() {
  const slides = [choice1, choice2,choice3 ];
  return (
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
  );
}

export default MiniSlide;
