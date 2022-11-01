import React from "react";
import InitiativesMockUp from "../initiativesList.json";

function Initiatives() {
    return (
      <div>
        {
          InitiativesMockUp && InitiativesMockUp.map((initiatives, i)  => {
            return(
              <div key={i}className="InitiativeTable">
                { initiatives.ticket_id }
                { initiatives.initiative}
                { initiatives.description }
                { initiatives.submit_date }
                { initiatives.owner }
                { initiatives.ice_score}
              </div>
            );
          })
        }
      </div>
    );
  }
  
  export default Initiatives;