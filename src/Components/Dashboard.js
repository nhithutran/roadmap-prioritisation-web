import React from "react";
import InitiativesMockUp from "../initiativesList.json";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Ticket#', width: 70 },
  { field: 'initiative', headerName: 'Initiative', width: 130 },
  { field: 'description', headerName: 'Description', width: 400 },
  {
    field: 'submit_date',
    headerName: 'Submit Date',
    type: 'Date',
    width: 100,
  },
  { field: 'owner', headerName: 'Owner', width: 160 },
  {
    field: 'ice_score',
    headerName: 'I.C.E. score',
    type: 'Number',
    width:100,
  },
  
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

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

function Dashboard() {
  return (
    <Styles>
      <div className="searchBar">
        <div className="textInput">
          <input
            type="text"
            className="searchTerm"
            placeholder="Search.."
          ></input>
          <button type="submit" className="searchButton">
            <img src="https://img.icons8.com/ios-glyphs/20/000000/search--v1.png" />
          </button>
        </div>
      </div>

      
      {/* <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle variant="secondary" id="dropdown-autoclose-true">
          Season
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Spring</Dropdown.Item>
          <Dropdown.Item href="#">Summer</Dropdown.Item>
          <Dropdown.Item href="#">Autumn</Dropdown.Item>
          <Dropdown.Item href="#">Winter</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}

      {/* <Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle variant="secondary" id="dropdown-autoclose-inside">
          ICE Score MIn
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">20</Dropdown.Item>
          <Dropdown.Item href="#">21</Dropdown.Item>
          <Dropdown.Item href="#">22</Dropdown.Item>
          <Dropdown.Item href="#">23</Dropdown.Item>
          <Dropdown.Item href="#">24</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle variant="secondary" id="dropdown-autoclose-outside">
          ICE Score Max
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">30</Dropdown.Item>
          <Dropdown.Item href="#">29</Dropdown.Item>
          <Dropdown.Item href="#">28</Dropdown.Item>
          <Dropdown.Item href="#">27</Dropdown.Item>
          <Dropdown.Item href="#">26</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}

<div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[]}
        checkboxSelection
      />
    </div>

      <Table responsive striped hover>
        <thead>
          <tr>
            <th>Ticket</th>
            <th>Initiative</th>
            <th>Description</th>
            <th>Submit Date</th>
            <th>Owner</th>
            <th>I.C.E score</th>
          </tr>
        </thead>

        <tbody>
          {InitiativesMockUp.map((initiative, i) => {
            return (
              <tr key={i}>
                <td>{initiative.id}</td>
                <td>{initiative.initiative}</td>
                <td>{initiative.description}</td>
                <td>{initiative.submit_date}</td>
                <td>{initiative.owner}</td>
                <td>{initiative.ice_score}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <div className="initative-table">
        {InitiativesMockUp &&
          InitiativesMockUp.map((initiatives, i) => {
            return (
              <div key={i} className="InitiativeTable">
              </div>
            );
          })}
      </div>
    </Styles>
  );
}

export default Dashboard;