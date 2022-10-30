import './App.css';
import { useState, useEffect} from "react";

function InitiativeDashboard({ ticket_id }) {
  return (
    <div>
      <p>{ticket_id}</p>
    </div>
  )
}
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `./public/Initiatives.json`
    )
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data) 
    return (
      <InitiativeDashboard ticket_id={data.ticket_id/>
    );
  return (
    <div className="App">
      <h1>Initiative Dashboard</h1>
    </div>
  );
}

export default App;
