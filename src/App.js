import { useState } from "react";
import Card from "./Components/Card";
import Cart from "./Components/Cart";
import Form from "./Components/Form";
import birdData from "./data/birds";
import bonusItems from './data/bonusItems'


function App() {

  const [birds, setBirds] = useState(birdData)
  const [addToCart, setAddToCart] = useState([])
  const [total, setTotal] = useState(0)
  const [bonusArray, setBonusArray] = useState([])

  function handleAddToCart(e) {
    setAddToCart(addToCart ? [e, ...addToCart] : [e])
    setTotal(() => total + e.amount)
  }

  function bonusItemHandler(item) {
    if (item.amount >= 100 && item.amount <= 300 && !bonusArray.includes(bonusItems[0])) {
      setBonusArray(() => [bonusItems[0]])
    }
    if (item.amount >= 300 && item.amount < 500 && !bonusArray.includes(bonusItems[1])) {
      setBonusArray(() => [...bonusArray, bonusItems[1]])
    }
    if (item.amount > 500 && item.amount < 1000 && !bonusArray.includes(bonusItems[2])) {
      setBonusArray(() => [...bonusArray, bonusItems[2]])
    }
  }



  function resetAll() {
    setBonusArray([])
    setTotal(0)
    setAddToCart([])
    alert("You have adopted birds. Thank you!")
  }

  return (
    <div>
      <Cart addToCart={addToCart}
        total={total}
        bonusItemHandler={(item) => bonusItemHandler(item)}
        bonusItems={bonusItems}
        bonusArray={bonusArray}
      />

      <Form
        resetAll={resetAll}
      />

      {birds.map((bird, index) => {
        return (
          <Card
            bird={bird}
            handleAddToCart={(e) => handleAddToCart(e)}
            index={index}
          />)
      })
      }

    </div>
  );
};


export default App;
