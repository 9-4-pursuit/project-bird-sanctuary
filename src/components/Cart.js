import { useState } from 'react';
import Checkout from './Checkout'

function Cart ({insideCart, cartTotal}) {
    return (
      <div className = "purchase">
      <div className ="cart">
        <h4>Cart</h4>
        <p>Discount:{}%</p>
        <h4><strong>Total: ${cartTotal}</strong></h4>
        <ol>
        {
         insideCart.map((item) => {
            return (
              <li key={item.id}>
                {item.name} ${item.amount}.00
                <button>Delete</button>
              </li>
            )
          })
        }
        </ol>
        <p>Your donations has qualifed you for the following items:</p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Checkout />
      </div>
    );
  };


export default Cart;

  