// import "./App.css"
import { useState } from "react";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";


function App () {
  const [ birds, setBirds ] = useState(birdData);
  const [ birdCart, setBirdCart ] = useState([]);

function handleRemove(id) {
  let remove = birdCart.filter((bird) => {
    return bird.id !== id;
  })
    setBirdCart(remove);
}

const handleCart = (bird) => {
  if(birdCart.includes(bird)) {
    alert("You have already added this bird to the cart")
    }
    setBirdCart([...birdCart, bird])
  }

const total = birdCart.reduce((a, b) => {
  return a + b.amount
  }, 0)
  


  return (
    <div className="App">

      <aside>
      <Cart birdCart={ birdCart } total={ total } bonusItems={ bonusItems } handleRemove={handleRemove}/>
      <Checkout />
      </aside>
      <Card birds={ Card } 
      handleCart={ handleCart } 
      />
    </div>

  );
};

export default App;
