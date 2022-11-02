import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #7d7d7d;
  }

  .navbar-brand,
  .navbar-nav,
  nav-link {
    color: #white;

    &:hover {
      color: black;
    }
  }
`;

const NavigationBar = () => (
  <Styles>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          src="../assets/logo.jpg"
          alt="Canva logo"
          width="10px height=10px"
        ></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Dashboard</Nav.Link>
          <Nav.Link href="/estimation">Estimation</Nav.Link>
          <Nav.Link href="/roadmap">Roadmap</Nav.Link>
          <Nav.Link href="/reports">Reports</Nav.Link>
          <Nav.Link href="/logout">
            <button className="logout-button">Log Out</button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavigationBar;
