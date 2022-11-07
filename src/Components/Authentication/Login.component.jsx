import React from "react";
import { useState, useContext } from "react";
import AuthContext from "../../context/auth.context";

import axios from "../../config/api";
const LOGIN_URL = "api/v1/auth/login";

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

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [errorAlert, setErrorAlert] = useState(false);

  /***** Handler *****/
  const handleFieldsChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    setButtonDisabled(true);
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      const token = response?.data.token;
      const approved = response?.data.approved;
      setAuth({ email, token, approved });
      localStorage.setItem("user", JSON.stringify(auth));
      setButtonDisabled(false);
    } catch (error) {
      if (error.response.status === 401) {
        setErrorMessage("Wrong Email or Password");
      } else if (error.response.status === 500) {
        setErrorMessage("Not Authorised");
      }

      setErrorAlert(true);
      setFormFields(defaultFormFields);
    }
  };

  return (
    <Container>
      <Row style={mainRowStyle}>
        <Col xs={6} style={mainColStyle}>
          <h1>Login</h1>
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
            <Button variant="primary" disabled={buttonDisabled} type="submit">
              Login
            </Button>
          </Form>
          {errorAlert && (
            <Alert
              variant="danger"
              onClose={() => {
                setErrorAlert(false);
                setButtonDisabled(false);
              }}
              dismissible
            >
              <p>{errorMessage}</p>
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
