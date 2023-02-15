

function Cart({ cart, adoptBirdTotal,deleteBird, discount, setDiscount}) {


  return (
    <div className="cart">
      <h1>Cart</h1>
      <p>Discount: %{discount}</p>
      <h4>
        <strong>Total:$ {adoptBirdTotal}</strong>
      </h4>
      {cart.map((bird) => {
          adoptBirdTotal = bird.amount
          return (
              <ol key={bird.id}>
            <li>
              {bird.name} ${bird.amount}.00
            </li>
            <button onClick={() => deleteBird(bird)}>delete</button>
          </ol>
        );
      })}
      <p>Your donations has qualified you for the following items</p>
    </div>
  );
}

export default Cart;
