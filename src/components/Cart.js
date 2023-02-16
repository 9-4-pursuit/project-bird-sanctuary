
// The cart receives the data from the parent component through props. The component is responsible 
// for rendering the birds that are in the cart, the total cost, the discount, and the bonus items.


const Cart = ({ cart, discount, total, bonus }) => {

    function deleteBird(event) {
        event.target.parentNode.remove()
         }
         

    console.log(bonus)
    return (
        <div className="Cart">
            <h1>Cart</h1>
            <p><i>Discount: {discount}%</i></p>
            <h4><strong>Total: ${total}</strong></h4>
            <p></p>

        <ol>
        {cart.map((bird) => (
            <li>
            <p>{bird.name}    </p>
            <p>${bird.amount}</p>
            <button onClick={deleteBird}>Delete</button>
            </li>
        ))}
        </ol>

        <h5>Your donations qualify you for the following items</h5>
        <ul>
            
             {bonus.map((item, index) => (
            <li key={index}>
                {item} 
            </li>
            ))}
  
            </ul>
        </div>
    )
}
export default Cart
