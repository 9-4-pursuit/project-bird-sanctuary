import { useState } from "react";



export default function Cart ({cartTotal, cartContent, deleteBird, discount, bonus,}) {


    return (

      <>
      <div className="Cart">
        <h1><strong>Cart</strong></h1>
        
        <p><strong>Discount: {discount}%</strong></p>
        <h4><strong>Total: ${cartTotal}</strong></h4>
        <ol>
          {
            cartContent.map((item) => {
              return(
                <li key={item.id}>
                  {item.name} ${item.amount}.00 
                  <br></br>
                  <button onClick={() => (deleteBird(item))}>Delete</button>

                </li>
              )
            })
          }
        </ol>
        <p>Your donations has qualified you for the following items:</p>
        <ul>
          {
            bonus.map((bonus, i) =>{
              return (
                <li key={i}>
                  {bonus}
                </li>
              )
            })
          }
        </ul>
      </div>
      </>
    );
  };