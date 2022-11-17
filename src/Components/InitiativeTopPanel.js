import React from "react";
import styled from "styled-components";
import initiativePageImg from "../assets/InitiaitivePage.png";
const Styles = styled.div`
  .boxed {
    display: flex;
    margin-left: 10%;
    width: 75%;
    height: 150px;
    padding-left: 18px;
    padding-top: 5px;
    border: 1px solid #67748e;
    border-radius: 5px;
    box-shadow: 0.5px 0.5px;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .text {
    padding-left: 20px;
    padding-right: 40px;
  }

  .InitiativeImg {
    border-radius: 15px;
    padding: 10px;
  }
`;

const InitiativeTopPanel = () => (
  <Styles>
    <div className="boxed">
      <div className="text">
        <h3>Initiative</h3>
        <p>
          When we succeed, we succeed because of our individual initiative, but
          also beacause we do things together.
        </p>
        <p>Barack Obama</p>
      </div>
      <img
            src={initiativePageImg}
            alt="Inititaive Top Panel icon"
            className="InitiativeImg"
          ></img>
      </div>      
  </Styles>
);

export default InitiativeTopPanel;
