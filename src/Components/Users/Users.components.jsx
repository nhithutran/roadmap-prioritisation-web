import React from "react";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/auth.context";
import axios from "../../config/api";

import {
  Container,
  Form,
  Row,
  FormGroup,
  FormLabel,
  FormControl,
  Card,
  Button,
  Dropdown,
  Spinner,
} from "react-bootstrap";

const USERS_URL = "api/v1/users/";

const cardContainerStyle = {
  display: "flex",
  direction: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
};

const Users = () => {
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { auth } = useContext(AuthContext);

  const userToken = auth.token;
  console.log(userToken)
  const privateHeaders = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
    withCredentials: false,
  };

  const emailHandleChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    const filtering = users.filter((user) => {
      return user.email.includes(inputEmail);
    });
    setFilteredUsers(filtering);
  };

  const handleApprovalButton = async (event) => {
    const buttonId = event.target.name;
    const userURL = USERS_URL + buttonId;
    setIsLoading(true);

    // Change/upadte the status of the user (approval)
    try {
      const responseUser = await axios.get(userURL, privateHeaders);
      let user = responseUser.data.data;

      let approved = user.approved;

      approved = !approved;

      user = { ...user, approved: approved };

      const responsePutUser = await axios.put(
        userURL,
        JSON.stringify(user),
        privateHeaders
      );

      const response = await axios.get(USERS_URL, privateHeaders);
      const responseUsers = response.data.data;
      setUsers(responseUsers);
      setIsLoading(false);
      setFilteredUsers(responseUsers);
    } catch (err) {
      console.log(err);
    }
  };

  // delete user
  const handleDeleteUser = async (event) => {
    const buttonId = event.target.name;
    const userURL = USERS_URL + buttonId;

    // Change/upadte the status of the user (approval)
    try {
      const responseUser = await axios.delete(userURL, privateHeaders);

      const response = await axios.get(USERS_URL, privateHeaders);
      const responseUsers = response.data.data;
      setUsers(responseUsers);
      setFilteredUsers(responseUsers);
    } catch (err) {
      console.log(err);
    }
  };

  //initail loading fetch all users
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(USERS_URL, privateHeaders);
        const responseUsers = response.data.data;
        setUsers(responseUsers);
        setFilteredUsers(responseUsers);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const usersList = filteredUsers.map((user) => {
    return (
      <Card
        key={user._id}
        style={{ width: "18rem", borderWidth: "2px" }}
        border={user.approved ? "primary" : "warning"}
        className="my-2"
      >
        <Card.Header>
          <Card.Title
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {user.firstName} {user.lastName}{" "}
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant={user.approved ? "outline-primary" : "outline-warning"}
              >
                ...
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  as="button"
                  name={user._id}
                  onClick={handleDeleteUser}
                >
                  Delete User
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Title>

          <Card.Subtitle>{user.email}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Button
            variant={user.approved ? "outline-primary" : "outline-warning"}
            size="sm"
            onClick={handleApprovalButton}
            name={user._id}
          >
            {user.approved ? <>Approved</> : <>Approval pending</>}
          </Button>
        </Card.Body>
      </Card>
    );
  });
  return (
    <Container>
      <Form>
        <Row>
          <FormGroup controlId="formEmail">
            <FormLabel> Email</FormLabel>
            <FormControl
              required
              type="text"
              placeholder="Email Search"
              value={email}
              onChange={emailHandleChange}
            />
          </FormGroup>
        </Row>
      </Form>
      <hr></hr>
      {isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <section style={cardContainerStyle}>{usersList}</section>
      )}
    </Container>
  );
};

export default Users;
