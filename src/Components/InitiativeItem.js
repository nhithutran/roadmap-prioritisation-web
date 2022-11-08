import React from "react";
import { useParams } from "react-router-dom";
import { getInitiatives } from '../config/api';

const InitiativeItem = () => {  
  // Use url param value to get the correct initiative details. Get params directly from useParams hook.
  const { ticketId } = useParams();
  const initiative = getInitiatives.find(initiative => initiative.ticket_id === ticketId); 

  return (
    <div className='initiativeItem'>
        {/* trying to map through details specific to initiative */}
        {/* <h2>Initiative details:</h2>
        // Display Ticket# Initiative and Description
        {initiative.details???.map(ticket_id => (
            <p>{ticket_id}</p>
            <p>{initiative}</p>
            <p>{description}</p>
        ))} */}

     <div className='initiativeItem-dashboard'>
       <p>Back to <a className='linkDashboard' href='/'>Dashboard</a></p>
     </div>
    </div> 
  )
}  
   


export default InitiativeItem;