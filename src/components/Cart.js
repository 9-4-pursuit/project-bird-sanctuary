
import bonusItems from "../data/bonusItems";
import { useState, useEffect } from "react";



export default function Cart(props) {

    //assign the props to a variable
    const cart = props.cart;
    const setCart = props.setCart;

    //create a state for result, discount, and bonus items
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [bonus, setBonus] = useState([])

    //after the cart or total updates, calculate
    useEffect(()=>{
        calculate();
    }, [cart])

    //calculate the total and discount
    function calculate(){
        //add the totals together and assign to a variable
        let sum = cart.reduce((acc, current)=> {
            return acc + current.amount;
        },0);
        //check for discount
        if (cart.length >= 3){
            setDiscount(10);
            sum *= .9;
        } 
        //set the new total
        setTotal(sum);
        //calculate the bonus items
        bonusEarned(sum)

    }

    //function to remove bird from cart
    function removeBird(i) {

        //iterate through cart and filter
        let newCart = cart.filter((bird, index) => {
            return index !== i;
        })

        //set the cart with the bird removed
        setCart(newCart);
    }


    //function to map through the bonus items
    function bonusEarned(totalPrice){
        //create array for the specific bonus items
        let bonuses = [];

        //check if the total meets the requirements
        if (totalPrice > 1000){
            bonuses = [...bonusItems];
            setBonus(bonuses);
        } else if (totalPrice >= 500) {
            bonuses = bonusItems.slice(0,3);

            setBonus(bonuses);
        } else if (totalPrice >= 300) {
            bonuses = bonusItems.slice(0,2);

            setBonus(bonuses);
        } else if (totalPrice >= 100) {
            bonuses = bonusItems.slice(0,1);

            setBonus(bonuses);
        } else {
            setBonus([])
        }
    }

    return(<div className="Cart">
        <h2>Cart</h2>
        <h4>Discount: {discount}%</h4>
        <h4>Total: ${total}</h4>
        
        <ol className="cart-birds" >
            {/* iterate through cart */}
            {cart.map((bird, index) => {
                
                return (<li key={index}>
                    {bird.name}: ${bird.amount}
                    <button onClick={() => removeBird(index)}>remove</button>
                </li>)
            })}
        </ol>
        
        <p>Your donation has qualified you for the following items:</p>
        <ul className="bonus">
            {bonus.map((item, index)=>{
                return (<li key={index}>{item}</li>);
            })}
        </ul>
        
    </div>)
}