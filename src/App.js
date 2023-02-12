import Card from "./Components/Card";
import birdData from "./data/birds"
import Cart from "./Components/Cart";
import { useState } from "react";
import bonusItems from "./data/bonusItems";

function App() {

  const [cartItem, setCartItem] = useState([])
  const [birds, setBirds] = useState(birdData)
  const [defaultStatus, toggleStatus] = useState(true)
  const [bonus, setBonus] = useState([])
  

  // let cartItems = []
  // let itemName;

function addingToCart(birdID){

  const birdArr = [...birds]
  const bonusArr = [...bonus]
  
  const index = birdArr.findIndex((bird)=> birdID === bird.id)
  setCartItem([birdArr[index], ...cartItem])

 console.log(cartItem)
toggleStatus(false)
}



  return (
    <div className="app">
      <aside>
      <Cart cartItem={cartItem} defaultStatus={defaultStatus}/>

      </aside>
      <main>
      <Card birdData={birdData} addingToCart={addingToCart}/>

      </main>
    </div>
  );
};

export default App;
