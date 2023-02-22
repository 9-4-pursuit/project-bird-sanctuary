import uuid from 'react-uuid';


 function Cart(props) {


    let discount = props.cart.length > 2 ? 10 : 0;
    console.log("props.cart: " ,props.cart);



      // use filter to keep all the birds that DON'T have the id you are deleting. Using !==.
      // make sure that the ids are not the same when they are added to the cart - changed keys to UUIDs
      //add a delete button to each bird
  



  return (
    <div className="Cart">
      <h3>Your cart</h3>
      <ol>
        {props.cart.map((bird) => (
          <li key={uuid()}>{bird.name},   ${bird.amount} - <button className="deleteButton" id="deleteButton" onClick={() => props.deleteBird(bird)}>
          Delete This Bird
          </button></li>
        ))}
      </ol>

      {/* Display Bonus Items Earned */}
      <p> Bonus items earned: </p>
      <ul>
      {props.funExtra.map((items) => (
         <li key={uuid()}> {items} </li> 
         ))}

      </ul> 
      
      <p></p>
      <p>
        Discount: <span id="discount-amount">{discount}%</span>
      </p>

      
        <h4>
          Total: $<span>{(discount === 0) ?  props.total : (props.total)*.9}</span>
        </h4>

        <p className="success-alert" id="success-alert"></p>
      
    </div>
  );
}

export default Cart;


      // Using randomizer to generate a unique idea for each bird in cart. This is not a great way to do it. Try UUID instead.

      // Calculate total cost of all birds in the cart. Then if discount doesn't equal zero, multiply it by .90. 