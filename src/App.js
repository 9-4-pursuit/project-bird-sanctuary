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

  console.log(cartContent, cartTotal, discount);

  function adoptBird(bird) {
    console.log(bird);
    setCartTotal(cartTotal + bird.amount);
    setCartContent([...cartContent, bird]);
    // if (cartContent.length >= 3) {
    //   setDiscount(true);
    //   console.log("TRUE!")
    // }
  }

  function addToCart() { }

  return (
    <div className="app">
      <h1>Bird Sanctuary</h1>
      <Cart
        key="cart"
        discount={discount}
        cartContent={cartContent}
        cartTotal={cartTotal}
      />
      <Checkout
        key="checkout"
        cartTotal={cartTotal}
        cartContent={cartContent}
      />
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
