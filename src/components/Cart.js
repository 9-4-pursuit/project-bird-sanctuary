// import CartItems from "./CartItems"
// import birdData from "../data/birds" 
import { useState  } from "react"
import birdData from "../data/birds";


function Cart (props) {
    //SHOPPING CART ARR
    console.log(props.shoppingCart)

    //INFITE LOOP???
    // const [total, setTotal] = useState(0);

    // props.shoppingCart.forEach(cartItem => {
    //     setTotal(total + cartItem.amount)
    // });

    const total = props.shoppingCart.reduce((acc, cartItem) => {
    return acc + cartItem.amount;
    }, 0);


    // const [item, setItem] = useState();

    // props.shoppingCart.map(element => {
    //    setItem(<li key={element.id}>{element.name}: ${element.amount}</li>)
    // })

    const [cartContent, setCartContent] = useState([]);
      
    function deleteItem(item) {
        const newCart = cartContent.filter((cartItem) => cartItem.id !== item.id);
        setCartContent(newCart);
      }

    const items = props.shoppingCart.map((element) => (
        <li key={element.id}>
          {element.name}: ${element.amount}
          <br />
          <button onClick={() => deleteItem(element)}>Delete</button>
        </li>
      ));

      // const [discount, setDiscount] = useState();

      // function handleDiscount(total) {
      //   if(total > 100) {
      //       setDiscount(0)
      //   }
      // }


    return (
        <div>
        <div className="Cart">
        <div className="container">
            <h3>Cart</h3>
            <h5>Discount: %</h5>
            <h4>Total: ${total}</h4>

            <ol>
            {items}
            </ol>

            <p>Your donations have qualified you for the following items:</p>
            <ul>

            </ul>
        </div>
    </div>
        </div>
    )
}

export default Cart