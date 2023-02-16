import { useState } from "react";
import birdData from "./data/birds";
import BirdCards from "./components/BirdCards";
import bonusItems from './data/bonusItems';
import Cart from "./components/Cart";
// import Checkout from './components/Checkout'
import "./App.css";

function App() {
  const [birds] = useState(birdData);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [bonus, setBonus] = useState([])


  // ADOPT A BIRD HERE AND SEND DOWN TO BIRDCARDS
  function handleDeletion(bird, amount) {
    const deleteItem = cart.filter((item) => bird.id !== item.id);
    setCart(deleteItem);
    setCartTotal(cartTotal - bird.amount);

    if (cart.length < 4) {
      setDiscount(0)
    }
    applySetBonus(cartTotal - bird.amount)      
  }
  // how do we assign the discount to the cart 
  function applySetBonus(amount){
    console.log(amount)
    if (amount >= 1000) {
       setBonus(bonusItems)
     } else if (amount <= 1000 && amount > 500){
       setBonus([bonusItems[0], bonusItems[1], bonusItems[2]])
     } else if (amount <= 500 && amount >= 300){
       setBonus([bonusItems[0],bonusItems[1]])
     } else if (amount <= 300 && amount >= 100){
       setBonus([bonusItems[0]])
     } else {
       setBonus([])
     }
  }

  function handleAdopt(bird) {
    if (cart.includes(bird)) {
      bird = { ...bird, id: parseInt(`${bird.id}${cart.length}`) };
    }

    console.log(bird);
    setCart([...cart, bird]);
    setCartTotal(cartTotal + bird.amount);
    if (cart.length >= 2) {
      setDiscount(10);
    } 
    //pass in an argument for cart and birdamount
    applySetBonus(cartTotal + bird.amount)       
  }
  function handleSubmit(event){
    event.preventDefault()
    setCart([])
    setCartTotal(0)
    setDiscount(0)
    setBonus([])
    alert("You have adopted birds. Thank you!")
    event.target.value = ""
  }
  return (
    <div className="app">
      <h1><strong>Bird Sanctuary</strong></h1>

      <Cart
        key="cart"
        cart={cart}
        cartTotal={cartTotal}
        birds={birds}
        discount={discount}
        handleDeletion={handleDeletion}
        bonus={bonus}
        handleSubmit={handleSubmit}
      />

      <BirdCards
        birdData={birdData}
        handleAdopt={handleAdopt}
      />
    </div>
  );
}
export default App;
