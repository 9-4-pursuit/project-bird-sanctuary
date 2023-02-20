import React from "react";
import "./App.css";
import { useState } from "react";
import BirdLayout from "./Components/BirdLayout";
import Cart from "./Components/Cart";
import birdData from "./data/birds";
import CheckOut from "./Components/Checkout";


function App() {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  //Do I take away the cart and total consts from here or from the other place?


  function handleAdopt(bird) {
    setCart([
     ...cart, bird 
    ])
    setTotal(bird.amount+total);
    
    console.log(cart, bird, "Adopt button clicked");
    console.log(total, "is the total");
    console.log(bird.amount, "is the amount")
    console.log(bird.amount+total);
    console.log(total+bird.amount)

    }



//The return is what will show up on the screen. App Title. Bird layout (which has the cards on it), and Cart (decide about check out later).
//Here I have put the birdsData and also the handleAdopt function so I can use it in various components.  
//How do I put items in the cart?

  return (
    <div className="App">
      <h1>Hello, Bird Sanctuary App!</h1>
      {/* <div className="container"> */}
      <BirdLayout birds={birdData} handleAdopt={handleAdopt}/>
      <Cart cart={cart} setCart={setCart} total={total} setTotal={setTotal}/>
      <CheckOut  cart={cart} setCart={setCart}  total={total} setTotal={setTotal} />
    </div>
  );
}

export default App;

 
  // const [show, setShow] = useState(true)
 
    // setCart((prevCart => ({
    //   ...prevCart,
    //   birds: [...prevCart.birds, bird],
    //   total: prevCart.total + bird.amount,
    // })));

