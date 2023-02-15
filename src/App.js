import { useState } from 'react';
import birdData from './data/birds';
import BirdCards from './components/BirdCards';
// import bonusItems from './data/bonusItems';
import Cart from './components/Cart';
// import Checkout from './components/Checkout'
import './App.css'

function App () {
const [birds, setBird] = useState(birdData);  
const [cart, setCart] = useState([]);
const [cartTotal, setCartTotal] = useState(0);
const [discount, setDiscount] = useState(0);
//const [bonusItems, setBonusItems] = useState(bonusItems)

// ADOPT A BIRD HERE AND SEND DOWN TO BIRDCARDS
//use a nameless function? ---> click on adopt and add one thing to collect the 
//DO YOU WANT TO LIFT STATE AND USE CONDITIONS ON CLICK TO HIDE ADOPT BUTTON

// function handleDeletion() {}
function handleAdopt(bird) {

  console.log(bird)
  // setCartTotal(cartTotal + bird.amount)
  setCart([...cart, bird])
  setCartTotal(cartTotal + bird.amount)
  if (cart.length >=3) {
  setDiscount(10)
    // } else (cart.length < 3)
    //once we delete how do we set it back to 0? ---> place this on the onDelete function.
    //TERNARY or NAH???
//ADD THE CONTENT OF BIRDCARD TO CART
//SPREAD THE INFO FROM THE cartContent

   }
  return (
    <div className="app">
      <h1>Bird Sanctuary</h1>

      <Cart 
        key="cart"
        cart={cart}
        cartTotal={cartTotal}
        birds={birds} 
        discount={discount}
        //bonusItems={bonusItems}
        />

      <BirdCards 
        birdData={birdData}
        handleAdopt={handleAdopt}
        //handleDeletion={handleDeletion}
        />
    </div>
  );
};

export default App;
