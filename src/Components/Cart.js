//import birdData from "../data/birds";
// import "./App.css";
//import styles from './App.css'

function Cart() {

  // const{ birds, total, discount } = cart;

const cart = {
  birds:[],
  total: 0,
  discount: 0,
  bonuses:[],
}


  // const cart = JSON.parse(localStorage.getItem("cart")) || {
  //   birds:[],
  //   total: 0,
  //   discount: 0,
  //   bonuses:[],
  // };

  
  // const [total, setTotal] = 0;

  // let discount = 0;
  // const totalCost = 0;
  // const bonuses = "";
  // const birdsInCart = 0;

  // switch (birdsInCart) {
  //   case 0:
  //   case 1:
  //   case 2:
  //     console.log("One bird");
  //     discount = 0;
  //     break;
  //   default:
  //     console.log("default number of birds");
  // }

  return (
    <div className="Cart">
      <h3>Your cart</h3>
      <ol>
        {cart.birds.map((bird) => (
          <li>{bird.name}</li>
        ))}
      </ol>

      <p> Discount: <span id="discount-amount">{cart.discount}%</span> </p>

      <h4>
        Total: $<span>{cart.total}</span>
      </h4>

      <button
          className="clear-cart"
          onClick={() => {
            localStorage.removeItem("cart");
          }}
          >
            Clear cart
          </button>

      <button 
        className="submit" 
        content="Submit"
        onClick={() => {
          alert("You have adopted birds. Thank you!");
          localStorage.removeItem("cart");
        }}
        >
          Submit
        </button>
      <p className="success-alert" id="success-alert"></p>



      <p> Bonus items earned: </p>
      <p>
        {" "}
        Discount: <span id="discount-amount"></span>%
      </p>
      <p></p>

      </div>
  );
}

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
