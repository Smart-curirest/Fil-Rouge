import React from "react";

function Footer() {
  return (
    <>
      <div className="my-5">
        <h2
          className="fw-bold display-1 mb-3 text-end text-break"
          data-aos="zoom-in"
        >
          @Gestion Logi
        </h2>
        <hr className="m-0 p-0" />
      </div>
      <footer
        className="mb-3 d-flex flex-wrap align-items-center justify-content-between"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <span className="text-muted fst-italic">@Murielle</span>
        <span className="text-muted fst-italic">
          &copy;Tout droits reserves - 2025
        </span>
      </footer>
    </>
  );
}

export default Footer;
