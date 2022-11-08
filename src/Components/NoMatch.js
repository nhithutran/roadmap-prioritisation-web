import React from "react";

const NoMatch = () => {
  return (
    <div className='noMatch'>
      <div className='notMatch-text'>
        <h2>Sorry! The page you’re looking for cannot be found.</h2>
     </div>

     <div className='notfound-dashboard'>
       <p>Back to <a className='linkDasboard' href='/'>Dashboard</a></p>
     </div>
    </div> 
  )   
};
   


export default NoMatch;