
// The cart receives the data from the parent component through props. The component is responsible 
// for rendering the birds that are in the cart, the total cost, the discount, and the bonus items.


function Cart ({adoptBird, cartTotal}) {
    return (
        <div className="cart">
            <h1><center>Cart</center></h1>
            <p><center><i>Discount 0%</i></center></p>
            <h4><center><strong>Total: $0</strong></center></h4>
            <p><center>Your donations qualify you for the following items</center></p>

        </div>
    )
}
export default Cart
