import "./App.css";
import birdData from "./data/birds";
import Cart from "./Components/Cart";
import React, { useState } from "react";
import bonusItems from "./data/bonusItems";
import BirdCard from "./Components/BirdCard";
import Checkout from "./Components/Checkout";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  // passing Birdcard info to cart
  function adoptMe(bird) {
    setCart([...cart, bird]);
    setTotal(total + bird.amount);
    
    if (cart.length >= 2) {
      setDiscount(10);
    }
  }
   
  function onDelete (birdId) {
    let newCart = cart.filter((birdItem) => {
      birdId !== birdItem.id
      setCart(newCart)
    })

    // if (cart.length > 3){
    //   cart.length - 1
    // }
  }
  console.log(birdData);
  return (
    <div className="App">
      <div className="card">
        {birdData.map((bird) => {
          return (
            <div>
              <BirdCard
                name={bird.name}
                image={bird.img}
                amount={bird.amount}
                adoptMe={adoptMe}
                bird={bird}
              />
            </div>
          );
        })}
      </div>
      <div className="left">
        <div className="CartItems">
          <Cart cart={cart} total={total} discount={discount} />
        </div>
        <div ClassName="CheckOutItems">
          <Checkout />
        </div>
      </div>
    </div>
  );
}
export default App;
