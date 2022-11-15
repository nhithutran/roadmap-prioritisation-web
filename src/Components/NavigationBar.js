import React, { useContext } from "react";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { useLocation, useNavigate, Link } from "react-router-dom";
import AuthContext from "../context/auth.context";

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
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = (event) => {
    setAuth({});
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
            src="../assets/logo.jpg"
            alt="Canva logo"
            width="10px height=10px"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {auth?.email && (
              <>
                <Link to="/">Dashboard</Link>
                <Link to="/estimation">Estimation</Link>
                <Link to="/users"> Users</Link>
              </>
            )}

            {/* <button className="logout-button">Log Out</button> */}
          </Nav>
        </Navbar.Collapse>
        {auth?.email ? (
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
