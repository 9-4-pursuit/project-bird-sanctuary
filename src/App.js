import { useState } from "react";
import BirdCards from "./components/BirdCards";
import birds from "./data/birds";
import bonus from "./data/bonusItems";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./App.css";

function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <div className="container">
      <div className="checkout">
        <Cart
          cartData={cartData}
          setCartData={setCartData}
          bonusData={bonus}
        />
        <Checkout
          cartData={cartData}
          setCartData={setCartData}
        />
      </div>
      <BirdCards
        birdData={birds}
        cartData={cartData}
        setCartData={setCartData}
      />
    </div>

  );
};

export default App;
