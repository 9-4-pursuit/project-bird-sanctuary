import React from "react";
import bonusItems from "../data/bonusItems";


function Cart (props) {

    return(
        <div className="Cart">
        <h1>Cart</h1>
        <ol>
            {props.cart.map((cart) => {
          return <li key={cart.id}><span>{cart.name}</span> <span>${cart.amount}</span>
                    <button onClick={() => {props.handleDelete(cart)}}>delete</button></li>
                 
        })}
        </ol>
        <p>Discount: {props.discount}%</p>
        <label><strong> Total:<h4>${props.total}</h4></strong></label>
        <p>Your donations has qualified you for the following items:</p>
        <p>{bonusItems.length>0 ? "Bouns Items" : ""}</p>
        <ul>
        {props.total >= 100 ? <li>{bonusItems[0]}</li>: null }
        {props.total >= 300 ? <li>{bonusItems[1]}</li>: null }
        {props.total >= 500 ? <li>{bonusItems[2]}</li>: null }
        {props.total > 1000 ? <li>{bonusItems[3]}</li>: null }
      </ul>
        
      </div>
    );
    }
    export default Cart;