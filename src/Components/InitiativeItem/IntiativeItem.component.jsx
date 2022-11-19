import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../../context/auth.context";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormSelect,
  FormControl,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";

import axios from "../../config/api";
const INITIATIVE_URL = "/api/v1/initiatives/";
const defaultInputFields = {
  _id: "",
  ticke_id: "",
  initiative: "",
  description: "",
  submit_date: "",
  owner: "",
  impact: "?",
  confidence: "?",
  effort: "?",
  priority: "",
  target: "",
  target_launch: "",
};

const impactValue = ["?", "Small", "Medium", "Large", "Xlarge"];
const confidenceValue = ["?", "Small", "Medium", "Large", "Xlarge"];
const effortValue = ["?", "Xlarge", "Large", "Medium", "Small"];
const priorityValue = ["?", "P-1", "P-2", "P-3", "P-4"];
const targetValue = ["Free", "Pro", "Team", "Education", "All", "Others"];
const monthsValue = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//inputs are in strings.
const iceScoreCalculation = (impactVar, confidenceVar, effortVar) => {
  let impact = impactValue.findIndex((element) => impactVar === element);
  let confidence = confidenceValue.findIndex(
    (element) => confidenceVar === element
  );
  let effort = effortValue.findIndex((element) => effortVar === element);

  if (impact < 0) {
    impact = 0;
  }
  if (confidence < 0) {
    confidence = 0;
  }
  if (effort < 0) {
    effort = 0;
  }
  return impact * confidence * effort;
};

const InitiativeItem = () => {
  let params = useParams();

  const [initiativeData, setInitiativeData] = useState(defaultInputFields);
  const [isLoading, setIsLoading] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const privateHeaders = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    withCredentials: false,
  };

  const {
    _id,
    ticket_id,
    initiative,
    description,
    submit_date,
    owner,
    impact,
    confidence,
    effort,
    priority,
    target,
    target_launch,
    launchDate,
  } = initiativeData;

  const [iceScore, setIceScore] = useState(0);

  //used in isMounted and click reset
  const fetchData = async () => {
    const fetchInitiativeURL = INITIATIVE_URL + params.id;
    setIsLoading(true);
    try {
      const response = await axios.get(fetchInitiativeURL, privateHeaders);
      const responseInitiative = response.data.data;
      setInitiativeData(responseInitiative);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    setIceScore(iceScoreCalculation(impact, confidence, effort));
  }, []);

  useEffect(() => {
    setIceScore(iceScoreCalculation(impact, confidence, effort));
  }, [impact, confidence, effort]);

  const handleOnChange = (event) => {
    setInitiativeData({
      ...initiativeData,
      [event.target.name]: event.target.value,
    });
  };

  const handleReset = () => {
    fetchData();
    setIceScore(iceScoreCalculation(impact, confidence, effort));
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    const InitiativeIdURL = INITIATIVE_URL + params.id;
    try {
      const response = await axios.put(
        InitiativeIdURL,
        JSON.stringify({
          ticket_id,
          initiative,
          description,
          submit_date,
          owner,
          impact,
          confidence,
          effort,
          priority,
          target,
          target_launch,
        }),
        privateHeaders
      );

      setIsLoading(false);
      setIsAlert(true);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleAddToEstimation = async () => {
    setIsLoading(true);
    const lifecycle = "Estimation";
    const InitiativeIdURL = INITIATIVE_URL + params.id;
    try {
      const response = await axios.put(
        InitiativeIdURL,
        JSON.stringify({
          ticket_id,
          initiative,
          description,
          submit_date,
          owner,
          impact,
          confidence,
          effort,
          priority,
          target,
          target_launch,
          lifecycle,
        }),
        privateHeaders
      );

      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <Container>
      <h1>Initiative</h1>
      {isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <>
          <Row>
            <Col xs={1}>Ticket</Col>
            <Col xs={3}>Initiative</Col>
            <Col xs={5}>Description</Col>
            <Col xs={2}>Submit Date</Col>
            <Col xs={1}> Owner</Col>
          </Row>
          <hr />
          <Row>
            <Col xs={1}>{ticket_id}</Col>
            <Col xs={3}>{initiative}</Col>
            <Col xs={5}>{description}</Col>
            <Col xs={2}>{submit_date}</Col>
            <Col xs={1}> {owner}</Col>
          </Row>
          <hr />
          <h3> Additional Information:</h3>
          <Row className="mb-3">
            <Col className="mb-3" xs={2}>
              <FormGroup controlId="formImpact" className="mx-2">
                <FormLabel>Impact</FormLabel>
                <FormSelect
                  name="impact"
                  value={impact}
                  onChange={handleOnChange}
                >
                  {impactValue.map((item, index) => {
                    return <option key={index}>{item}</option>;
                  })}
                </FormSelect>
              </FormGroup>
            </Col>
            <Col className="mb-3" xs={2}>
              <FormGroup controlId="formConfidence" className="mx-2">
                <FormLabel>Confidence</FormLabel>
                <FormSelect
                  name="confidence"
                  value={confidence}
                  onChange={handleOnChange}
                >
                  {confidenceValue.map((item, index) => {
                    return <option key={index}>{item}</option>;
                  })}
                </FormSelect>
              </FormGroup>
            </Col>
            <Col className="mb-3" xs={2}>
              <FormGroup controlId="formEffort" className="mx-2">
                <FormLabel>Effort</FormLabel>
                <FormSelect
                  name="effort"
                  value={effort}
                  onChange={handleOnChange}
                >
                  {effortValue.map((item, index) => {
                    return <option key={index}>{item}</option>;
                  })}
                </FormSelect>
              </FormGroup>
            </Col>
            <Col className="mb-3" xs={2}>
              <FormGroup controlId="formICEscore" className="mx-2">
                <FormLabel>ICE Score</FormLabel>
                <FormControl
                  type="text"
                  name="iceScore"
                  xs={3}
                  value={iceScore}
                  disabled
                />
              </FormGroup>
            </Col>
            <Col className="mb-3" xs={2}>
              <FormGroup controlId="formPriority" className="mx-2">
                <FormLabel>Priority</FormLabel>
                <FormSelect
                  name="priority"
                  value={priority}
                  onChange={handleOnChange}
                >
                  {priorityValue.map((element, index) => {
                    return <option key={index}>{element}</option>;
                  })}
                </FormSelect>
              </FormGroup>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="mb-3" xs={2}>
              <FormGroup controlId="formTarget" className="mx-2">
                <FormLabel>Target</FormLabel>
                <FormSelect
                  name="target"
                  value={target}
                  onChange={handleOnChange}
                >
                  {targetValue.map((element, index) => {
                    return <option key={index}>{element}</option>;
                  })}
                </FormSelect>
              </FormGroup>
            </Col>
            <Col className="mb-3" xs={2}>
              <FormGroup controlId="formTargetLaunchDate" className="mx-2">
                <FormLabel>Target Launch Date</FormLabel>
                <FormSelect
                  name="target_launch"
                  value={target_launch}
                  onChange={handleOnChange}
                >
                  {monthsValue.map((element, index) => {
                    return <option key={index}>{element}</option>;
                  })}
                </FormSelect>
              </FormGroup>
            </Col>
            <Col xs={2}>
              {isAlert && (
                <Alert
                  variant="success"
                  onClose={() => {
                    setIsAlert(false);
                  }}
                  dismissible
                >
                  <Alert.Heading>Data Saved</Alert.Heading>
                </Alert>
              )}
            </Col>
          </Row>
        </>
      )}
      <Row className="mb-3">
        <Col xs={4}>
          <Button
            style={{ width: "12rem" }}
            disabled={isAlert}
            onClick={handleReset}
          >
            Reset
          </Button>
        </Col>
        <Col xs={4}>
          <Button
            style={{ width: "12rem" }}
            disabled={isAlert}
            onClick={handleUpdate}
          >
            Save
          </Button>
        </Col>
        <Col xs={4}>
          <Button
            style={{ width: "12rem" }}
            disabled={isAlert}
            onClick={handleAddToEstimation}
          >
            Add to Estimation
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default InitiativeItem;
