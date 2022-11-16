import React from "react";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.jpg"

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

  img.logo {
    width: 50px;
    // height: 20px;
  }
`;

const NavigationBar = () => {
  const currentUser = localStorage.getItem("user");
  const navigate = useNavigate();

  const handleLogOut = (event) => {
    console.log(event.target.name);
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleChangePassword = (event) => {
    navigate("/changepassword");
  };
  return (
    <Styles>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            className="logo"
            src={logoImg}
            alt="Canva logo"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {currentUser && (
              <>
                <Nav.Link href="/">Dashboard</Nav.Link>
                <Nav.Link href="/estimation">Estimation</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
              </>
            )}

            {/* <button className="logout-button">Log Out</button> */}
          </Nav>
        </Navbar.Collapse>
        {currentUser ? (
          <Nav.Link className="float-end">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" variant="outline-primary">
                About Me
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  as="button"
                  name="changePassword"
                  onClick={handleChangePassword}
                >
                  Change Password
                </Dropdown.Item>
                <Dropdown.Item as="button" name="logOut" onClick={handleLogOut}>
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>
        ) : (
          <Nav.Link href="/login">Login </Nav.Link>
        )}
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
