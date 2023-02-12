import React from "react";
import Alert from "./Components/Alert";
//import { useState } from "react";
// import BirdCards from "./Components/BirdCards";


function App () {
  
  
  
  return (
    <div className="App">
      <h1>Hello, Bird Sanctuary App!</h1>
      <Alert type="success">
        <p>You have adopted birds. Thank you!</p>
      </Alert>

      {/* <Cart />
      <BirdCards /> */}
    </div>
  );
};

export default App;
