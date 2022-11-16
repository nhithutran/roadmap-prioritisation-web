import React from "react";
import styled from "styled-components";
import estimationPageImg from "../assets/EstimationPage.png";

const Styles = styled.div`
  .boxed {
    display: flex;
    align-items: center;
    margin-left: 10%;
    margin-right: 10%;
    width: 70%;
    height: 140px;
    padding: 20px;
    border: 1px solid #67748e;
    border-radius: 5px;
    box-shadow: 0.5px 0.5px;
  }

  p.estAuthor {
    
  }
`;

const EstimationTopPanel = () => (
  <Styles>
    <div className="boxed">
      <div className="text">
        <h3>Estimation</h3>
        <p>
          The key is not to prioritize what's on you schedule, but to schedule your properties.
        </p>
        <p className="estAuthor">Stephen Convey</p>
      </div>
      <div className="EstimationImg">
      <img
            src={estimationPageImg}
            alt="Estimation Top Panel icon"
          ></img>
      </div>
    </div>
  </Styles>
);

export default EstimationTopPanel;