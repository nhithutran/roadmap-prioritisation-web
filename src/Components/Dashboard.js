import React from "react";
import InitiativesMockUp from "../initiativesList.json";
import styled from "styled-components";
import { Dropdown, Table } from "react-bootstrap";

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

      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle variant="secondary" id="dropdown-autoclose-true">
          Season
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Spring</Dropdown.Item>
          <Dropdown.Item href="#">Summer</Dropdown.Item>
          <Dropdown.Item href="#">Autumn</Dropdown.Item>
          <Dropdown.Item href="#">Winter</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="inside">
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
      </Dropdown>

      <Table responsive>
        <thead>
          <tr>
            <th> Ticket</th>
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

      <div className="pagination">
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
      </div>

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