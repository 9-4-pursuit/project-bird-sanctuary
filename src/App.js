import React from "react";
import { useState } from "react";
import birdData from "./data/birds";
import Checkout from "./components/Checkout";
import Card from "./components/Card";
import Cart from "./components/Cart";


function App() {
  // const [birdsArr, setBirdArr] = useState(birdData)
  const birdsArr = (birdData)
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(0)

  function addBird(bird) {
    if (cart.includes(bird)) {
      bird = { ...bird, id: +`${bird.id}${cart.length}` }
    }
    setCart([...cart, bird])
    setTotal(total + bird.amount)
    console.log(cart);
  }

  function removeBird(bird) {
    const newCart = cart.filter((cartBird) =>
      bird.id !== cartBird.id);
    setCart(newCart);
    setTotal(total - bird.amount)
  }

  function applyDiscount() {
    if ((cart.length) >= 3) {
      setDiscount(+10)
    } else setDiscount(0)
    return (discount)
  }

  const reset = () => {
    setTotal(0);
    setCart([]);
  }

  function submit(e) {
    e.preventDefault()
    alert("You have adopted birds. Thank you!")
    reset()
  }

  return (
    <div>
      <div className="Cart">
        <Cart cart={cart} total={total} remove={removeBird} discount={applyDiscount} />
      </div>
      <div className="card">
        <Card birds={birdsArr} add={addBird} />
      </div>
      <Checkout className="checkout" submit={submit} reset={reset} />
    </div>
  );
};

export default App;
