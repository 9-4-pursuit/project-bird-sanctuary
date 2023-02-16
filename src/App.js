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
    <div>
      <Birds adoptBird={adoptBird}/>
      <Cart cart={cart} />
      <Checkout />
    </div>
  );
};

export default App;
