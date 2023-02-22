import React from "react";
import "./App.css";
import { useState } from "react";
import BirdLayout from "./Components/BirdLayout";
import Cart from "./Components/Cart";
import birdData from "./data/birds";
import CheckOut from "./Components/Checkout";
import bonusItems from "./data/bonusItems";


function App() {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [funExtra, setFunExtra] = useState([]);


  function getBonusItems(total) {
    if (total >= 100 && total < 300) {
      setFunExtra([bonusItems[0]]);
    } else if (total >= 300  && total < 500) {
      setFunExtra( [bonusItems[0], bonusItems[1]]);
    } else if (total >= 500 && total < 1000) {
      setFunExtra( [bonusItems[0], bonusItems[1], bonusItems[2]]);
    } else if (total >= 1000) {
      setFunExtra( bonusItems);
    }

  }


  function handleAdopt(bird) {
    setCart([
     ...cart, bird 
    ])
    setTotal(bird.amount+total);
    getBonusItems(bird.amount+total);
    
    console.log(cart, bird, "Adopt button clicked");
    console.log(bird.amount, "is the amount")
    console.log(total+bird.amount)
    console.log (funExtra)
    console.log("bird ", bird, " birddata is ", birdData, "id is ", bird.id, "key is " , bird.key)

    }

function deleteBird(badBird) {
  const filteredCart=cart.filter((item)=>(badBird.id !== item.id))
  setCart(filteredCart);
  setTotal(total-badBird.amount)
}

     // use filter to keep all the birds that DON'T have the id you are deleting. Using !==.

      
          //   if (cartContent.length<4) {
          //     setDiscount(0)
          //   }
          // }
           
    

//The return is what will show up on the screen. App Title. Bird layout (which has the cards on it), and Cart (decide about check out later).
//Here I have put the birdsData and also the handleAdopt function so I can use it in various components.  
// I will also do that for the delete button.
//How do I put items in the cart?

  return (
    <div className="App">
      <h1>Hello, Bird Sanctuary App!</h1>
      <BirdLayout birds={birdData} handleAdopt={handleAdopt}/>
      <Cart cart={cart} setCart={setCart} total={total} setTotal={setTotal} funExtra={funExtra} deleteBird={deleteBird} />
      <CheckOut  cart={cart} setCart={setCart}  total={total} setTotal={setTotal} />
    </div>
  );
}

export default App;


