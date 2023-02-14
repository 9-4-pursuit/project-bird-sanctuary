import './App.css'
import birdData from "./data/birds";
import { useState } from "react";
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";

function App() {
  const [cartContent, setCartContent] = useState([]);
  const [cartTotal, setCartTotal] = useState(null);
  // const [discount, setDiscount] = useState(false);   Ended up not using this hook.  Was thinking about ternary using this truthy/falsey value, but ended up putting the logic right into the tag in Cart.js

  console.log(cartContent, cartTotal);

  function adoptBird(bird) {
    // console.log(bird);
    setCartTotal(cartTotal + bird.amount);
    setCartContent([...cartContent, bird]);
    // if (cartContent.length >= 3) {
    //   setDiscount(true);
    //   console.log("TRUE!")
    // }
  }

  function deleteBird(birdObj) {
    const filteredCart = cartContent.filter((item) => item.id !== birdObj.id);
    setCartContent(filteredCart);
    setCartTotal(cartTotal - birdObj.amount);
    console.log(filteredCart, cartContent)
  }

  return (
    <div className="app">
      <h1>Bird Sanctuary</h1>
      <Cart
        key="cart"
        cartContent={cartContent}
        cartTotal={cartTotal}
        deleteBird={deleteBird}
      />
      <div>
        {
          birdData.map((bird) => {
            return <BirdCard
              key={bird.id}
              bird={bird}
              adoptBird={adoptBird}
            />
          })
        }
      </div>
    </div>
  );
};

export default App;
