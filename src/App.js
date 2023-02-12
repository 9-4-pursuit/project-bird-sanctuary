import './App.css'
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import { useState } from "react";
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";

function App() {
  const [birds, setBirds] = useState(birdData);
  const [cartContent, setCartContent] = useState('');
  const [cartTotal, setCartTotal] = useState(null);

  function handleBirdCard(bird) {

  }

  return (
    <div className="app">
      <h1>Bird Sanctuary</h1>
      <Cart key="cart" />
      {birds.map((bird) => {
        return <BirdCard key={bird.id} bird={bird} />
      })}
    </div>
  );
};

export default App;
