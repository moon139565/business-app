import React from "react";
import Col from "react-bootstrap/esm/Col";

const Blogjson = ({item}) => {
  return (
    <>
      <Col lg={4}>
        <div className="imge-parent mb-4">
          <img src={item.img} alt="" className="imagebb w-100" />
          <div className="imge-Text">
            <h2>{item.description}</h2>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Blogjson;
