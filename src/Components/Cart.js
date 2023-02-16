

function Cart({cart, cartTotal, discount, handleDelete}) {


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
                            <button onClick={() => handleDelete(item)}>Delete</button>
                        </li>
                    )
                })
                }
            </ol>

            <p>Your donations has qualified you for the following items</p>
            <ul>



            </ul>

        </div>
    )
}

export default Cart