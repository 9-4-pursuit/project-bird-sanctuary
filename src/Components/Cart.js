

function Cart({ cartItem, defaultStatus, bonusItem, total }) {
    return (
        <div className="Cart">
            <h3>Cart</h3>
            <h4>Discount: %</h4>
            <h4>Total: ${total}</h4>
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
            <div style={defaultStatus ? { display: "none" } : { display: "block" }}>
                    <h6>Your donations have qualified you for the following Items:</h6>
                <ul>
                    <li>{bonusItem}</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Cart;