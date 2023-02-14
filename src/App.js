import React from "react";
import './App.css'
import Alert from "./Components/Alert";
import BirdCard from "./Components/BirdCard";
//import { useState } from "react";
import BirdLayout from "./Components/BirdLayout";
import Cart from "./Components/Cart";
import birdData from "./data/birds";


function App () {

  console.log(birdData)
  return (
    <div className="App">
      
      <h1>Hello, Bird Sanctuary App!</h1>
      {birdData.map((birds) => {
      
      return (
        <BirdLayout 
        birds={birdData}/>
      )

      })}

      <Cart />
    </div>
  );
};

export default App;
