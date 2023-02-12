
import bonusItems from "../data/bonusItems";
import { useState } from "react";



export default function Cart(props) {

    //assign the props to a variable
    const cart = props.cart;
    const setCart = props.setCart;
    const total = props.total;
    const setTotal = props.total;
    const discount = props.discount;
    const setDiscount = props.setDiscount;

    //create a state for result, discount, and bonus items
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [bonus, setBonus] = useState([])

    //function to update the cart 

    
    

    //function to map through the bonus items
    

    return(<div className="Cart">
        <h2>Cart</h2>
        <h4>Discount: {discount}%</h4>
        <h4>Total: ${total}</h4>
        
        <ol className="cart-birds" >
            {/* iterate through cart */}
            {cart.map((bird) => {
                
                return (<li key={"cart"+bird.id}>{bird.name}: ${bird.amount}</li>)
            })}
        </ol>
        
        <p>Your donation has qualified you for the following items:</p>
        <ul className="bonus">
            
        </ul>
        
    </div>)
}