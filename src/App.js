import { useState } from "react";
import Cart from "./Components/Cart";
import BirdCard from "./Components/BirdCard";
import birdData from "./data/birds";
import Checkout from "./Components/Checkout";
import "./App.css";
// import bonusItems from "./data/bonusItems";

function App() {
  const [adoptBirdTotal, setAdoptBirdTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);

  function handleAdopt(bird) {
    if (cart.includes(bird)) {
      bird = {...bird, id: parseInt(`${bird.id}${cart.length}`)};
    }
    setCart([...cart, bird]);
    setAdoptBirdTotal(adoptBirdTotal + bird.amount);
  }

  function deleteBird(bird) {
    const newCart = cart.filter((birdItem) => bird.id !== birdItem.id);
    setCart(newCart);
    setAdoptBirdTotal(adoptBirdTotal - bird.amount);
  }

  return (
    <div className="app">
      <Cart
        adoptBirdTotal={adoptBirdTotal}
        cart={cart}
        setAdoptBirdTotal={setAdoptBirdTotal}
        deleteBird={deleteBird}
        discount={discount}
        setDiscount={setDiscount}
      />
      <BirdCard birdData={birdData} handleAdopt={handleAdopt} />
      <Checkout />
    </div>
  );
}

export default App;
