import React from "react";
import { useState, useEffect } from "react";
import birdData from "./data/birds";
import BirdCards from "./components/BirdCards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./styles.css"
import bonusItems from "./data/bonusItems";

function App() {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [bonus, setBonus] = useState([]);

    function handleAdoptBirdClick(bird) {
      setCart([...cart, bird]);
      setTotal(total + bird.amount);
    };

    useEffect(() => {
      setDiscount(cart.length >= 3 ? 10 : 0);
      setBonus(
        total <= 99 ? []
        : total >= 100  && total < 300 ? bonusItems.slice(0, 1)
        : total >= 300 && total < 500 ? bonusItems.slice(0, 2)
        : total >= 500 && total < 1000 ? bonusItems.slice(0, 3)
        : bonusItems
      );
    },[cart, total]
    )

  return (
    <>
      <div>
        <Cart
        cart={cart}
        setCart={setCart}
        total={total}
        discount={discount}
        bonus={bonus}
        setTotal={setTotal}
        />
      </div>
      <div>
        <Checkout />
      </div>
      <div>
        <BirdCards 
        birds={birdData}
        handleAdoptBirdClick={handleAdoptBirdClick}
        />
      </div>
    </>
  );
}

export default App;
