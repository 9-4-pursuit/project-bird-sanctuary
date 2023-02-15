import { useState } from "react";
import Cart from "./Components/Cart";
import BirdCard from "./Components/BirdCard";
import birdData from "./data/birds";
import Checkout from "./Components/Checkout";
import "./App.css";
import bonusItems from "./data/bonusItems";

function App() {
  const [adoptBirdTotal, setAdoptBirdTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [bonus, setBonus] = useState([]);

  function handleAdopt(bird) {
    if (cart.includes(bird)) {
      bird = { ...bird, id: parseInt(`${bird.id}${cart.length}`) }; //this checks if the bird that comes from the birdcard is the same one inside the array and is it is add a new number ti the id making it exclusive
    }
    setCart([...cart, bird]);
    setAdoptBirdTotal(adoptBirdTotal + bird.amount);

    // if (
    //   adoptBirdTotal + bird.amount >= 100 &&
    //   adoptBirdTotal + bird.amount <= 300
    // ) {
    //   setBonus([bonusItems[0]]);
    //   console.log(1)
    // } else if (
    //   adoptBirdTotal + bird.amount > 300 &&
    //   adoptBirdTotal + bird.amount <= 500
    // ) {
    //   setBonus([bonusItems[0], bonusItems[1]]);
    //   console.log(2)
    // } else if (
    //   adoptBirdTotal + bird.amount > 500 &&
    //   adoptBirdTotal + bird.amount < 1000
    // ) {
    //   setBonus([bonusItems[0], bonusItems[1], bonusItems[2]]);
    //   console.log(3)
    // } else {
    //   setBonus(bonusItems);
    // }
        handleBonus(adoptBirdTotal , bird)
  }

  function deleteBird(bird) {
    const newCart = cart.filter((birdItem) => bird.id !== birdItem.id);
    setCart(newCart);
    setAdoptBirdTotal(adoptBirdTotal - bird.amount);
    handleBonus(adoptBirdTotal , bird)
  }

  function handleBonus(adoptBirdTotal, bird) {
console.log(adoptBirdTotal,bird)

    if (
      adoptBirdTotal + bird.amount >= 100 &&
      adoptBirdTotal + bird.amount <= 300
    ) {
      setBonus([bonusItems[0]]);
    } else if (
      adoptBirdTotal + bird.amount > 300 &&
      adoptBirdTotal + bird.amount <= 500
    ) {
      setBonus([bonusItems[0], bonusItems[1]]);
    } else if (
      adoptBirdTotal + bird.amount > 500 &&
      adoptBirdTotal + bird.amount < 1000
    ) {
      setBonus([bonusItems[0], bonusItems[1], bonusItems[2]]);
    } else {
      setBonus(bonusItems);
    }
  }

  // function handleBonus () {
  //   if (cart.length 1) {

  //   }
  // }

  return (
    <div className="app">
      <Cart key={"cartKey"}
        adoptBirdTotal={adoptBirdTotal}
        cart={cart}
        setAdoptBirdTotal={setAdoptBirdTotal}
        deleteBird={deleteBird}
        bonusItems={bonusItems}
        bonus={bonus}
        handleBonus={handleBonus}
      />
      <BirdCard birdData={birdData} handleAdopt={handleAdopt} />
      <Checkout />
    </div>
  );
}

export default App;
