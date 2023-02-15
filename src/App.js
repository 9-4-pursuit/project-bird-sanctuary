import React, { useCallback } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import BirdCard from "./Components/BirdCard";
import { useState } from "react";
import BirdLayout from "./Components/BirdLayout";
import Cart from "./Components/Cart";
import birdData from "./data/birds";

function App() {
 
  // const [show, setShow] = useState(true)
 
  const [cart, setCart] = useState({
    birds:[],
    total: 0,
    discount: 0,
    bonuses:[],
  });

  function handleAdopt(bird) {

    setCart(prevCart => ({
      birds: [...prevCart.birds, bird],
      total: prevCart.total + bird.amount,
      discount: 0,
      bonuses: []
    }));
    console.log("Adopt button clicked");
    }

 
//The return is what will show up on the screen. App Title. Bird layout (which has the cards on it), and Cart (decide about check out later).
//Here I have put the birdsData and also the handleAdopt function so I can use it in various components.  
//How do I put items in the cart?

  return (
    <div className="App">
      <h1>Hello, Bird Sanctuary App!</h1>
      {/* <div className="container"> */}
      <BirdLayout>
          {birdData.map((bird) =>
          <BirdCard
            key={bird.id}
            birdy={bird}
            handleAdopt={() => handleAdopt(bird)} />
            )}
        </BirdLayout>

        {/* Making sure that birdData and handleAdopt are defined here so they can be passed to other props. */}
        <BirdLayout birds={birdData} handleAdopt={handleAdopt}/>

      <Cart cart={cart} setCart={setCart}/>
    </div>
  );
}

export default App;


// 
