import React from "react";
import { useState } from "react";
import birdData from "./data/birds";
import BirdCards from "./components/BirdCards";
import Cart from "./components/Cart";
// import Checkout from "./components/Checkout";
import "./styles.css"

function App() {
  const [cart, setCart] = useState([]);

    function handleAdoptBirdClick(bird) {
      setCart([...cart, bird]);
    };
  

  return (
    <>
      <div>
        <Cart
        cart={cart}
        setCart={setCart}
        />
      </div>
      {/* <div>
        <Checkout />
      </div> */}
      <div>
        <BirdCards 
        birds={birdData}
        handleAdoptBirdClick={handleAdoptBirdClick}
        />
      </div>
    </>
  );
}

export default App;
