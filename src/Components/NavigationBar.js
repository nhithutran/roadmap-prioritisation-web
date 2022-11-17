import React from "react";
import { useContext } from "react";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
<<<<<<< HEAD
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import AuthContext from "../context/auth.context";
=======
import { useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.jpg"

>>>>>>> estimation-page
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
            className="logo"
            src={logoImg}
            alt="Canva logo"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {auth?.email && (
              <>
                <div style={{ margin: "0px 10px" }}>
                  <NavLink to="/">Dashboard</NavLink>
                </div>
                <div style={{ margin: "0px 10px" }}>
                  <NavLink to="/estimation">Estimation</NavLink>
                </div>
                <div style={{ margin: "0px 10px" }}>
                  <NavLink to="/users">Users</NavLink>
                </div>
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
