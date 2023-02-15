
// The cart receives the data from the parent component through props. The component is responsible 
// for rendering the birds that are in the cart, the total cost, the discount, and the bonus items.


const Cart = ({ cart, discount, total, bonus }) => {
    return (
        <div className="Cart">
            <h1>Cart</h1>
            <p><i>Discount {discount}%</i></p>
            <h4><strong>Total: ${total}</strong></h4>
            <p>Your donations qualify you for the following items</p>

        <ol>
        {cart.map((bird) => (
            
            <li>
            <p>{bird.name}</p>
            <p>${bird.amount}</p>
           
            </li>
        ))}
        </ol>
        <ul>
             {bonus.map((item) => (
            <li>
                {item}
            </li>
            
            )) 
            }</ul>
        </div>
    )
}
export default Cart
