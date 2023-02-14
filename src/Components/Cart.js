import { useState } from "react";
import Checkout from "./Checkout"
import bonusItems from "../data/bonusItems"


export default function Cart({ cartContent, cartTotal, deleteBird }) {

    const [bonuses, setBonuses] = useState([]);

    function addBonus() {
        if (cartTotal >= 100 && !bonuses.includes(bonusItems[0])) {
            setBonuses([...bonuses, bonusItems[0]]);
        } else if (cartTotal >= 300 && !bonuses.includes(bonusItems[1])) {
            setBonuses([...bonuses, bonusItems[1]]);
        } else if (cartTotal >= 500 && !bonuses.includes(bonusItems[2])) {
            setBonuses([...bonuses, bonusItems[2]]);
        } else if (cartTotal >= 1000 && !bonuses.includes(bonusItems[3])) {
            setBonuses([...bonuses, bonusItems[3]]);
        }

        if (bonuses) {
            return (
                <>
                    {bonuses.map((bonus, index) => <li key={index}>{bonus}</li>)}
                </>
            )
        }
    }

    return (
        <div className="Cart">
            <div className="top">
                <h3>Cart</h3>
                <p>Discount: {(cartContent.length > 2) ? "10" : "0"}%</p>
                <h4>Total: ${cartTotal}</h4>
                <ol>
                    {
                        cartContent.map((item, index) => {
                            // console.log(item, index)
                            return (
                                <li key={item.id}>
                                    {item.name} ${item.amount}.00
                                    <br />
                                    <button
                                        onClick={(event) => {
                                            setBonuses([]);
                                            deleteBird(item, event)
                                        }}
                                    >Delete</button>
                                </li>
                            )
                        })
                    }
                </ol>
                <p>Your donations have qualified you for the following items.</p>
                <ul>
                    {addBonus()}
                </ul>
            </div>
            <Checkout
                key="checkout"
                cartTotal={cartTotal}
                cartContent={cartContent}
            />
        </div>
    )
}