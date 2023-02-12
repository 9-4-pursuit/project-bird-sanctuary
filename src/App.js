import Card from "./Components/Card";
import birdData from "./data/birds"
import Cart from "./Components/Cart";
import { useState } from "react";
import bonusItems from "./data/bonusItems";

function App() {

  const [cartItem, setCartItem] = useState([])
  const [birds, setBirds] = useState(birdData)
  const [defaultStatus, toggleStatus] = useState(true)
  const [bonus, setBonus] = useState(bonusItems)
  const [bonusIndex, setBonusIndex] = useState(0)
  const [bonusItem, setBonusItem] = useState([])
  
  // let cartItems = []
  // let itemName;

function addingToCart(birdID){

  
  const birdArr = [...birds]
  const bonusArr = [...bonus]

 
    setBonusIndex(bonusIndex + 1)

  
  
  const index = birdArr.findIndex((bird)=> birdID === bird.id)
  setCartItem([birdArr[index], ...cartItem])

setBonusItem([...bonusItem ,bonusArr[bonusIndex]])

 console.log(bonusArr)
toggleStatus(false)
}



  return (
    <div className="app">
      <aside>
      <Cart cartItem={cartItem} defaultStatus={defaultStatus} bonusItem={bonusItem}/>

      </aside>
      <main>
      <Card birdData={birdData} addingToCart={addingToCart}/>

      </main>
    </div>
  );
};

export default App;
