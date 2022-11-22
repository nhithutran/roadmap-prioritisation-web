import React from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState, useContext } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import InitiativeTopPanel from "./InitiativeTopPanel";
import axios, { fetchInitiatives } from "../config/api";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth.context";

const Styles = styled.div`
  .d-inline mx-2 {
    padding: 50px;
    border: 40px;
  }

  .searchBar {
    display: flex;
    padding: 20px;
  }
`;

const columns = [
  {
    field: "ticket_id",
    headerName: "Ticket#",
    width: 80,
    renderCell: (obj) => (
      <Link data-testid={obj.id} to={`/initiatives/${obj.id}`}>
        {obj.value}
      </Link>
    ),
  },
  { field: "initiative", headerName: "Initiative", width: 200 },
  { field: "description", headerName: "Description", width: 400 },
  {
    field: "submit_date",
    headerName: "Submit date",
    type: "date",
    width: 100,
  },
  { field: "owner", headerName: "Owner", width: 150 },
  {
    field: "ice_score",
    headerName: "I.C.E. score",
    type: "number",
    width: 100,
  },
  { field: "priority", headerName: "Priority", type: "number", width: 80 },
];

// Fetch and store data from MongoDB initiative table. setData to res.data so it can be rendered.
function InitiativePage() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const { auth } = useContext(AuthContext);

  const privateHeaders = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    withCredentials: false,
  };

  const fetchAndSetInitiatives = async () => {
    try {
      const data = await fetchInitiatives(auth.token);
      setData(data || []); // Ensure that data not null
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAndSetInitiatives();
  }, []);

  // hasMatch function matches query with fields in table
  const hasMatch = (field, query) => {
    // Got TypeError: Cannot read properties of undefined (reading 'includes'). Provided fallback for fields.
    return (field || "").includes(query.toLowerCase());
  };

  // Query search to check against fields and not case insensitive
  const displayData = data.filter((row) => {
    return (
      hasMatch(row.ticket_id.toLowerCase(), query) ||
      hasMatch(row.initiative.toLowerCase(), query) ||
      hasMatch(row.description.toLowerCase(), query) ||
      hasMatch(row.owner.toLowerCase(), query)
    );
  });

  // Handle change when initiative(s) is ticked
  const handleAddToEstimation = async () => {
    const data = { selectedData: selectedData };
    try {
      const response = await axios.put(
        "/api/v1/estimations/createEstimation",
        data,
        privateHeaders
      );

      await fetchAndSetInitiatives();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container" data-testid="initpage">
      <Styles>
        <Container>
          <InitiativeTopPanel />
          <div className="searchBar">
            <div className="textInput">
              <input
                type="text"
                className="searchTerm"
                placeholder="Search.."
                onChange={(e) => setQuery(e.target.value)} // Store which initiative user selects on checkbox
              ></input>
            </div>
          </div>

          <div style={{ height: 650, width: "100%" }}>
            <DataGrid
              data-testid="gridtable"
              rows={displayData}
              getRowId={(obj) => obj._id}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              checkboxSelection
              onSelectionModelChange={(data) => {
                setSelectedData(data);
              }}
              {...data}
            />
          </div>
          <Button
            data-testid="estimationbtn"
            className="initAddEstButton"
            style={{ width: "12rem" }}
            onClick={handleAddToEstimation}
          >
            Add to Estimation
          </Button>
        </Container>
      </Styles>
    </div>
  );
}

export default InitiativePage;
