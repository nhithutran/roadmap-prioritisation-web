import React from "react";
import InitiativesMockUp from "../initiativesList.json";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Ticket#', width: 80 },
  { field: 'initiative', headerName: 'Initiative', width: 200 },
  { field: 'description', headerName: 'Description', width: 500 },
  {
    field: 'submit_date',
    headerName: 'Submit date',
    type: 'date',
    width: 100,
  },
  { field: 'owner', headerName: 'Owner', width: 150 },
  {
    field: 'ice_score',
    headerName: 'I.C.E. score',
    type: 'number',
    width:100,
  },
  { field: 'priority', 
    headerName: 'Priority',
    type: 'number',
    width: 80 },
];

const rows = [
  { 
  id: 'TSM-895', 
  initiative: 'Update sales page.',
  description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  submit_date: '03-11-2022',
  owner: 'Spock Kor',
  ice_score: '16',
  priority: '3'
  },
  {
  id: 'TSM-890', 
  initiative: 'User sign up page.',
  description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  submit_date: '03-11-2022',
  owner: 'Paul Smith',
  ice_score: '18',
  priority: ''
  },
  {
  id: 'TSM-885', 
  initiative: 'Dashboard Page design.',
  description: 'Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  submit_date: '02-11-2022',
  owner: 'Matt Black ',
  ice_score: '24',
  priority: '1'
  },
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

      {/* <Table responsive striped hover>
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
                <td>{initiative.ticket_id}</td>
                <td>{initiative.initiative}</td>
                <td>{initiative.description}</td>
                <td>{initiative.submit_date}</td>
                <td>{initiative.owner}</td>
                <td>{initiative.ice_score}</td>
              </tr>
            );
          })}
        </tbody>
      </Table> */}

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