// import { useState } from "react";
import birdData from "./data/birds"
import BirdCards from "./components/BirdCards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import './App.css'



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
