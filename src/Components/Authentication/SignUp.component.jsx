import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import publicHeaders from "../../config/publicHeaders";
import axios from "../../config/api";
import logoImg from "../../assets/Logo.png";
const REGISTER_URL = "api/v1/auth/register";

// CSS-file ********************
import "./auth.style.css";

//Bootstrap *************************
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { width } from "@mui/system";

const SignUp = () => {
  let navigate = useNavigate();

  /***** Default form fields *****/
  const defaultFormFields = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, password, confirmPassword } = formFields;

  const [alertPassword, setAlertPassword] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    //only activate button if passwords are equal and more than 6 char long
    if (password != confirmPassword || password.length < 6) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [password, confirmPassword]);
  /***** Handler *****/
  const handleFieldsChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    setDisableButton(true);
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ firstName, lastName, email, password }),
        publicHeaders
      );
      setDisableButton(false);
    } catch (error) {
      setDisableButton(true);
      if (error.code === "ERR_NETWORK") {
        setErrorMessage("Can not connect to server");
        setAlertError(true);
      } else if (error?.response?.status === 409) {
        setErrorMessage("Email already in use");
        setAlertError(true);
      }
    }

    navigate("/signup/pendingsignup");
  };
  /***** End Handler *****/

  return (
    <Container>
      <Row className="auth-main-row">
        <Col xs={6} className="auth-main-col-left">
          <h3 className="leftpanel-text">Getting started with Roadmap Prioritisation</h3>
          <img
          className="logo"
          src={logoImg}
          alt="Canva logo"
        ></img>
        </Col>
        <Col xs={6} className="auth-main-col">
          <Row>
            <h4>Sign Up</h4>
            <h6> All Sign Ups require approval by an Authorised Manager</h6>
          </Row>
          <Form style={{ width: "80%", height: "6%" }} onSubmit={handlerSubmit}>
            <Row className="mb-3">
              <FormGroup as={Col} controlId="formFirstName">
                <FormLabel>First Name</FormLabel>
                <FormControl
                  required
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  value={firstName}
                  onChange={handleFieldsChange}
                />
              </FormGroup>
              <FormGroup as={Col} controlId="formLastName">
                <FormLabel>Last Name</FormLabel>
                <FormControl
                  required
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={handleFieldsChange}
                />
              </FormGroup>
            </Row>
            <Row className="mb-3">
              <FormGroup controlId="formEmail">
                <FormLabel> Email</FormLabel>
                <FormControl
                  required
                  type="email"
                  placeholder="Enter email address"
                  name="email"
                  value={email}
                  onChange={handleFieldsChange}
                />
              </FormGroup>
            </Row>
            <Row className="mb-3">
              <FormGroup as={Col} controlId="formPassword">
                <FormLabel>Password</FormLabel>
                <FormControl
                  required
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  onChange={handleFieldsChange}
                />
                {password.length > 0 && password.length < 6 && (
                  <Form.Text muted>
                    Password must be longer than 6 characters
                  </Form.Text>
                )}
              </FormGroup>
              <FormGroup as={Col} controlId="formConfirmPassword">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl
                  required
                  type="password"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleFieldsChange}
                />
                {password !== confirmPassword &&
                  confirmPassword.length !== 0 && (
                    <Form.Text muted>Passwords do not match</Form.Text>
                  )}
              </FormGroup>
            </Row>
            <Button className="signup-button" disabled={disableButton} type="submit">
              Sign Up
            </Button>
            <Row>
              {alertError && (
                <Alert
                  variant="danger"
                  onClose={() => {
                    setAlertError(false);
                    setDisableButton(false);
                  }}
                  dismissible
                >
                  <Alert.Heading>{errorMessage}</Alert.Heading>
                </Alert>
              )}
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
