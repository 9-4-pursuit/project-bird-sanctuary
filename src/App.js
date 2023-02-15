
import { useState } from "react";
import Cart from "./Components/Cart";
import BirdCard from "./Components/BirdCard";
import birdData from "./data/birds";
import Checkout from "./Components/Checkout";
import './App.css'
// import bonusItems from "./data/bonusItems";



function App () {

  const [ adoptBirdTotal, setAdoptBirdTotal ] = useState(0);
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);
 


function handleAdopt(bird) {  
    setCart([...cart, bird])
    console.log(bird)
    setAdoptBirdTotal(adoptBirdTotal + bird.amount);

}


   
function deleteBird(bird) {  
  // setCart([...cart, bird])
  console.log(bird)
  setAdoptBirdTotal(adoptBirdTotal - bird.amount); 

}


  return (
    <div className="app">
      <Cart  adoptBirdTotal={adoptBirdTotal} cart={cart} setAdoptBirdTotal={setAdoptBirdTotal} deleteBird={deleteBird} discount={discount} setDiscount={setDiscount} />
      <BirdCard birdData={birdData}  handleAdopt={handleAdopt}/>
      <Checkout/>
    </div>
  );
};

export default App;
