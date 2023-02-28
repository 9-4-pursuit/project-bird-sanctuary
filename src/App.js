import { useState } from "react";
import BirdCards from "./components/BirdCards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import bonusItems from "./data/bonusItems";

function App () {

  const [cart, setCart] = useState([]);
  const [cartItem, setCartItem] = useState();

  function updateCart(bird) {
    console.log(bird)
    setCart([...cart, bird])
  }

  const [cartContent, setCartContent] = useState([]);
      
  function deleteItem(bird){
    const newCart= cartContent.filter((item)=> bird.id !== item.id)
    setCartContent(newCart);
  }

  return (
    <div>
      <h1>Hello, world!</h1>
      <BirdCards updateCart={updateCart}/>
      <Cart shoppingCart={cart} deleteItem={deleteItem} />
      <Checkout />
    </div>
  );
};

export default App;
