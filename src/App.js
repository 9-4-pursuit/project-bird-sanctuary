
import { useState } from "react";
import Cart from "./Components/Cart";
import BirdCard from "./Components/BirdCard";
import birdData from "./data/birds";
import Checkout from "./Components/Checkout";
import './App.css'
import bonusItems from "./data/bonusItems";



function App () {

  const [ adoptBirdTotal, setAdoptBirdTotal ] = useState(0);
  const [cart, setCart] = useState([]);


function handleAdopt(bird) {  
    setCart([...cart, bird])
    console.log(bird)
}

  return (
    <div className="app">
      <Cart bonusItems={bonusItems} adoptBirdTotal={adoptBirdTotal} cart={cart} setAdoptBirdTotal={setAdoptBirdTotal}/>
      <BirdCard birdData={birdData}  handleAdopt={handleAdopt}/>
      <Checkout/>
    </div>
  );
};

export default App;
