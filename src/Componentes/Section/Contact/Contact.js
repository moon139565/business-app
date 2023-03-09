import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-Area">
      <Container>
        <h2 className="text-center mb-5">Contact Area</h2>
        <Row className="contact-Parent">
          <Col lg={6}>
            <div className="contact-from">
              <h3>Drop Us a Line</h3>
              <input
                type={Text}
                id="contactName"
                placeholder="Full Name"
                className="form-control"
              />
              <input
                type={"email"}
                id="contactEmail"
                placeholder="Email Address"
                className="form-control"
              />
              <textarea
                id="contactmessage"
                rows={4}
                placeholder="Message"
                className="form-control"
              />
              <Button>Submit Now</Button>
            </div>
          </Col>

          <Col lg={{ span: 5, offset: 1 }}>
            <div className="contact-Text">
              <h4>Contact Me</h4>
              <p>
                A digital agency is a business you hire to outsource your
                digital marketing efforts, instead of handling in-house.
              </p>
              <ul>
                <li>
                  <a href="./">
                    <i class="fas fa-map-marked-alt"></i> Dupchanchia 5880, Bogura 5800
                  </a>
                </li>
                <li>
                  <a href="./">
                  <i class="fa-solid fa-phone"></i> +88017xxxxxxxx
                  </a>
                </li>
                <li>
                  <a href="./">
                  <i class="fa-solid fa-envelope"></i> mrmoon01752@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
