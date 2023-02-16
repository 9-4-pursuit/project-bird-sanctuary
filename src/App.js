import { useState } from "react";
import birdData from "./data/birds";
import BirdCards from "./components/BirdCards";
// import bonusItems from './data/bonusItems';
import Cart from "./components/Cart";
// import Checkout from './components/Checkout'
import "./App.css";

function App() {
  const [birds, setBird] = useState(birdData);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [bonusItems, setBonusItems] = useState([])

  // ADOPT A BIRD HERE AND SEND DOWN TO BIRDCARDS
  //use a nameless function? ---> click on adopt and add one thing to collect the
  //DO YOU WANT TO LIFT STATE AND USE CONDITIONS ON CLICK TO HIDE ADOPT BUTTON

  function handleDeletion(bird) {
    const deleteItem = cart.filter((item) => bird.id !== item.id);
    setCart(deleteItem);
    setCartTotal(cartTotal - bird.amount);

    if (cart.length < 4) {
      setDiscount(0)
    }
  }
  // how do we assign the discount to the cart 
// 100-300 = stickers || 
// 300-500 = background || 
// 500-1000 = tote bags || 
// 1000 + = Invites to livestream
// if the cart total is ...add the bonus item as a string with an li

  // function applyBonus(bird){
  //   if (cartTotal <= 100) {
  //     bonusItem[0]
  //   } else if (cartTotal >= 300){
  //     bonusItem[1]
  //   } else if (cartTotal >= 500){
  //     bonustItem[2]
  //   } else (cartTotal )
  // }


  function handleAdopt(bird) {
    if (cart.includes(bird)) {
      bird = { ...bird, id: parseInt(`${bird.id}${cart.length}`) };
    }

    console.log(bird);
    setCart([...cart, bird]);
    setCartTotal(cartTotal + bird.amount);
    if (cart.length >= 2) {
      setDiscount(10);
    }        
  }
        // } else (cart.length < 3)
      //once we delete how do we set it back to 0? ---> place this on the onDelete function.
      //TERNARY or NAH???
      //ADD THE CONTENT OF BIRDCARD TO CART
      //SPREAD THE INFO FROM THE cartContent
  return (
    <div className="app">
      <h1><strong>Bird Sanctuary</strong></h1>

      <Cart
        key="cart"
        cart={cart}
        cartTotal={cartTotal}
        birds={birds}
        discount={discount}
        handleDeletion={handleDeletion}
        //bonusItems={bonusItems}
      />

      <BirdCards
        birdData={birdData}
        handleAdopt={handleAdopt}
      />
    </div>
  );
}
export default App;
