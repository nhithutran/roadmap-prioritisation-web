import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth.context";
import logoImg from "../../assets/Logo.png";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";

import axios from "../../config/api";
import useBearer from "../../hooks/useBearer";
const CHANGE_PASSWORD_URL = "api/v1/auth/changepassword";

const ChangePassword = () => {
  const mainRowStyle = {
    height: "85vh",
  };

  const mainColStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  };
  /***** End Styles *****/

  /**** Default value */
  const defaultValue = {
    currentPassword: "",
    email: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const [userData, setUserData] = useState(defaultValue);
  const { auth, setAuth } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const { currentPassword, email, newPassword, confirmNewPassword } = userData;
  const [userToken, setUserToken] = useState(useBearer());
  const [alertError, setAlertError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${userToken}`,
    },
    withCredentials: false,
  };

  useEffect(() => {
    //only activate button if passwords are equal and more than 6 char long
    if (newPassword != confirmNewPassword || newPassword.length < 6) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [newPassword, confirmNewPassword]);

  useEffect(() => {
    setUserData({ ...userData, email: auth.email });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      const response = await axios.put(
        CHANGE_PASSWORD_URL,
        JSON.stringify(userData),
        headers
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      setIsLoading(true);
      if (error.code === "ERR_NETWORK") {
        setErrorMessage("Can not connect to server");
        setAlertError(true);
      }
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <Container>
      <Row style={mainRowStyle}>
        <Col xs={6} className="auth-main-col-left" style={mainColStyle}>
          <h1>Change Password</h1>
          <img
          className="logo"
          src={logoImg}
          alt="Canva logo"
        ></img>
        </Col>
        <Col sx={6} style={mainColStyle}>
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <FormGroup controlId="formCurrentPassword">
                <FormLabel>Current Password</FormLabel>
                <FormControl
                  required
                  type="password"
                  placeholder="Enter current password"
                  name="currentPassword"
                  value={currentPassword}
                  onChange={handleOnChange}
                />
              </FormGroup>
            </Row>
            <Row className="mb-3">
              <FormGroup controlId="formNewPassword" as={Col}>
                <FormLabel>New Password</FormLabel>
                <FormControl
                  required
                  type="password"
                  placeholder="Enter new password"
                  name="newPassword"
                  value={newPassword}
                  onChange={handleOnChange}
                />
                {newPassword.length > 0 && newPassword.length < 6 && (
                  <Form.Text muted>
                    Password must be longer than 6 characters
                  </Form.Text>
                )}
              </FormGroup>
              <FormGroup controlId="formConfirmNewPassword" as={Col}>
                <FormLabel>Confirm New Password</FormLabel>
                <FormControl
                  required
                  type="password"
                  placeholder="Confirm new password"
                  name="confirmNewPassword"
                  value={confirmNewPassword}
                  onChange={handleOnChange}
                />
                {newPassword !== confirmNewPassword &&
                  confirmNewPassword.length !== 0 && (
                    <Form.Text muted>Passwords do not match</Form.Text>
                  )}
              </FormGroup>
            </Row>
            <Row className="mb-3">
              <Button variant="primary" type="submit" disabled={isLoading}>
                Change Password
              </Button>
            </Row>
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

export default ChangePassword;
