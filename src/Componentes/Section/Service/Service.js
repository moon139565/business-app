import React from "react";
import Col from "react-bootstrap/esm/Col";
import "./Service.css";
import Button from "react-bootstrap/Button"
const Service = ({ item }) => {
  return (
    <>
      <Col lg={3}>
        <div className="single-Service mb-4">
          <div className="single-img">
            <img src={item.img} alt="" className="blog-img w-100" />
            <div className="img-Text">
                <h3>{item.title}</h3>
            </div>
          </div>
          <div className="service-Text">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
          <Button>Red More</Button>
        </div>
      </Col>
    </>
  );
};

export default Service;
