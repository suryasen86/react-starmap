import React from "react";
 
import Header from "./MyComponents/Header";
function Error() {
  return (
      <>
    <Header />
    <div style={{backgroundColor:"black"}}>
      
   
 
      <div class="info text-center">
      <h1>404</h1>
        <h2>We can't find that page</h2>
        <p>
          We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologise on it's behalf.
        </p>
     <a href="/"> Home page</a>
      </div>
    </div>
    </>
  );
}

export default Error;
