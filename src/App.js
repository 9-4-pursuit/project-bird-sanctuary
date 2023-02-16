import React from "react";
//import React, { useCallback } from "react";
import "./App.css";
//import Alert from "./Components/Alert";
//import BirdCard from "./Components/BirdCard";
import { useState } from "react";
import BirdLayout from "./Components/BirdLayout";
import Cart from "./Components/Cart";
import birdData from "./data/birds";

function App() {
 
  // const [show, setShow] = useState(true)
 
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)

  
  function handleAdopt(bird) {
    // setCart((prevCart => ({
    //   ...prevCart,
    //   birds: [...prevCart.birds, bird],
    //   total: prevCart.total + bird.amount,
    // })));
    setCart([
     ...cart, bird 
    ])
    console.log(cart, bird, "Adopt button clicked");
    }

 
//The return is what will show up on the screen. App Title. Bird layout (which has the cards on it), and Cart (decide about check out later).
//Here I have put the birdsData and also the handleAdopt function so I can use it in various components.  
//How do I put items in the cart?

  return (
    <div className="App">
      <h1>Hello, Bird Sanctuary App!</h1>
      {/* <div className="container"> */}
      <BirdLayout birds={birdData} handleAdopt={handleAdopt}/>
      <Cart cart={cart} setCart={setCart}/>
    </div>
  );
}

export default App;


