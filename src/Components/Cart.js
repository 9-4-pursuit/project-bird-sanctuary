
export default function Cart({ cartContent, cartTotal, discount }) {
    return (
        <div className="cart">
            <h3>Cart</h3>
            <p>Discount: {discount}%</p>
            <h4>Total: ${cartTotal}</h4>
            <ol>
                {
                    cartContent.map((item) => {
                        return (
                            <li key={item.id}>
                                {item.name} ${item.amount}.00
                                <button>Delete</button>
                            </li>
                        )
                    })
                }
            </ol>
            <p>Your donations have qualified you for the following items.</p>

        </div>
    )
}