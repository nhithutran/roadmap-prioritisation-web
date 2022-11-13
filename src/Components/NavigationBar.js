import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

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

  .logout-button {
    display: flex-end;
    justify-content: space-between;
    float: right;
    // background-colour: 67748E;
  }
`;

const NavigationBar = () => {
  const currentUser = localStorage.getItem("user");
  return (
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
            {currentUser ? (
              <>
                <Nav.Link href="/">Dashboard</Nav.Link>
                <Nav.Link href="/estimation">Estimation</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
                <Nav.Link href="#"> Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link href="/login">Login </Nav.Link>
            )}

            {/* <button className="logout-button">Log Out</button> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
