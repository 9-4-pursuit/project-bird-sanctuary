

function Cart({ cartItem, defaultStatus }) {
    return (
        <div className="Cart">
            <h3>Cart</h3>
            <h4>Discount: %</h4>
            <h4>Total: $</h4>
            <ol>
                {
                    cartItem.map((item) => {
                        return (
                            <li>
                                {item.name}: ${item.amount}
                            </li>
                        )
                    })
                }
            </ol>
            <p style={defaultStatus ? { display: "none" } : { display: "block" }}>
                Your donations have qualified you for the following Items:
            </p>
            

        </div>
    )
}

export default Cart;