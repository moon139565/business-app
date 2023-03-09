import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Blogjson from "../Blogjson/Blogjson";
import "./Blogtext.css";

const Blogtext = () => {
  const [Blogtext, setBlogjson] = useState([]);
  useEffect(() => {
    fetch("Blog.json")
      .then((res) => res.json())
      .then((data) => setBlogjson(data));
  }, []);
  return (
    <section className="Blog-Text">
      <Container>
        <Row>
          {Blogtext.map((item) => (
            <Blogjson key={item.id} item={item}></Blogjson>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blogtext;
