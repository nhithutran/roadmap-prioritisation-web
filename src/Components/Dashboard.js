import React from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getInitiatives } from '../config/api';
import { Container, Row, Button, Col, } from "react-bootstrap";
import InitiativeTopPanel from "./InitiativeTopPanel";
import { useParams } from "react-router-dom"


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

// function getObjId() {
//   let { Object_id } = useParams();
// };

const columns = [ 
  { 
    field: 'ticket_id',
    headerName: 'Ticket#', 
    width: 80, 
    renderCell: (obj) => <a href={`http://localhost:3000/initiatives/${obj.id}`}>{obj.value}</a> },
  { field: 'initiative', headerName: 'Initiative', width: 200 },
  { field: 'description', headerName: 'Description', width: 400 },
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
function Dashboard () {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchinitiatives = async () => {
      const res = await getInitiatives();
      const resData = res.data
      setData(resData|| []); // Ensure that data not null
    };
    fetchinitiatives();
  }, []);

// hasMatch function matches query with fields in table
const hasMatch = (field, query) => {
  // Got TypeError: Cannot read properties of undefined (reading 'includes'). Provided fallback for fields.
  return (field || "").includes(query.toLowerCase())
}

// Query search to check against fields and not case insensitive
const displayData = data.filter(row => {
  return hasMatch(row.ticket_id.toLowerCase(), query) ||
         hasMatch(row.initiative.toLowerCase(), query) ||
         hasMatch(row.description.toLowerCase(), query) ||
         hasMatch(row.owner.toLowerCase(), query)
})

// Handle change when initiative(s) is ticked
function AddToEstimation () {
  const [checkboxSelection, setcheckboxSelection] = useState("");

  const addInitiative = () => {

  }
}


  return <div className="container">
    <Styles>
      <Container>
      <InitiativeTopPanel />
      <div className="searchBar">
        <div className="textInput">
          <input
            type="text"
            className="searchTerm"
            placeholder="Search.."
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </div>
      </div>

      <div style={{ height: 650, width: '100%' }}>
        <DataGrid
          rows={displayData}
          getRowId={((obj) => obj._id)}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[15]}
          // checkboxSelection
          checkboxSelection columns={columns}{...data}  />  

        />
      </div>
      <Row className="mb-3">
        <Col xs={4}>
          <Button style={{ width: "12rem" }}>Add to Estimation</Button>
        </Col>
      </Row>
      </Container>
    </Styles>
    </div>
}

export default Dashboard;
