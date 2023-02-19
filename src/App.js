import BirdCards from "./components/BirdCards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import { useState } from "react";
import "./App.css"



function App () {
  const [bird, setBird] = useState(birdData)
  const [prevBird, setAllBirds] = useState([])
  const [total, setTotal] = useState(0)

  function removeBird(bird) {
    console.log(prevBird)
    console.log(setBird)
    const filteredBirdArray = prevBird.filter((birdy) => birdy.id !== bird.id )
    let removedBird = {}
    for(let i = 0; i < prevBird.length; i++){
      for (let j = 0; j < filteredBirdArray.length; j++){
        if(prevBird[i].amount !== filteredBirdArray[j].amount){
          removedBird = prevBird[i]
        }
      }
    }
    
    console.log(removedBird)
    if(prevBird.length >= 3){
      
      console.log(total)
      setTotal((total - removedBird.amount)*0.9)
    } else if(prevBird.length < 3){
      
      setTotal(total - removedBird.amount)
      
      console.log(total)
    }
    console.log(filteredBirdArray)
    setAllBirds(filteredBirdArray)
}

  function setCartTotal(bird){
    setAllBirds([...prevBird,bird])
    setTotal(total + bird.amount)
    if(prevBird.includes(bird)){
    bird = {...bird, id:bird.id+1} 
  }
  }


  function submit(event) {
    setAllBirds([])
    setTotal(0)
    event.preventDefault()
    alert("You have adopted birds. Thank you!")
}

  

  return (
    <div className="app">
      <Cart bird={bird} bonus={bonusItems} prevBird={prevBird} total={total} submit={submit} remove={removeBird}/>
      <Checkout submit={submit}/>
      <BirdCards callback={setCartTotal}/>
      
    </div>
  );
};

export default App;
