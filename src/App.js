import { useState } from "react";
import birdData from './data/birds';
import BirdCards from './components/BirdCards';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div>
      <Cart />
      <BirdCards />
      <Checkout />
    </div>
  );
};

export default App;
