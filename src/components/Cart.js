import React from "react";

function Cart({ cart, total, discount, bonus, setTotal }) {


    function removeFromCart(event, bird) {
          event.target.parentNode.remove()
          setTotal(total- bird.amount)
    }

   

  return (
    <>
      <div className="Cart">
        <h1>Cart</h1>
        <h3>Discount: {discount}%</h3>
        <h4>Total: ${total}</h4> 
        <ol>
        {cart.map((bird, index) => (
          <li>
            <p>{bird.name}: ${bird.amount}</p>
            <button key={bird.id} onClick={(event) => removeFromCart(event, bird)}>Remove from cart</button>
          </li> 
        ))}
        </ol>
        <p>Your donation has qualified you for the following items:</p>
        <ul>
        {bonus.map((item, index) => (
          <li>{item}</li> 
        ))}
        </ul>
      </div>
    </>
  );
}

export default Cart;
