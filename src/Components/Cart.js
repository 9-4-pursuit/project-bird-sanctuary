import { useState, useEffect } from "react";
import bonusItems from "../data/bonusItems";

function Cart ({ cart }) {

    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    // const [bonuses, setBonuses] = useState([]);

    function handleTotal(){
        let result = 0;
        cart.map((bird) => (result += bird.amount))
        if (cart.length > 2) {
            setDiscount(10);
            result *= 0.9;
        }
        setTotal(result);
        console.log(cart)
    }

    // function handleBonuses(){
    //     if (total >= 100 && total < 300) {
    //         setBonuses(bonusItems[0])
    //     }
    // }

    useEffect(() => {
        handleTotal();
        // handleBonuses();
    })

    return (
        <div className="Cart">
            <h3>Cart</h3>
            <h4>Discount: {discount}%</h4>
            <h4>Total: ${total}</h4>
            <ol >
                {
                    cart.map((bird) => (
                        <li key={bird.name} >{bird.name} ${bird.amount}.00</li>
                    ))
                }
            </ol>
            <p>Your donations has qualified you for the following items</p>
            <ul>
                {/* {
                    bonuses.map((bonus) => (
                        <li>{bonus}</li>
                    ))
                } */}
            </ul>
        </div>
    )
}

export default Cart;