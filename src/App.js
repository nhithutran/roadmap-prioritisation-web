import './App.css';
import InitiativesList from '../src/initiatives.json';

function App() {
  console.log(InitiativesList)
  return (
    <div className="App">
      <h1>Initiative Dashboard</h1>

      {
        InitiativesList && InitiativesList.map( initiatives => {
          return(
            <div className="table">
              { initiatives.ticket_id }
              { initiatives.initiative}
              { initiatives.description }
              { initiatives.submit_date }
              { initiatives.owner }
              { initiatives.ice_score}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
