import React from "react";
import { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Row,
  Button,
} from "react-bootstrap";

import axios from "../../config/api";
const RECOVERY_URL = "/api/v1/auth/forgotpassword";

const defaultEmail = { email: "" };

const EmailRecovery = () => {
  const [emailValue, setEmailValue] = useState(defaultEmail);
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState();

  const { email, value } = emailValue;

  const handleFieldsChange = (event) => {
    const { name, value } = event.target;

    setEmailValue({ ...emailValue, [name]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    setResponseMessage("");
    try {
      setIsLoading(true);
      const response = await axios.post(
        RECOVERY_URL,
        JSON.stringify({ email: email }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );

      setResponseMessage(response?.data?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handlerSubmit}>
        <Row className="mb-3">
          <FormGroup controlId="formEmail">
            <h2>Forgot Password?</h2>
            <h6>No worries, we'll send you reset instructions.</h6>
            <FormLabel>Email</FormLabel>
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
        <Row>
          <Button variant="primary" type="submit" disabled={isLoading}>
            Send
          </Button>
        </Row>
        <p>{responseMessage}</p>
      </Form>
    </Container>
  );
};

export default EmailRecovery;
