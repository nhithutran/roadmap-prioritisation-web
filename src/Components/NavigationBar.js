import React from "react";
import { useContext } from "react";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate, NavLink } from "react-router-dom";
import AuthContext from "../context/auth.context";
import brandlogoImg from "../assets/Brand-Logo.png";

// CSS-file ********************
const Styles = styled.div`
  .navbar {
    background-color: #7d7d7d;
  }

  .navbar-brand,
  .navbar-nav,
  nav-link {
    color: #white;
    &:hover {
      color: #7A5CFA;
    }
  }

  a.nav-links.active {
    text-decoration: none;
    color: black;
    font-size: 20px;
  }

  a.nav-links {
    text-decoration: none;
    color: #67748E;
    font-size: 20px;
  }


  .brandlogo {
    margin-left 30px;
    margin-right 20px;
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
          className="brandlogo"
            src={brandlogoImg}
            alt="Canva logo"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {auth?.email && (
              <>
                <div style={{ margin: "0px 10px" }}>
                  <NavLink className="nav-links" to="/">Initiatives</NavLink>
                </div>
                <div style={{ margin: "0px 10px" }}>
                  <NavLink className="nav-links" to="/estimation">Estimation</NavLink>
                </div>
                <div style={{ margin: "0px 10px" }}>
                  <NavLink className="nav-links" to="/users">Users</NavLink>
                </div>
              </>
            )}

          </Nav>
        </Navbar.Collapse>
        {auth?.email ? (
          <Nav.Link className="float-end">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
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
          <Nav.Link href="/">Log In </Nav.Link>
        )}
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
