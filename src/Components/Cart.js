

function Cart({cart, cartTotal, discount, handleDelete, bonus}) {


    return (
        <div className="Cart">
            <h3>Cart</h3>
            <h5>Discount: {discount}%</h5>
            <h4>Total: ${cartTotal}</h4>
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
                {
                    bonus.map((bonus, i) => {
                        return (
                            <li key={i}>{bonus}</li>
                        )
                    })
                }





            </ul>

        </div>
    )
}

export default Cart