import React from "react";
import styled from "styled-components";
import estimationPageImg from "../assets/EstimationPage.png";

const Styles = styled.div`
.boxed {
  display: flex;
  margin-left: 10%;
  width: 70%;
  height: 140px;
  padding-left: 20px;
  padding-top: 10px;
  border: 1px solid #67748e;
  border-radius: 5px;
  box-shadow: 0.5px 0.5px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.text {
  padding-left: 20px;
  padding-right: 65px;
}

.EstimationImg {
  border-radius: 15px;
  padding: 5px;

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
      <img
            src={estimationPageImg}
            alt="Estimation Top Panel icon"
            className="EstimationImg"
          ></img>
    </div>
  </Styles>
);

export default EstimationTopPanel;