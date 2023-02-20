import { useState } from "react";
import bonusItems from "../data/bonusItems";
import uuid from 'react-uuid';


 function Cart(props) {
    //should this be props or should it be { total, updateBird, deleteBird } and if so, what is the difference?

    const [bonusItem, setBonusItem] = useState([]);
    let discount = props.cart.length > 2 ? 10 : 0;
    console.log("props.cart: " ,props.cart);



    function getBonusItems(total) {
       let bonuses = [];
      if (total >= 100 && total < 300) {
        setBonusItem(() => [bonusItem, bonusItems[0]]);
        // bonuses.push(bonusItems[0]);
      }
      if (total >= 300  && total < 500) {
        bonuses.push(bonusItems[1]);
      }
      if (total >= 500 && total < 1000) {
        bonuses.push(bonusItems[2]);
      }
      if (total >= 1000) {
        bonuses.push(bonusItems[3]);
      }
      return bonuses;
      }
  


      //{(total >= 1000) ? bonusItems[4] : "nothing"}



    // function getBonusItems() {
    //   if (total >= 100 && total < 300) {
    //     setBonusItem(() => [bonusItem, bonusItems[0]]);
    //   }



      // use filter to keep all the birds that DON'T have the id you are deleting. Using !==.
      // make sure that the ids are not the same when they are added to the cart - changed keys to UUIDs
      //add a delete button to each bird
    function handleDelete(bird) {

          }
      
      
          // function deleteBird(bird) {
          //   const newCart=cartContent.filter((item)=>bird.id !==item.id)
          //   setCartContent(newCart);
          //   setCartTotal(cartTotal-bird.amount)
      
          //   if (cartContent.length<4) {
          //     setDiscount(0)
          //   }
          // }
           
  

    //const{ birds, total, discount } = cart;



  return (
    <div className="Cart">
      <h3>Your cart</h3>
      <ol>
        {props.cart.map((bird) => (
          <li key={uuid()}>{bird.name} - {bird.amount} - <button className="deleteButton" id="deleteButton" onClick={handleDelete}>
          Delete This {bird.name}
          </button></li>
        ))}
      </ol>

      {/* Display Bonus Items Earned */}
      <p> Bonus items earned: </p>
      <ul>
        {getBonusItems()}
        {bonusItems.map((bonus) => (
        <li key={uuid()}>{bonus.name}</li>
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