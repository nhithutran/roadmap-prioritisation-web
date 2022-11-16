import React from "react";

const NotFound = () => {
  return <div className="container">
    <div className='notFound'>
        <h2>Sorry! The page you’re looking for cannot be found.</h2>
     </div>

     <div className='notfound-InitiativePage'>
       <p>Back to <a className='linkInitiativePage' href='/'>Initiative</a></p>
     </div>
  </div>   
};
   


export default NotFound;