import { Button, Card, CardBody, CardFooter, CardImg } from "react-bootstrap";
import { Calendar2Check } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function ProductCard({
  aosDelay,
  logementKey,
  logementLink,
  logementName,
  location,
  logementImg,
  iconName,
  content,
  price,
  date
}) {
  return (
    <>
      <Card
        className="h-100 bg-transparent shadow-none rounded-0 border-0 mb-3 mb-md-0 rounded-3"
        data-aos="fade-up"
        data-aos-delay={aosDelay}
        key={logementKey}
      >
        <div className="position-relative">
          <Link
            to={`/logementDetail/${logementLink}`}
            className="text-decoration-none"
          >
            <CardImg
              src={logementImg}
              alt=""
              className="img-fluid rounded-0"
            />
          </Link>
          <div className="position-absolute top-0 p-md-3 p-2">
            <span className="bg-light px-3 pb-2 rounded-5">
              <Button
                variant="outline-light"
                className="fs-6 border-0 p-0 m-0 text-danger"
              >
                {iconName} <span className="fw-medium">CFA {price}</span>
              </Button>
            </span>
          </div>
        </div>
        <CardBody 
        className="py-3 px-0"
        // style={{
        //   background: "linear-gradient(to bottom, white 0%, white 50%, orange 50%, orange 100%)"
        // }}
        >
          <h3>
            <Link
              to={`/logementDetail/${logementLink}`}
              className="fs-2 fw-semibold text-decoration-none "
            >
              {logementName}
            </Link>
          </h3>
          <h4 className="fs-2 text-warning mb-3 fw-semibold">{location}</h4>
          <p className="fs-3">{content}</p>
        </CardBody>
        <CardFooter
         className="pt-0 fs-6 border-0  text-end bg-warning text-white"
        //  style={{ backgroundColor: 'orange', color: 'white' }}
        >
          <span className="d-flex align-items-center justify-content-end">
            <Calendar2Check className="me-1" /> - {date}
          </span>
        </CardFooter>
      </Card>
    </>
  );
}

export default ProductCard;
