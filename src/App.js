// import { useState } from "react";
import birdData from "./data/birds"
import BirdCards from "./components/BirdCards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import './App.css'
import bonusItems from "./data/bonusItems"
import { useState } from "react";


function App () {
  const [adoptBird, setAdoptBird] = useState("");

  function handleAdopt() {
    setAdoptBird()
  }

  


  return (
    <div className="app">
        <Cart bonusItems={bonusItems}/>
        <BirdCards birdData={birdData}/>
        <Checkout />
    </div>
  );
};

export default App;
