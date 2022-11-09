import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import axios from "../../config/api";
const INITIATIVE_URL = "/api/v1/initiatives/";
const defaultInputFields = {
  impact: "xSmall",
  confidence: "xSmall",
  effort: "xSmall",
  iceScore: 0,
  priority: "P-0",
  target: "Edu",
  launchDate: "January",
  comment: "",
};
const InitiativeItem = () => {
  let params = useParams();

  const [initiative, setInitiative] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const fetchInitiativeURL = INITIATIVE_URL + params.id;
      try {
        const response = await axios.get(fetchInitiativeURL);
        const responseInitiative = response.data.data;
        setInitiative(responseInitiative);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  console.log(initiative);
  return (
    <Container>
      <h1>Initiatives</h1>
      <h2>Table goes here</h2>
      <hr />
      <h3> Additional Information:</h3>
      InitiativeItem{params.id}
    </Container>
  );
};

export default InitiativeItem;
