
import bonusItems from "../data/bonusItems";
import { useState } from "react";
import { useEffect } from "react";



export default function Cart(props) {

    //assign the props to a variable
    const cart = props.cart;
    const setCart = props.setCart;

    //create a state for result, discount, and bonus items
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [bonus, setBonus] = useState([])

    //after the cart updates, calculate
    useEffect(()=>{calculate()}, [cart])

    //calculate the total and discount
    function calculate(){
        //add the totals together and assign to a variable
        const sum = cart.reduce((acc, current)=> {
            return acc + current.amount;
        },0);
        //check for discount
        if (cart.length >= 3){
            setDiscount(10);

        } 
        //set the new total
        setTotal(sum);

    }




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