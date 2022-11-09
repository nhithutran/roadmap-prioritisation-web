import React from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getInitiatives } from '../config/api';
import { Container } from "react-bootstrap";
import InitiativeTopPanel from "./InitiativeTopPanel";

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
  { field: 'ticket_id', headerName: 'Ticket#', width: 80, renderCell: (obj) => <a href={`http://localhost:3000/initiatives/${obj.value}`}>{obj.value}</a> },
  { field: 'initiative', headerName: 'Initiative', width: 200 },
  { field: 'description', headerName: 'Description', width: 500 },
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


// const columns: GridColDef[] = [
//   {
//     field: 'date',
//     headerName: 'Year',
//     renderCell: (params) => (
//       <strong>
//         {params.value.getFullYear()}
//         <Button
//           variant="contained"
//           size="small"
//           style={{ marginLeft: 16 }}
//           tabIndex={params.hasFocus ? 0 : -1}
//         >
//           Open
//         </Button>
//       </strong>
//     ),
//   },
// ];

// Fetch and store data from MongoDB initiative table. setData to res.data so it can be rendered.
function Dashboard() {
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

  // original code
  // const displayDataX = data.filter(row => row.ticket_id.includes(query));


  // refactored code (exact same job but in two parts).  hasMatch function matches query with fields in table
const hasMatch = (field, query) => {
  // Got TypeError: Cannot read properties of undefined (reading 'includes'). Provided fallback for fields.
  return (field || "").includes(query.toLowerCase())
}

// Query search to check against fields and not case sensitive
const displayData = data.filter(row => {
  return hasMatch(row.ticket_id.toLowerCase(), query) ||
         hasMatch(row.initiative.toLowerCase(), query) ||
         hasMatch(row.description.toLowerCase(), query) ||
         hasMatch(row.owner.toLowerCase(), query)
})

  return (
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
          checkboxSelection
        />
      </div>
      <button className="addToEstimate">Add to Estimation</button>
      </Container>
    </Styles>
  );
}

export default Dashboard;
