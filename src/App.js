import './App.css'
import { useState } from "react";
import birdData from "./data/birds";
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";

function App() {

  // Using 2 hooks in this component: Cart Content & Cart Total
  const [cartContent, setCartContent] = useState([]);
  const [cartTotal, setCartTotal] = useState(null);
  // const [discount, setDiscount] = useState(false);   Ended up not using this hook.  Was thinking about ternary using this truthy/falsey value, but ended up putting the logic right into the tag in Cart.js

  console.log(cartContent, cartTotal);

  /** This is our function to handle the ADOPT button in our BirdCard.js
   * It will take in a BIRD OBJECT, update the cartTotal & cartContent with the bird info
   * We use the spread operator here to spread out the current contents of cartContent and then add in the newest BIRD 
   * OBJECT
   */
  function adoptBird(bird) {
    // console.log(bird);
    setCartTotal(cartTotal + bird.amount);
    setCartContent([...cartContent, bird]);

    // First attempt at using a hook for DISCOUNT and altering it's state here, then using a ternary in Cart.js to display the correct %
    // if (cartContent.length >= 3) {
    //   setDiscount(true);
    //   console.log("TRUE!")
    // }
  }

  /** This is our function to DELETE a bird from the cart in Cart.js
   * It will take in a BIRD OBJECT & INDEX supplied as we MAP through our cartContent in Cart.js
   * Using FILTER, we will comb through our cartContent array, and filter out all elements that ARE NOT the chosen bird element determined by the DELETE button click
   * The cartTotal is also updated using the accuracte $ amt from our BIRD OBJECT
   */
  function deleteBird(birdObj, i) {
    // event.target.parentNode.remove()
    const filteredCart = cartContent.filter((item, index) => {
      return index !== i
    });
    setCartContent(filteredCart);
    setCartTotal(cartTotal - birdObj.amount);
    console.log(cartContent)
  }

  // Below we are passing down PROPS to our child comps
  // We are passing down HOOKS/STATE & callback FUNCTIONS
  return (
    <div className="app">
      <h1>Bird Sanctuary</h1>
      <Cart
        key="cart"
        cartContent={cartContent}
        cartTotal={cartTotal}
        deleteBird={deleteBird}
      />
      <div className='birdcards'>
        {
          birdData.map((bird) => {
            return <BirdCard
              key={bird.id}
              bird={bird}
              adoptBird={adoptBird}
            />
          })
        }
      </div>
    </div>
  );
};

export default App;
