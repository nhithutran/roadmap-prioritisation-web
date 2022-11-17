import React, { useReducer } from "react";
import { useState, useContext } from "react";
import AuthContext from "../../context/auth.context";
import { useNavigate, Link } from "react-router-dom";
import logoImg from "../../assets/Logo.png";

// Axios data/hooks
import axios from "../../config/api.js";
const LOGIN_URL = "api/v1/auth/login";
import publicHeaders from "../../config/publicHeaders";
// CSS-file ********************
import "./auth.style.css";

// Bootstrap ********************
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
  Spinner,
} from "react-bootstrap";

const Login = () => {
  /***** Default form fields *****/
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const { auth, setAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [errorAlert, setErrorAlert] = useState(false);

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
        LOGIN_URL,
        JSON.stringify({ email, password }),
        publicHeaders
      );

      const token = response?.data.token;
      const approved = response?.data.approved;

      setAuth({ email, token, approved });
      if (token && approved) {
        navigate("/");
      }
      setIsLoading(false);
    } catch (error) {
      if (error.response?.status === 401) {
        setErrorMessage("Wrong Email or Password");
      } else if (error.response?.status === 500) {
        setErrorMessage("Not Authorised");
      } else if (error.message == "Network Error") {
        setErrorMessage("can not reach server");
      }

      setErrorAlert(true);
      setIsLoading(false);
      setFormFields(defaultFormFields);
    }
  };

  return (
    <Container>
      <Row className="auth-main-row">
        <Col xs={6} className="auth-main-col-left">
        <h3 className="leftpanel-text">Welcome back to Roadmap Prioritisation</h3>
        <img
          className="logo"
          src={logoImg}
          alt="Canva logo"
        ></img>
        </Col>
        <Col xs={6} className="auth-main-col">
          <Row className="mb-3">
            <h4>Log In</h4>
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
            <Row className="mb-3">
              <Button
                variant="primary"
                disabled={isLoading}
                type="submit"
                as={Col}
                onClick={handlerSubmit}
              >
                Login
              </Button>
              {isLoading && <Spinner animation="border" variant="primary" />}
            </Row>
          </Form>
          <Link to="/forgot-password">Forgot Password</Link>
          <Link to="/signup">Sign Up</Link>
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
