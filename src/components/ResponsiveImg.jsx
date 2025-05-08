import React from "react";

function ResponsiveImg({ imgSrc, imgAlt, rounded, aosDelay }) {
  return (
    <>
      <img
        src={imgSrc}
        alt={imgAlt}
        loading="lazy"
        className={`img-fluid w-100 h-auto mb-3 mb-md-0 ${
          rounded ? "rounded-4" : ""
        }`}
        data-aos={aosDelay ? "fade-up" : undefined}
        data-aos-delay={aosDelay || undefined}
      />
    </>
  );
}

export default ResponsiveImg;
