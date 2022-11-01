import React from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand, .navbar-nav, nav-link {
    color: #7D7D7D;

    &:hover {
      color: black;
    }
  }
`;

const NavigationBar = () => {
  <Styles>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
      </Navbar.Brand>
    </Navbar>  
  </Styles>
  return (

            <img
              src=".src/components/assets/logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Canva logo"
            />
          <Nav className="me-auto">
            <Nav.Link href="#Dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#link">Estimation</Nav.Link>
            <Nav.Link href="#link">Roadmap</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  );
};

export default NavigationBar;