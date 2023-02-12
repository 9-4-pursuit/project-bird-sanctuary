import { useState } from 'react';

function Cart (props) {
    return (
      <div className ="cart">
        <h1>Cart</h1>
        <p>Discount: 0%</p>
        <p><strong>Total: $0</strong></p>
        <p>Your donations has qualifed you for the following items:</p>
      </div>
    );
  };


export default Cart;

  