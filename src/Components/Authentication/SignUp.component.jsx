import React from "react";
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

const SignUp = () => {
  const mainRowStyle = {
    height: "100vh",
  };

  const mainColStyle = {
    height: "100%",
    display: "flex",
    alignItems: "center",
  };

  return (
    <Container>
      <Row style={mainRowStyle}>
        <Col xs={6}>
          <h1>Hello world</h1>
        </Col>
        <Col xs={6} style={mainColStyle}>
          <Form style={{ width: "100%" }}>
            <Row className="mb-3">
              <FormGroup as={Col} controlId="formFirstName">
                <FormLabel>First Name</FormLabel>
                <FormControl
                  required
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                />
              </FormGroup>
              <FormGroup as={Col} controlId="formLastName">
                <FormLabel>Last Name</FormLabel>
                <FormControl
                  required
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
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
                />
              </FormGroup>
              <FormGroup as={Col} controlId="formConfirmPassword">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl
                  required
                  type="password"
                  placeholder="Confirm password"
                  name="confirmPassword"
                />
              </FormGroup>
            </Row>
            <Button variant="primary" type="submit">
              Enter
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
