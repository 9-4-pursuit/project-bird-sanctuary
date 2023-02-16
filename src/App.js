import { useState } from "react";
import Cart from "./Components/Cart";
import BirdCard from "./Components/BirdCard";
import birdData from "./data/birds";
import Checkout from "./Components/Checkout";
import "./App.css";
import bonusItems from "./data/bonusItems";

function App() {
  const [adoptBirdTotal, setAdoptBirdTotal] = useState(0);
  const [cart, setCart] = useState([]);
 



  function handleAdopt(bird) {
    if (cart.includes(bird)) {
      bird = { ...bird, id: parseInt(`${bird.id}${cart.length}`) }; //this checks if the bird that comes from the birdcard is the same one inside the array and is it is add a new number ti the id making it exclusive
    }
    setCart([...cart, bird]);
    setAdoptBirdTotal(adoptBirdTotal + bird.amount);
    // handleBonus(adoptBirdTotal, bird);
  }

  function deleteBird(bird) {
    const newCart = cart.filter((birdItem) => bird.id !== birdItem.id);
    setCart(newCart);
    setAdoptBirdTotal(adoptBirdTotal - bird.amount);
    // handleBonus(adoptBirdTotal, bird);
  }

  
  

 

  return (
    <div className="app">
      <Cart
        key={"cartKey"}
        adoptBirdTotal={adoptBirdTotal}
        cart={cart}
        setAdoptBirdTotal={setAdoptBirdTotal}
        deleteBird={deleteBird}
        bonusItems={bonusItems}
        // bonus={bonus}
        // handleBonus={handleBonus}
        
      />
      <BirdCard birdData={birdData} handleAdopt={handleAdopt} />
      <Checkout />
    </div>
  );
}

export default App;
