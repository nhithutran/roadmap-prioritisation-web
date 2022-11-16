import React from "react";
import { Container } from "react-bootstrap";
import purpleImg from "../../assets/purple_checkmark.png";

const PendingSignUp = () => {
  return (
    <Container>
        <img
          className="purpleCheck"
          src={purpleImg}
          alt="Purple Checkmark logo"
        ></img>
      <h2>Thank you for signing up!</h2>
      <h4> Please wait for approval from an authorised manager</h4>
    </Container>
  );
};

export default PendingSignUp;
