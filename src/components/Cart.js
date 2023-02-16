// import { useState } from "react"
import bonusItems from "../data/bonusItems"
export default function cart(props) {

    const addCartItem = props.cart.map((bird, id) => {

        return (
            <li className="cart">
                {bird.name} ${bird.amount}  <button onClick={() => props.remove(bird)}>delete</button>
            </li>

        )
    })

    return (
        <div>
            <h1>Cart</h1>
            <h3>Discount: {props.discount(cart)}%</h3>
            <h4>Total: ${props.total}</h4>
            <div>
                <ol>
                    {addCartItem}

                </ol>
            </div>
            <p>Your donations has qualified you for the following items:</p>
            <div>
                <ul>
                    {props.total >= 100 ? <li>{bonusItems[0]}</li> : null}
                    {props.total >= 300 ? <li>{bonusItems[1]}</li> : null}
                    {props.total >= 500 ? <li>{bonusItems[2]}</li> : null}
                    {props.total > 1000 ? <li>{bonusItems[3]}</li> : null}
                </ul>
            </div>
        </div>

    )
}