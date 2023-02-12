import BirdCards from "./components/BirdCards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import "./App.css"



function App () {
  return (
    <div>
      <BirdCards birds={birdData}/>
      
    </div>
  );
};

export default App;
