import { signOut } from "firebase/auth";
import React from "react";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../Firebase.init";
import "./Header.css"

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
      signOut(auth)
  }
  return (
    <header className="header">
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand as={Link} to="./">Creative Agency</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <NavLink  to="./" className="nav-link"> Home </NavLink>
            <NavLink  to="/about" className="nav-link"> About </NavLink>
            <NavLink  to="/blog" className="nav-link"> Blog </NavLink>



            {
              user
              ?
              <Button className="nav-link btn" onClick={handleSignOut}> Sign Out </Button>
              :
              <NavLink  to="/signin" className="nav-link btn"> Sign In </NavLink>
            }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
