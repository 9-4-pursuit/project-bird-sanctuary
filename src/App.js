import { useState } from "react";
import birdData from "./data/birds";
import BirdCards from "./Components/BirdCards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import "./App.css"

function App () {
  return (
    <div>
      <Cart />
      <BirdCards birdData={birdData}/>
      <Checkout />
    </div>
  );
};

export default App;
