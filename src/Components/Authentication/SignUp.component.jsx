import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "../../config/api";
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

/**** Styles *****/
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

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //only activate button if passwords are equal and more than 6 char long
    if (password != confirmPassword || password.length < 6) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [password, confirmPassword]);
  /***** Handler *****/
  const handleFieldsChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ firstName, lastName, email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
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
        <Col xs={6} className="auth-main-col">
          <h1>Sign Up</h1>
        </Col>
        <Col xs={6} className="auth-main-col">
          <Row className="mb-3">
            <h6> All Sign Ups require approval by an Authorised Manager</h6>
          </Row>
          <Form style={{ width: "100%" }} onSubmit={handlerSubmit}>
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
            <Button disabled={isLoading} variant="primary" type="submit">
              Sign Up
            </Button>
            <Row>
              {alertError && (
                <Alert
                  variant="danger"
                  onClose={() => {
                    setAlertError(false);
                    setIsLoading(false);
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
