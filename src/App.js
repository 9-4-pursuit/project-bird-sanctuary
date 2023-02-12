import { useState } from 'react';
import birdData from './data/birds';
import BirdCards from './components/BirdCards';
import bonusItems from './data/bonusItems';
import Cart from './components/Cart';
// import Checkout from './components/Checkout'
import './App.css'

function App () {
const [birds, setBird] = useState(birdData);  
const [insideCart, setInsideCart] = useState([]);
const [cartTotal, setCartTotal] = useState(null);
const [discount, setDiscount] = useState(false);


function handleAdopt (bird) {
  console.log(bird)
  setCartTotal(cartTotal + bird.amount)
  setInsideCart= [...insideCart, bird]

   }
  return (
    <div className="app">
      <h1>Bird Sanctuary</h1>

      <Cart 
        key="cart"
        insideCart={insideCart}
        cartTotal={cartTotal}
        birds={birds} 
        bonusItems={bonusItems}
        />
  {/* <Checkout /> */}
    { birds.map((bird) => { })}
      <BirdCards 
        insideCart={insideCart}
        birdData={birdData} 
        callback={setBird}/>
    </div>
  );
};

export default App;
