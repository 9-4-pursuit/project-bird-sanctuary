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
  const [bonus, setBonus] = useState([]);
 

  function handleAdopt(bird) {
    if (cart.includes(bird)) {
      bird = { ...bird, id: parseInt(`${bird.id}${cart.length}`) }; //this checks if the bird that comes from the birdcard is the same one inside the array and is it is add a new number ti the id making it exclusive
    }
    setCart([...cart, bird]);
    setAdoptBirdTotal(adoptBirdTotal + bird.amount);
    handleBonus(adoptBirdTotal + bird.amount)
  }

  function deleteBird(bird) {
    const newCart = cart.filter((birdItem) => bird.id !== birdItem.id);
    setCart(newCart);
    setAdoptBirdTotal(adoptBirdTotal - bird.amount);
    handleBonus(adoptBirdTotal - bird.amount)
    
  }

  
  function handleBonus(adoptBirdTotal) {

        if (adoptBirdTotal  >= 100 && adoptBirdTotal < 300) {
          setBonus([bonusItems[0]]);
        } else if (adoptBirdTotal >= 300 && adoptBirdTotal < 500) {
          setBonus([bonusItems[0], bonusItems[1]]);
        } else if (adoptBirdTotal >= 500 && adoptBirdTotal < 1000) {
          setBonus([bonusItems[0], bonusItems[1], bonusItems[2]]);
        } else if (adoptBirdTotal >= 1000) {
          setBonus(bonusItems);
        } else {
          setBonus([]);
        }
      }
    

  function handleSubmit (e) {
    e.preventDefault()
    setCart([]);
    setBonus([])
    setAdoptBirdTotal(0)
    alert("You have adopted birds. Thank you!");
    e.target.value = ""
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
        bonus={bonus}
    
        
      />
      <BirdCard birdData={birdData} handleAdopt={handleAdopt} />
      <Checkout 
      handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
