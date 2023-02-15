import React from "react";
function Cart(props) {
  return (
    <div className="Cart">
      <h1>Cart</h1>
      <ol></ol>
      <p>Discount: 0% </p>
      <h4>
        <strong>Total: $0.00 </strong>
      </h4>
      <p>Your donations has qualified you for the following items:</p>
      <ul>{props.cart.map((item) => { return <li>{item.name}</li>})}</ul>
    </div>
  );
}

export default Cart;
