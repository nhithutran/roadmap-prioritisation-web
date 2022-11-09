import React from "react";

const NotFound = () => {
  return (
    <div className='notFound'>
      <div className='notFound-text'>
        <h2>Sorry! The page you’re looking for cannot be found.</h2>
     </div>

     <div className='notfound-dashboard'>
       <p>Back to <a className='linkDasboard' href='/'>Dashboard</a></p>
     </div>
    </div> 
  )   
};
   


export default NotFound;