
import Checkout from './Checkout'

function Cart ({cart, cartTotal, discount}) {
    return (
      <div className = "purchase">
      <div className ="Cart">
        <h4>Cart</h4>
        <p>Discount:{discount}%
          {/* {discount ? "10" : "0"}% */}
        </p>
        <h4><strong>Total: ${cartTotal}</strong></h4>
        <ol>
        {
         cart.map((item) => {
            return (
              <li key={item.id}>
                {item.name} ${item.amount}.00
                {/* USE A CALLBACK TO DELETE THE BIRD OUT OF CART */}
                <button>Delete</button>
              </li>
            )
          })
        }
        </ol>
        <p>Your donations has qualifed you for the following items:</p>
        {/* how do we assign the discount to the cart 
            100-300 = stickers \\  300-500 = background || 500-1000 = tote bags || 1000 + = Invites to livestream
              */}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Checkout />
      </div>
    );
  };


export default Cart;

  