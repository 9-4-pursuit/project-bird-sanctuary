import bonusItems from "../data/bonusItems";
import { useState, useEffect } from "react";

function Cart(props) {

    const cart = props.cart;
    const setCart = props.setCart;
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [bonus, setBonus] = useState([]);

    useEffect(() => {
        const calculate = () => {
            
            let theSum = cart.reduce((ac, current) => {
                return ac + current.amount;
            }, 0);
            
            if (cart.length > 2) {
                setDiscount(10);
                theSum *= .9;
            }
            
            setTotal(theSum);
            
            bonuses(theSum);
        };
         calculate()
    }, [cart]);

    
    function deleteBird(i) {
       
        let newCart = cart.filter((bird, index) => {
            return index !== i;
        });

        setCart(newCart);
    };

    function bonuses(totalPrice) {
        
        let bonusArr = [];

        if (totalPrice > 999) {
            bonusArr = [...bonusItems];
            setBonus(bonusArr);
        } 
        else if (totalPrice > 499) {
            bonusArr = bonusItems.slice(0, 3);

            setBonus(bonusArr);
        } 
        else if (totalPrice > 299) {
            bonusArr = bonusItems.slice(0, 2);

            setBonus(bonusArr);
        } 
        else if (totalPrice > 99) {
            bonusArr = bonusItems.slice(0, 1);

            setBonus(bonusArr);
        } 
        else {
            setBonus([]);
        };
    };

    return (
    <div className="Cart">
        <h3>Cart</h3>
        <p>Discount: {discount}%</p>
        <h4>Total: ${total}</h4>

        <ol>           
            {cart.map((bird, index) => {
                return (<li key={index}>
                    {bird.name}: ${bird.amount}
                    <button
                        onClick={() => deleteBird(index)}>Remove</button>
                </li>);
            })}
        </ol>

        <p> Your donation has qualified you for the following items:</p>
        <ul >
            {bonus.map((item, index) => {
                return (<li
                    key={index}>{item}</li>);
            })}
        </ul>
    </div>);
};


export default Cart;