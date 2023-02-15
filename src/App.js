import React, { useState } from "react";
//importing our components to app.js since it the parent component
import Form from "./Components/Form";
import Cards from "./Components/Cards";
import Cart from "./Components/Cart";
import "./index.css"

//preping our hooks 

function App() {
  const [birds, setBirds] = useState([]);
  // want this blank so user can input thier personal info 
  const [,setForm] = useState({
firstName: "",
lastName: "",
email: "",
zipCode: "",
  });

  return (
    <>
    <div className="card">
      {/* importing the Form components */}
     <Form setBirds={setBirds} setForm={setForm}/>
     </div>
      {/* importing the Cart components  */}
     <div className="card">
        <Cart birds={birds} setBirds={setBirds}/>
   </div>
      {/* importing the info of the birds from cards component */}
  <div className="card">
        <Cards
           birds={birds}
          setBirds={setBirds}
          />
      </div>
      </>
  );
};

export default App;
