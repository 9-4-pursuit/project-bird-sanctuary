import { useState } from "react";
import bonusItems from "../data/bonusItems"
import Checkout from "./Checkout"
// We have made Checkout.js a child of Cart.js, so Checkout.js is grandchild to App.js

export default function Cart({ cartContent, cartTotal, deleteBird }) {

    // Hook to manage our bonuses unlocked relative to cartTotal
    const [bonuses, setBonuses] = useState([]);

    // Edge cases based on cartTotal & checking if our BONUSES array already contains a certain bonus
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

        // If the array has content, MAP through it
        if (bonuses) {
            return (
                <>
                    {bonuses.map((bonus, index) => <li key={index}>{bonus}</li>)}
                </>
            )
        }
    }

    // Below we will MAP through our cartContent array (which contains each entire BIRD OBJECT)
    // While MAPPING, we will pull out each individual BIRD OBJECT & it's INDEX in the cartTotal array
    // We will pass this data as PARAMS to our deleteBird func, that was passed down from App.js
    // We are also passing down hooks to our Checkout.js component (in this project, nothing is being done with them)
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
                                        onClick={() => {
                                            setBonuses([]);
                                            deleteBird(item, index)
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