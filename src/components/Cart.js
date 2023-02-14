import React from "react";
import { v1 as generateUniqueID } from "uuid";

function Cart({ cart, setCart }) {
    function removeFromCart(event) {
        setCart(prevCart => {
          const newCart = prevCart.filter(bird => bird !== event);
          setCart(newCart);
        });
    }

  return (
    <>
      <div className="Cart">
        <h1>Cart</h1>
        <h4>Discount: </h4>
        <h4>$total</h4> 
        <ol>
        {cart.map((bird, index) => (
          <li>
            <p>{bird.name}: ${bird.amount}</p>
            <button key={bird.id} onClick={() => removeFromCart(bird)}>Remove from cart</button>
          </li> 
        ))}
        </ol>
      </div>
    </>
  );
}

export default Cart;
