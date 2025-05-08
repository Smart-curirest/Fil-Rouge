import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from "react-bootstrap";

function CommentCard({ imgprofile, content, aosDelay, namecomment }) {
  return (
    <div>
        <>
              <Card
                className="h-100 shadow-none border-1 rounded-4 py-2 mb-md-0 mb-3 bg-primary h-100"
                data-aos="fade-up"
                data-aos-delay={aosDelay}
              >
                <CardHeader className="fw-medium fs-3 bg-transparent border-0 py-0 d-flex align-items-center">
                  <img src={imgprofile} alt="" className="img-thumbnail img-fluid rounded-5 w-25 h-auto objet-fit-cover" />
                  <h5 className="ms-2 fw-semibold fs-2 ">{namecomment}</h5>
                </CardHeader>
                <CardBody className="py-3 fs-3">{content}</CardBody>
                <CardFooter className="fs-6 text-right bg-transparent border-0">
                 <span className="text-orange-400 text-xl">★★★★★</span>
                </CardFooter>
              </Card>
            </>
    </div>
  )
}

export default CommentCard