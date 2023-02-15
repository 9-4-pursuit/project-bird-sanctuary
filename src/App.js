// import "./App.css"
import { useState } from "react";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import birdData from "./data/birds";


function App () {
  const [ birds, setBirds ] = useState(birdData);
  const [ birdCart, setBirdCart ] = useState([]);

  // const handleCart = (bird) => {
  //   setBirdCart({
  //     ...birdCart,
  //   });
  // }
  


  return (
    <>
    <div className="App">
      <aside>
      <Cart birds={ birds } birdCart={ birdCart } setBirdCart= { setBirdCart } />
      <Checkout setBirdCart={ setBirdCart } />
      </aside>
      <Card birds={Card} 
      // handleCart={handleCart} 
      />
    </div>

    </>
  );
};

export default App;
