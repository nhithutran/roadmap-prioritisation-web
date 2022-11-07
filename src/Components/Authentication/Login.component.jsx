import React from "react";
import { useState, useContext } from "react";
import AuthContext from "../../context/Auth.context";

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

const Login = () => {
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
    email: "",
    password: "",
  };

  const { auth, setAuth } = useContext(AuthContext);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  /***** Handler *****/
  const handleFieldsChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    setAuth({ email, password });
  };

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
            </Row>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
