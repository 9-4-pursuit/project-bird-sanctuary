

function Cart({cart, cartTotal, discount}) {


    return (
        <div className="Cart">
            <h3>Cart</h3>
            <h4>Discount: {discount}%</h4>
            <h4>Total:${cartTotal}</h4>
            <ol>
                {
                cart.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.name} ${item.amount}.00
                            <button>Delete</button>
                        </li>
                    )
                })
                }
            </ol>

            <p>Your donations has qualified you for the following items</p>

        </div>
    )
}

export default Cart