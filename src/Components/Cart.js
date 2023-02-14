import birdData from "../data/birds";
// import "./App.css";
//import styles from './App.css'


function Cart () {

  let discount = 0;
  const totalCost = 0;
  const bonuses= "";
  const birdsInCart = 0;



    switch (birdsInCart) {
      case 0:
      case 1: 
      case 2 :
          console.log("One bird");
          let discount = 0;
          break;
      default:
        console.log("default number of birds");
    }


    return (
      <div>
        <h1>Hello, Cartworld!</h1>

        <form className="cart">
          <fieldset>
            <label>
              <p> Example </p>
              <input name="example"/>
            </label>
          </fieldset>
          <button type="submit">Submit button</button>
          </form>
        <form>
          <fieldset>
            <label for="clear-cart">
              <p>for clear cart</p>
              <input name="clear-cart" />
            </label>
            </fieldset>
            <button className="clear-cart" onSubmit="squigly lines and a prop?"></button>

        </form>
        <p> Bonus items earned: </p> 
        <p> Discount:  <span id="discount-amount"></span>%</p>
        <p></p>
       
        <h4>Total: $<span>tbd</span></h4>
        <button className="submit" content="Submit">

        </button>
        <p className="success-alert" id="success-alert"></p>
      
      </div>
    );
  };
  
  export default Cart;


// DONE  The cart has a class name of Cart
// When I click on a bird card's adopt button, its name appears in the cart as an <ol> list item.
// The total shows up as an <h4> element inside the cart
// When I click on an additional item, the total cost is updated and additional bird name(s) is added as a list item to the unordered list
// When there are less than 3 birds in the cart there is a 0% discount
// When there are 3 or more birds in the cart there is a 10% discount

// I can complete the inputs in the checkout form.
// When I complete the form with valid input and click Submit, an alert tells me the purchase was successful.
//  DONE  Alert text should include: You have adopted birds. Thank you!
// When I close the alert box, the cart component should fully reset (no birds, no discount, total = 0, no bonus items listed)



//

  // function emptyFunction(){
  //   document.createElement("p").value = "emptyFunction"
  // }

  //

//  <h4>Total: <span>`${totalCost}</span></h4>