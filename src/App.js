import { useState } from "react";
import "./App.css"

import Cart from "./components/Cart";
import BirdCards from "./components/BirdCards";
import Checkout from "./components/Checkout";

function App () {
  const [updateBird, setUpdateBird] = useState([]);
  const [total, setTotal] = useState(0);

  function totalAmount(birdAmount) {
    setTotal(total + birdAmount);
  }
 
  function deleteBird(birdInfo, index) {
    const filteredBird = updateBird.filter(deleteBird => {
      setTotal(total - birdInfo.amount);
      return deleteBird.position !== index;
    });
    setUpdateBird(filteredBird);
  }

  return (
    <div>
      <Cart
        total={total}
        updateBird={updateBird}
        deleteBird={deleteBird}
      />
      
      <BirdCards
        updateBird={updateBird}
        setUpdateBird={setUpdateBird}
        totalAmount={totalAmount}
      />

      <Checkout
        setUpdateBird={setUpdateBird}
      />
    </div>
  );
};

export default App;
