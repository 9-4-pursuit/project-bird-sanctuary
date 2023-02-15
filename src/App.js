import { useState } from 'react';
import BirdCards from './BirdCards';
import Cart from './Cart';
import Checkout from './Checkout';
import birdData from './data/birds';
import bonusItems from './data/bonusItems';

function App() {

  // Apparently the below implementation is not consistent with assignment requirements.
  // Quantity and arrayIndex will not be necessary.
  // Create new array from birdData.  Data passes from this array into child components.
  // let birdDataPlus = birdData.map((bird, index) => {
  //   let quantity = 0;
  //   let arrayIndex = index;
  //   return {quantity, arrayIndex, ...bird}
  // });

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [bonuses, setBonus] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [runOnce, setRunOnce] = useState(true);

  /*
  Cart is an array of objects.  Each requires unique ID key when rendered.
  I've been told
  1) more than one of the same bird may be adopted
  2) three instances of the same bird get three separate lines in the cart
  3) each line in the cart has a separate delete button
  Which is totally not what I would expect based on instructions and animated example.
  Originally I thought "Adopt" button functioned as a boolean toggle
  max of one bird of a type possible.  The animated example shows no delete button
  and instructions do not mention it.  NPM Cypress test messages do not reveal
  necessary implementation either.
  */
  /*
  The Async Saga Part 1:
 
  Originally tried putting setDiscount in cartAdoptThisBird (etc.)  However, as may
  be expected, async / rendering caused things not to function as desired.
  setDiscount depends on cart.length
  cart and discount are both updated with useState
  Per instructor Mejia, looking back I think it was a rendering issue.  At the time, I
  considered using various solutions; using a non-useState variable to keep track of things,
  sending to a "shadow" function, using a useState boolean toggle.
 
 The Async Saga Part 2:
 
 I attempted to put setDiscount in Cart.  However, as I should have anticipated
 (lack of sleep), "Cart" element renders cart and discount, creating circular references.  This creates an infinite loop per
 https://stackoverflow.com/questions/69988730/maximum-update-depth-exceeded-react-limits-the-number-of-nested-updates-to-prev
 causing program to crash.
 
 Attempting simple booleans did not work satisfactorily.  Created a useState boolean
 runOnce and setRunOnce; this did work, to an extent; I passed setRunOnce to Cart
 and used as might be expected.  However, though this did not cause a crash, and
 functionality was exactly as desired, following error message seen in console.
 
 index.js:1 Warning: Cannot update a component (`App`) while rendering a different component (`Cart`). To locate the bad setState() call inside `Cart`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render
     at Cart (http://localhost:3000/static/js/main.chunk.js:546:3)
     at form
     at div
     at App (http://localhost:3000/static/js/main.chunk.js:68:81)
 
 The Async Saga Part 3:
 I tried a lot of things not listed above, like passing previous state into setState,
 but such solutions only solved issues when previous state did not depend on another
 setState.  I concluded that I could try:
 
 1.  Passing into an interim non-rendering component.  But if a component is not rendered,
 I think it might not trigger React to update state in the end.
 
 2.  useEffect
 
 3.  solutions using class and .this and topics not covered in class, which also applies
 to the previous two.
 
 4.  A workaround, using only things we had covered in class.  I decided to go with this.
 
 */

  function setBirdTotalBonuses(birdTotal) {
    if (birdTotal < 100) {
      setBonus(previous => []);
    } else if (birdTotal >= 100 && birdTotal < 300) {
      setBonus(previous => bonusItems.slice(0, 1)); // Example is poorly written!
    } else if (birdTotal >= 300 && birdTotal < 500) {
      setBonus(previous => bonusItems.slice(0, 2));
    } else if (birdTotal >= 500 && birdTotal <= 1000) {
      setBonus(previous => bonusItems.slice(0, 3));
    } else if (birdTotal > 1000) {
      setBonus(previous => bonusItems.slice(0, 4));
    }
  }

  function cartAdoptThisBird(event, bird, cart, total) {
    event.preventDefault();
    setCart(previous => [...previous, bird]);
    setTotal(total => total + bird.amount);
    setRunOnce(true);
    /* The Async Saga Part 4:
    
    The below requires some explanation.  I believe useState, setState are async.
    The "cart" outside this function (the useState "cart") is passed into "Bird".
    Suppose useState "cart" has two items.  This is passed to Bird, and Bird renders.
    "cart" is passed back to this function, where "cart" is increased to three items, but
    Bird has already rendered.  So though cart contains three items (now), cart.length
    is only two items (which is what it was when it was passed to Bird).
    I think "cart" will not update until after it is rendered again, but I think
    the logic of this function concludes before that rendering happens.

    What about doing things in a different order?  The function must be passed down as props to "Bird"; that's how useState works to update items.  The function must be
    called here, in "App".  Placing setDiscount inside an if did not work.  Placing an
    if inside setDiscount did not work.

    Since various playing around with ordering did not work, what solution is left?
    I believe if this function is running, cart.length is always one step behind
    due to resolution of useState.  But if this function is running, we know that a bird
    *will* be added, even if cart.length hasn't caught up to it yet.

    So we add 1 to cart.length to represent the bird that will be added, and evaluate
    against the condition.
    */
    if (cart.length + 1 >= 3) {
      setDiscount(10);
    }
    const birdTotal = total + bird.amount;
    setBirdTotalBonuses(birdTotal);
  } // cartAdoptThisBird

  function cartDeleteThisBird(event, cartIndex, bird, cart, total) {
    event.preventDefault();
    setCart((previous) => {
      return [...previous.slice(0, cartIndex), ...previous.slice(cartIndex + 1, cartIndex.length)]
    });
    setTotal(total => total - bird.amount);
    setRunOnce(true);
    /*
    Similarly to logic previous, cart.length-1
    */
    if (cart.length - 1 < 3) {
      setDiscount(0);
    }
    const birdTotal = total - bird.amount;
    setBirdTotalBonuses(birdTotal);
  } // cartDeleteThisBird

  function formSubmission(event) {
    event.preventDefault();
    alert("You have adopted birds. Thank you!")
    resetCart();
  }

  function resetCart() {
    setCart([]);
    setTotal(0);
    setBonus([]);
    setDiscount(0);
    setRunOnce(true);
  }

  return (
    <div>

      <Cart
        cart={cart}
        cartDeleteThisBird={cartDeleteThisBird}
        total={total}
        discount={discount}
        setDiscount={setDiscount}
        bonuses={bonuses}
        bonusItems={bonusItems}
        setBonus={setBonus}
        runOnce={runOnce}
        setRunOnce={setRunOnce}
      />
      <Checkout 
      formSubmission={formSubmission}
      />

      <BirdCards birdData={birdData} cartAdoptThisBird={cartAdoptThisBird} cart={cart} total={total} />
    </div>
  );
};

export default App;
