import React from "react";
import { useState } from "react";
import {
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

  /***** Handler *****/
  const handlerSubmit = async (event) => {
    event.preventDefault();
  };
  console.log(formFields);
  const handleFieldsChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  /***** End Handler *****/

  return (
    <Container>
      <Row style={mainRowStyle}>
        <Col xs={6} style={mainColStyle}>
          <h1>Hello world</h1>
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
              </FormGroup>
            </Row>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
