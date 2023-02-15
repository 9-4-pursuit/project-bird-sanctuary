
// This holds the overall state of the App, including cart state.  Also has functions for adding and removing items from the cart, calc total cart, apply discounts and bonuses, resetting the cart and checking out the items in the cart.  The App component passes down the cart state and addToCart and removeFromCart functions as props to the Cart and BirdCard component which use them to update the cart and display the cart contents.


import { useState } from "react";
import birdData from "./data/birds"
import BirdCards from "./components/BirdCards";
import bonusItems from "./data/bonusItems"
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import './App.css'


function App () {
  // const [selectedBirds, setSelectedBirds] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [bonus, setBonus] = useState([]);


  const addToCart = (bird) => {
    setCart([...cart, bird]);
    setTotal(total + bird.amount);
    setDiscount(cart.length >= 3 ? 10 : 0);
    setBonus(
      total >= 1000 
      ? bonusItems
      : total >= 500
      ? bonusItems.slice(0, 3)
      : total >= 300
      ? bonusItems.slice(0, 2) 
      : total >= 100
      ? bonusItems.slice(0, 1) 
      : []
    )
  };



  return (
    <div className="app">

        <Cart
        cart={cart} 
        total={total}
        discount={discount}
        bonus={bonus}
        />
        <BirdCards birds={birdData} addToCart={addToCart}/>
        <Checkout />
    </div>
  );
};

export default App;