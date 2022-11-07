import React from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
<<<<<<< HEAD
import { getInitiatives } from "../config/api";
import initiatives from "../initiativesList.json";
=======
import { getInitiatives } from '../config/api';
import initiatives from "../initiativesList.json"
import { render } from "@testing-library/react";
>>>>>>> 7a791f6 (Anthony helped to fix initiatives table)

const Styles = styled.div`
  .d-inline mx-2 {
    padding: 50px;
    border: 40px;
  }

  .searchBar {
    display: flex;
    padding: 20px;
  }

  .pagination {
    display: flex;
    padding: 20px;
    align-items: right;
  }

  .pagination a {
    color: black;
    // float: center;
    padding: 8px 16px;
    text-decoration: none;
  }

  .pagination a.active {
    background-color: #7a5cfa;
    color: white;
  }

  .pagination a:hover:not(.active) {
    background-color: #ddd;
  }
`;

const columns = [
<<<<<<< HEAD
  { field: "_id", headerName: "Object_id", width: 50 },
  { field: "ticket_id", headerName: "Ticket#", width: 80 },
  { field: "initiative", headerName: "Initiative", width: 200 },
  { field: "description", headerName: "Description", width: 500 },
=======
  { field: 'ticket_id', headerName: 'Ticket#', width: 80 },
  { field: 'initiative', headerName: 'Initiative', width: 200 },
  { field: 'description', headerName: 'Description', width: 500 },
>>>>>>> 7a791f6 (Anthony helped to fix initiatives table)
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

const rows = initiatives;

// fetching data from MongoDB initiative table and setData to res.data so it can be rendered
function Dashboard() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    const fetchinitiatives = async () => {
      const res = await getInitiatives();
      const resData = res.data;
      setData(resData);
    };
    fetchinitiatives();
  }, []);

  // For search query
  // useEffect(() => {
  //   const fetchinitiatives = async () => {
  //     const res = await axios.get(`http://localhost:4000=query=${query}`)
  //     setData(res.data);
  //   };
  //   // Ignore search for the 1st 2 items to reduce calls
  //   if(query.length === 0 || query.length >2) fetchinitiatives()
  // },[query]);

  return (
    <Styles>
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

<<<<<<< HEAD
<<<<<<< HEAD
      <div style={{ height: 400, width: "100%" }}>
        {!data || data.length === 0 ? (
          <p>No data found</p>
        ) : (
          <DataGrid
            rows={data}
            getRowId={(obj) => obj.ticket_id}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[20]}
            checkboxSelection
          />
=======
      <div style={{ height: 400, width: '100%' }}>
=======
      <div style={{ height: 650, width: '100%' }}>
        {/* // define length to fix TypeError when reading property */}
>>>>>>> 89953fe (Adjusted height of table and hide object id)
        {!data || data.length === 0 ? (
          <p>No data can be found.</p>
        ): (
        <DataGrid
          rows={data}
          getRowId={((obj) => obj._id)}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[15]}
          checkboxSelection
        />
>>>>>>> 7a791f6 (Anthony helped to fix initiatives table)
        )}
      </div>
    </Styles>
  );
}

export default Dashboard;
