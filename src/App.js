import { useState } from "react";
import birdData from "./data/birds";
import BirdCards from "./Components/BirdCards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import bonusItems from "./data/bonusItems";
import "./App.css"




function App () {
  const [adoptBird, setAdoptBird] = useState(birdData);
  const [bonus, setBonus] = useState([]);

  const [cartContent, setCartContent] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [discount, setDiscount] = useState(0);


  function handleAdoptBird(bird){
    if (cartContent.includes(bird)){
      bird = {...bird, id: parseInt(`${bird.id}${cartContent.length}`)}
    }
    setCartContent([...cartContent, bird])
    setCartTotal(cartTotal + bird.amount)
  
    if (cartContent.length >= 2) {
      setDiscount(10);
    } 

    goodies(cartTotal + bird.amount)
  }


function deleteBird(bird) {
  const newCart= cartContent.filter((item)=> bird.id !== item.id)
  setCartContent(newCart);
  setCartTotal(cartTotal - bird.amount)
  
  goodies(cartTotal - bird.amount)

  if (cartContent.length < 4) {
    setDiscount(0)
  }
  
}

function goodies(cartTotal) {
  if (cartTotal >= 100 && cartTotal < 300){
    setBonus([bonusItems[0]])
  } else if (cartTotal >= 300 && cartTotal < 500){
    setBonus([bonusItems[0], bonusItems[1]])
  } else if (cartTotal >= 500 && cartTotal < 1000){
    setBonus([bonusItems[0], bonusItems[1], bonusItems[2]])
  } else if (cartTotal > 1000){
    setBonus(bonusItems)
  } else {
    setBonus([])
  }
}

function submit(event) {
event.preventDefault()
setCartContent([])
setCartTotal(0)
setBonus([])
setDiscount(0)
alert("You have adopted birds. Thank you!")
event.target.value = ""
}



  return (
    <div className="app">
      <Cart bonus={bonus} cartContent={cartContent} cartTotal={cartTotal} deleteBird={deleteBird} discount={discount}/>
      <BirdCards birdData={birdData} handleAdoptBird={handleAdoptBird}/>
      <Checkout onSubmit={submit}/>
      
    </div>
  );
};

export default App;
