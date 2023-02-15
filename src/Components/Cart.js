function Cart({ cart, adoptBirdTotal, deleteBird, handleBonus, bonus }) {
  return (
    <div className="cart">
      <h1>Cart</h1>
      <p>Discount: {cart.length >= 3 ? 10 : 0} %</p>
      <h4>
        <strong>Total:$ {adoptBirdTotal}</strong>
      </h4>
      <ol>
        {cart.map((bird) => {
          adoptBirdTotal = bird.amount;
          return (
            <li key={bird.id}>
              {bird.name} ${bird.amount}.00
              <button onClick={() => deleteBird(bird)}>delete</button>
            </li>
          );
        })}
      </ol>
      <p>Your donations has qualified you for the following items</p>
      <ul>
        {
        bonus &&
          bonus.map((item,i) => {
            return <li key={`bonus${i}`}>{item}</li>;
          })}
      </ul>
    </div>
  );
}

export default Cart;
