import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Signin.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { NavLink } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const messageDiv = document.getElementById("message-div");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (error) {
    messageDiv.innerHTML = error;
  }
  if (loading) {
    messageDiv.innerHTML = "Loading...";
  }
  if (user) {
    messageDiv.innerHTML = "Sign In Sucessfull";
  }

  return (
    <section className="signin-area">
      <Container>
        <h2 className="text-center py-5">Sign In Here</h2>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                />
              </Form.Group>
              <div id="message-div"></div>
              <NavLink to="/signup" className="sign-in-link nav-link">
                New User? Sign Up Here
              </NavLink>
              <Button
                variant="primary"
                className="sign-in-btn"
                type="submit"
                onClick={() => signInWithEmailAndPassword(email, password)}
              >
                Sign In
              </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Signin;
