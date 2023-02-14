
// The cart receives the data from the parent component through props. The component is responsible 
// for rendering the birds that are in the cart, the total cost, the discount, and the bonus items.


function Cart ({adoptBird, cartTotal}) {
    return (
        <div className="cart">
            <h1>Cart</h1>
            <p><i>Discount 0%</i></p>
            <h4><strong>Total: $0</strong></h4>
            <p>Your donations qualify you for the following items</p>

        </div>
    )
}
export default Cart
