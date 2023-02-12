
import { useState } from "react";
import Cart from "./Components/Cart";
import BirdCard from "./Components/BirdCard";
import birdData from "./data/birds";
import Checkout from "./Components/Checkout";
import './App.css'



function App () {
  return (
    <div>
      <Cart/>
      <BirdCard birdData={birdData}/>
      <Checkout/>
    </div>
  );
};

export default App;
