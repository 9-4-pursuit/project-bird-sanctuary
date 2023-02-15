import { useState } from "react";
import birdData from './data/birds'
import BirdCards from "./Components/BirdCards";
import Cart from './Components/Cart'
import Checkout from "./Components/Checkout";
import './App.css'
import bonusItems from "./data/bonusItems"


function App () {
  const[birds, setBird] = useState(birdData)
  const[cart, setCart] = useState([])
  const[cartTotal, setcartTotal] = useState(0)
  const[discount, setDiscount] = useState(0)
  // state that handles putting the bird in the cart


  function handleAdopt(bird) {

    setCart([...cart, bird])
    setcartTotal(cartTotal + bird.amount)

    if(cart.length + 1 >= 3) {
      setDiscount(10)
    }

  }

  // function handleDiscount(cart) {
     
  // }

  // for delete maybe have a function that sets all defaults back to the original state
  // setCart([]) setDiscount(0) setCartTotal(0)

  return (
    <div className="app">
      {/* below is the layout of all the components and how they will be displayed */}
      <Cart  key="cart" 

      cart={cart}
      bird={birds}
      // handleAdopt={handleAdopt}
      cartTotal={cartTotal}
      discount= {discount}


       />

      {/* <BirdCards name='name' price="amount" /> */}
      <BirdCards 
      birdData={birdData} 
      // passing the function  handleAdopt & birdData into the component BirdCards
      handleAdopt={handleAdopt}/>

      <Checkout />

    </div>
  );
};

export default App;
