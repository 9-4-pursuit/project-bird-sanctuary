
export default function Cart({ cartContent, cartTotal }) {
    return (
        <div className="cart">
            <h4>Cart</h4>
            <p>Discount: { }%</p>
            <h4>Total: ${cartTotal}</h4>
            <ol>
                {
                    cartContent.map((item) => {
                        return (
                            <li key={item.id}>
                                {item.name} ${item.amount}.00
                            </li>
                        )
                    })
                }
            </ol>
            <p>Your donations have qualified you for the following items.</p>
            <button>Delete</button>

        </div>
    )
}