import React from "react";
import styled from "styled-components";
import initiativePageImg from "../assets/InitiaitivePage.png";
const Styles = styled.div`
  .boxed {
    display: flex;
    align-items: right;
    margin-left: 10%;
    width: 80%;
    height: 140px;
    padding: 20px;
    border: 1px solid #67748e;
    border-radius: 5px;
    box-shadow: 0.5px 0.5px;
  }

  # InitiativeImg {
    border-radius: 5px;
    padding-left: 20%
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
      <div className="InitiativeImg">
      <img
            src={initiativePageImg}
            alt="Inititaive Top Panel icon"
          ></img>
      </div>
    </div>
  </Styles>
);

export default InitiativeTopPanel;
