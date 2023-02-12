import { useState } from 'react';
import birdData from './data/birds';
import BirdCards from './components/BirdCards';
import Cart from './components/Cart';
import Checkout from './components/Checkout'
import './App.css'
import bonusItems from './data/bonusItems';


function App () {
  return (
    <div className="app">
      <Cart bonusItems={bonusItems}/>
      <BirdCards birdData={birdData} />
      <Checkout />
    </div>
  );
};

export default App;
