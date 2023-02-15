//import birdData from "../data/birds";
//import "./App.css";
//import styles from './App.css'

// function Cart({ bird, bonus }) {

//   const cart = JSON.parse(localStorage.getItem("cart")) || {
//     birds:[],
//     total: 0,
//     discount: 0,
//     bonuses:[],
//   };

//   // const [birdsInCart, setBirdsInCart] = useState([]);

//   const handleAdopt = (bird) => {
//     setBirdsInCart((prevBirds) => [...prevBirds, bird]);
//   };

//   const handleClearCart = () => {
//     setBirdsInCart([]);
//   };

//   const handleRemoveBird = (index) => {
//     setBirdsInCart((prevBirds) => {
//       const updatedBirds = [...prevBirds];
//       updatedBirds.splice(index, 1);
//       return updatedBirds;
//     });
//   };

//   const handleCheckout = (event) => {
//     event.preventDefault();

//     if (birdsInCart.length > 0) {
//       // handle checkout logic and show success alert
//     }



//   return (
//     <div>
//       <h3>Your cart</h3>
//       <ol>
//         {birdsInCart.map((bird, index) => (
//           <li key={bird.id}>
//           {bird.name}{" "}
//           <button onClick={() => handleRemoveBird(index)}>Remove</button>
//         </li>
//         ))}
//       </ol>
//       <button onClick={handleClearCart}>Clear Cart</button>
//       <form onSubmit={handleCheckout}>
//         <fieldset>
//           {/* add input fields for checkout form */}
//         </fieldset>
//         <button type="submit" disabled={birdsInCart.length === 0}>
//           Submit
//         </button>
//       </form>
      
//       <p> Discount: <span id="discount-amount">{cart.discount}%</span> </p>

//       <h4>
//         Total: $<span>{cart.total}</span>
//       </h4>


//       <button 
//         className="submit" 
//         content="Submit"
//         onClick={() => {
//           alert("You have adopted birds. Thank you!");
//           localStorage.removeItem("cart");
//         }}
//         >
//           Submit
//         </button>
//       <p className="success-alert" id="success-alert"></p>



//       <p> Bonus items earned: </p>
//       <p>
//         {" "}
//         Discount: <span id="discount-amount"></span>%
//       </p>
//       <p></p>

//       </div>
//   );
// }}

//export default Cart;

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

