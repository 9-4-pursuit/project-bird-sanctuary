import Card from "./Components/Card";
import birdData from "./data/birds"
import Cart from "./Components/Cart";
import { useState } from "react";
import bonusItems from "./data/bonusItems";

function App() {

  const [cartItem, setCartItem] = useState([])
  const [defaultStatus, toggleStatus] = useState(true)
  const [bonusIndex, setBonusIndex] = useState(0)
  const [bonusItem, setBonusItem] = useState([])
  const [total, setTotal]= useState(0)
  const [totalArr, setTotalArr] = useState([])
  
  // let cartItems = []
  // let itemName;

// let totalArr = []

function addingToCart(birdID){

  const birdArr = [...birdData]
  const bonusArr = [...bonusItems]

  // if (!birdArr.length){
  //   setTotal(100)
  // }

 
    setBonusIndex(bonusIndex + 1)

  const index = birdArr.findIndex((bird)=> birdID === bird.id)
  setCartItem([birdArr[index], ...cartItem])

setBonusItem([...bonusItem, bonusArr[bonusIndex]])

setTotalArr([birdArr[index].amount, ...totalArr])

// let newTotArr = ([birdArr[index].amount, ...totalArr])
setTotal(100)

const sum = totalArr.reduce(
  (acc, curr) => parseInt(acc) + parseInt(curr),
  (0)
);
setTotal(sum)

 console.log(cartItem)
toggleStatus(false)
}



  return (
    <div className="app">
      <aside>
      <Cart cartItem={cartItem} defaultStatus={defaultStatus} bonusItem={bonusItem} total={total}/>

      </aside>
      <main>
      <Card birdData={birdData} addingToCart={addingToCart}/>

      </main>
    </div>
  );
};

export default App;
