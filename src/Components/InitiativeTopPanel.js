import React from "react";
import styled from "styled-components";
// import ideaImage from "../assets/idea.jpg";

const Styles = styled.div`
  .boxed {
    display: flex;
    align-items: center;
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
    height: 140px;
    padding: 20px;  
    border: 1px solid #67748E;
    border-radius: 5px;
    box-shadow: .5px .5px;
  }
`;

const InitiativeTopPanel = () => (
  <Styles>
        <div className="boxed">
            <div className="text">
            <h3>Initiative</h3>
            <p>When we succeed, we succeed because of our individual initiative, but also beacause we do things together.</p>
            <p>Barack Obama</p>
            </div>
        </div>
  </Styles>
);

export default InitiativeTopPanel;