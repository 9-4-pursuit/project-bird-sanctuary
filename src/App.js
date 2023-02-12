import { useState } from "react";
import birdData from './data/birds'
import BirdCards from "./Components/BirdCards";
import Cart from './Components/Cart'
import Checkout from "./Components/Checkout";
import './App.css'
import bonusItems from "./data/bonusItems"


function App () {


  return (
    <div className="app">
      {/* below is the layout of all the components and how they will be displayed */}
      <Cart  bonusItems={bonusItems}/>
      {/* <BirdCards name='name' price="amount" /> */}
      <BirdCards birdData={birdData} />
      <Checkout />
    </div>
  );
};

export default App;
