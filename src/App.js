import './App.css'
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import { useState } from "react";
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from './Components/Checkout';

function App() {
  const [birds, setBirds] = useState(birdData);
  const [cartContent, setCartContent] = useState([]);
  const [cartTotal, setCartTotal] = useState(null);
  const [discount, setDiscount] = useState(false);

  console.log(cartContent, cartTotal);

  function handleBirdCard(bird) { }

  function adoptBird(bird) {
    console.log(bird);
    setCartTotal(cartTotal + bird.amount);
    setCartContent([...cartContent, bird]);
  }

  function addToCart() {}

  return (
    <div className="app">
      <h1>Bird Sanctuary</h1>
      <Cart
        key="cart"
        cartContent={cartContent}
        cartTotal={cartTotal}
      />
      <Checkout
      key="checkout" />
      {
        birds.map((bird) => {
          return <BirdCard
            key={bird.id}
            bird={bird}
            adoptBird={adoptBird}
          />
        })
      }
    </div>
  );
};

export default App;
