import Birds from "./Components/Birds";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
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
