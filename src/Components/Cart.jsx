

import {v1 as generateUniqueID} from "uuid"
// import { useState } from "react";

function Cart({ addToCart, total, bonusItemHandler, bonusItems, bonusArray }) {

    let discount = 0
    addToCart.length < 3 ? discount = 0 : discount = 10;
    // const [showState, setShowState] = useState(true)


    function remove(e) {
        e.target.parentNode.remove()
      }

    return (
        <div className="Cart">
            <h1>Cart</h1>
            <h3>Discount: {discount}%</h3>
            <h4>Total: ${!discount ? total: total - (total * .1)}</h4>
            <ol>
                {addToCart ? addToCart.map((item, index) => {
                    bonusItemHandler(item)

                    return (
                        <>
                        <li id={item.name + index}key={generateUniqueID()}> {item.name} : ${item.amount}
                        <button onClick={(event) => remove(event)} >Delete</button>
                        </li>
                        </>
                    )
                }) : null}
            </ol>

            <p>Your donations have qualified you for the following items</p>
            <ul>

                {bonusArray.length > 0 ? bonusArray.map((item) => <li key={item}>{item}</li>) : ""}
                {total >= 1000 ? <li key={bonusItems[3]}>{bonusItems[3]}</li> : ""}
            </ul>
        </div>
    )
}

export default Cart