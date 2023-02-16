import React, { useState } from "react";
import Cart from "./components/Cart";
import BirdCards from "./components/Birdcard";
import Checkout from "./components/Checkout";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";

import './App.css';

function App() {
  const [cart, setCart] = useState([])

  return (
        <div className="main">
<section>
      <Cart 
		  cart={cart} 
	      bonusItems={bonusItems} 
	      setCart={setCart}
	      />

      <Checkout 
	  		id="box2"
	      setCart={setCart}
	      />
</section>
      <BirdCards 
	      setCart={setCart} 
	      cart={cart} 
	      birds={birdData}
	      />
       </div>
  );
};

export default App;