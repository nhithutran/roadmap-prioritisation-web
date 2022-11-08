import React from "react";
import { useState, useEffect } from "react";
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

    try {
      const responseUser = await axios.get(userURL);
      let user = responseUser.data.data;

      let approved = user.approved;

      approved = !approved;

      user = { ...user, approved: approved };

      const responsePutUser = await axios.put(userURL, JSON.stringify(user), {
        headers: { "Content-Type": "application/json" },
        withCredentials: false,
      });

      const response = await axios.get(USERS_URL);
      const responseUsers = response.data.data;
      setUsers(responseUsers);
      setFilteredUsers(responseUsers);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(USERS_URL);
        const responseUsers = response.data.data;
        setUsers(responseUsers);
        setFilteredUsers(responseUsers);
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
          {user.firstName} {user.lastName}
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
      <section style={cardContainerStyle}>{usersList}</section>
    </Container>
  );
};

export default Users;
