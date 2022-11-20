import React from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { Container, Dropdown } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import axios from "../config/api";
import EstimationTopPanel from "../Components/EstimationTopPanel";
import AuthContext from "../context/auth.context";
const ESTIMATION_URL = "/api/v1/estimations/";
import { privateHeaders } from "../config/api";

const Styles = styled.div`
  .d-inline mx-2 {
    padding: 50px;
    border: 40px;
  }

  .searchBar {
    display: flex;
    padding: 20px;
  }

  .Squad-dropdown {
    padding-bottom: 5px;
    margin-bottom: 15px;
    width: 120px

  }

`;

const columns = [
  {
    field: "ticket_id",
    headerName: "Ticket#",
    width: 80,
  },
  { field: "initiative", headerName: "Initiative", width: 150 },
  { field: "description", headerName: "Description", width: 300 },
  {
    field: "submit_date",
    headerName: "Submit date",
    type: "date",
    width: 100,
  },
  { field: "owner", headerName: "Owner", width: 100 },
  { field: "squad", headerName: "Squad", width: 120 },
  {
    field: "eng_est",
    headerName: "Eng. Est.",
    type: "Number",
    editable: "true",
    width: 80,
  },
  {
    field: "design_est",
    headerName: "Design Est.",
    type: "Number",
    editable: "true",
    width: 80,
  },
  {
    field: "pm_est",
    headerName: "PM Est.",
    type: "Number",
    editable: "true",
    width: 80,
  },
  {
    field: "estimationPriority",
    headerName: "Priority",
    type: "singleSelect",
    editable: "true",
    valueOptions: ["?", "P-1", "P-2", "P-3", "P-4"],
    width: 80,
  },
];

const squadValue = [
  "Teams/B2B",
  "Company",
  "CRO Foundations",
  "Foundations",
  "CRO PerMar Brand",
  "Subscriptions",
];

function EstimationPage() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const { auth } = useContext(AuthContext);

  const fetchEstimation = async () => {
      try {
        const res = await axios.get(ESTIMATION_URL, privateHeaders(auth.token));
      const resData = res.data.data;
      setData(resData || []); // Ensure that data not null
      console.log(resData)  
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
      fetchEstimation();
      console.log("testing")
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

  return (
    <div className="container" data-testid="estpage">
      <Styles>
        <Container>
          <EstimationTopPanel />
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

          <Dropdown>
            <Dropdown.Toggle className="Squad-dropdown">
              Squad
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                {squadValue.map((element, index) => {
                  return <option key={index}>{element}</option>;
                })}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={displayData}
              getRowId={(obj) => obj._id}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>
        </Container>
      </Styles>
    </div>
  );
}

export default EstimationPage;
