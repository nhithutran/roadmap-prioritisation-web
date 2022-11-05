import React from "react";
import InitiativesMockUp from "../initiativesList.json";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'tiket_id', headerName: 'Ticket#', width: 90 },
  { field: 'Initiative', headerName: 'Initiative', width: 100 },
  { field: 'decsription', headerName: 'Description', width: 200 },
  { field: 'submit_date', headerName: 'Submit Date', width: 90 },
  { field: 'owner', headerName: 'Owner', width: 90 },
  {
    field: 'ice_score',
    headerName: 'I.C.E. Score',
    type: 'number',
    width: 90,
  },
  {
    field: 'priority',
    headerName: 'Priority',
    width: 90,
  }
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
        pageSize={5}
        rowsPerPageOptions={[5]}
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

      {/* <div className="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a className="active" href="#">
          2
        </a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div> */}

      {/* let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
} */}
    </Styles>
  );
}

export default Dashboard;