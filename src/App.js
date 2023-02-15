import React, { useState } from "react";
import "./App.css";
import BirdCard from "./Components/BirdCard";
import birdData from "./data/birds";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

function App() {

  const [cart , setCart] = useState([])
  const [total , setTotal] = useState(0)
  // passing Birdcard info to cart 
  function adoptMe (bird) {
    setCart([...cart, bird]) 
    setTotal(total+bird.amount)
    console.log(total)
  }

 



  console.log(birdData);
  return (
    <div className="App">
      <h1>Bird List</h1>
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

      <div className="CartItems">
        <Cart 
         cart={cart}
         total={total} 
         />
      </div>

      <div ClassName="CheckOutItems">
        <Checkout />
      </div>
    </div>
  );
}
export default App;
