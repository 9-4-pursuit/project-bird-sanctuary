import { useState } from "react";
import BirdCards from "./components/BirdCards";
import birds from "./data/birds";
import bonus from "./data/bonusItems";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App () {
  const [cartData, setCartData] = useState([]);
  
return (
    <div className="container">
      
      <Cart 
      cartData={cartData}
      setCartData={setCartData}
      bonusData={bonus}
      />
      <BirdCards 
       birdData={birds}
       cartData={cartData}
       setCartData={setCartData}
      />
      <Checkout 
      cartData={cartData}
      setCartData={setCartData}
      />
    </div>
  );
};

export default App;
