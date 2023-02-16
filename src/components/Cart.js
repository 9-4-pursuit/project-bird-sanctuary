
import Checkout from './Checkout'

function Cart ({cart, cartTotal, discount, handleDeletion, bonus}) {
    return (
      <div className = "purchase">
      <div className ="Cart">
        <h4>Cart</h4>
        <p>Discount:{discount}%
        </p>
        <h4><strong>Total: ${cartTotal}</strong></h4>
        <ol>
        {
         cart.map((item) => {
            return (
              <li key={item.id}>
                {item.name} ${item.amount}.00
                {/* USE A CALLBACK TO DELETE THE BIRD OUT OF CART */}
                <button onClick={() => handleDeletion(item)}>Delete</button>
              </li>
            )
          })
        }
        </ol>
        <p>Your donations has qualifed you for the following items:</p>
        <ul>
          {
            bonus.map((bonus, i) =>{
              return (
                <li key={i}>{bonus}</li>
              )
            })
          }
        </ul>
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

  