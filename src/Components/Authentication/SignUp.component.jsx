import React from "react";
import { useState } from "react";
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

import { useSignUp } from "../../hooks/useSignUp";

/**** Styles *****/
const SignUp = () => {
  const mainRowStyle = {
    height: "100vh",
  };

  const mainColStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  };
  /***** End Styles *****/

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
  const [duplicateEmail,setDuplicateEmail] = useState(false)

  const { signUp,isLoading,signUpError } = useSignUp();

  /***** Handler *****/
  const handleFieldsChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    if (password != confirmPassword || password.length < 6) {
      setAlertPassword(true);
      event.stopPropagation();
    }

    await signUp(firstName, lastName, email, password);
    if(signUpError){setDuplicateEmail(true)}
  };
  /***** End Handler *****/

  return (
    <Container>
      <Row style={mainRowStyle}>
        <Col xs={6} style={mainColStyle}>
          <h1>Sign Up</h1>
        </Col>
        <Col xs={6} style={mainColStyle}>
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
              {alertPassword && (
                <Alert
                  variant="danger"
                  onClose={() => {
                    setAlertPassword(false);
                  }}
                  dismissible
                >
                  <Alert.Heading>
                    Passwords must match and more than 6 characters long
                  </Alert.Heading>
                </Alert>
              )}
               {duplicateEmail && (
                <Alert
                  variant="danger"
                  onClose={() => {
                    setDuplicateEmail(false);
                  }}
                  dismissible
                >
                  <Alert.Heading>
                    Email already registered
                  </Alert.Heading>
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
