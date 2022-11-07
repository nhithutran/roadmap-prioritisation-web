import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
          <Link to="/">Dashboard</Link>
          <Link to="estimation">Estimation</Link>
          <Link to="roadmap">Roadmap</Link>
          <Link to="reports">Reports</Link>
          <Link to="logout">
            <button className="logout-button">Log Out</button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavigationBar;
