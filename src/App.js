import Birds from "./components/Birds";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { useState } from "react";
import './App.css'

function App () {

  const [cart, setCart] = useState([]);
  
  function adoptBird(bird) {
    setCart(prevCart => {
      return [...prevCart, bird];
    })
  }

  return (
    <div className="app">
      <Cart cart={cart} setCart={setCart} />
      <Checkout setCart={setCart} />
      <Birds adoptBird={adoptBird} />
    </div>
  );
};

export default App;
