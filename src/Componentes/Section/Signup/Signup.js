import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Signup.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { NavLink } from "react-router-dom";
import Googlesignup from "../Googlesignup/Googlesignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const messageDiv = document.getElementById("message-div");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    messageDiv.innerHTML = error;
  }
  if (loading) {
    messageDiv.innerHTML = "Loading...";
  }
  if (user) {
    messageDiv.innerHTML = "User Registered";
  }

  return (
    <section className="rej-area">
      <Container>
      <h2 className="text-center py-5" >Sign Up Here</h2>
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
            <NavLink  to="/signin" className="sign-up-link nav-link">Already Have an Account? Sign in Here </NavLink>
            <Button
              variant="primary"
              className="sign-up-btn w-100"
              type="submit"
              onClick={() => createUserWithEmailAndPassword(email, password)}
            >
              Submit
            </Button>
            <span className="or-Style">Or</span>
            <Googlesignup />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Signup;
