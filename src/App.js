import { useState } from "react";
import birdData from "./data/birds";
import Cart from "./Components/Cart"
import Birds from "./Components/Birds";
import BirdCard from "./Components/BirdCard";
import Checkout from "./Components/Checkout";
import bonusItems from "./data/bonusItems";

// import "./src/App.css";

function App () {

  const [cart, setCart] = useState([]);

  return (
    <div className="app">
      <Cart cart={cart} bonusItems={bonusItems} setCart={setCart}/>
      <Checkout setCart={setCart}/>
      <BirdCard birds={birdData} setCart={setCart} cart={cart}/>
      {/* <BirdCard birds={birdData} setAdopt={setAdopt} setPrice={setPrice} /> */}
      
      <h1>Hello, world!</h1>
    </div>
  );
};

export default App;


// function App () {
//   const [birdType, setBirdType] = useState("")
//   const [adopt, setAdopt] = useState([]);
//   const [price, setPrice] = useState([])
//   return (
//     <div>
//       {/* <Cart /> */}
//       <Birds birdtype={birdType}/>
//       {/* <BirdCard birds={birdData} setAdopt={setAdopt} setPrice={setPrice} /> */}
//       {/* <Checkout /> */}
//       <h1>Hello, world!</h1>
//     </div>
//   );
// };

// export default App;
