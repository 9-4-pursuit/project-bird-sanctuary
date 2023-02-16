

function Cart({ cart, adoptBirdTotal, deleteBird, bonus }) {
 

//   useEffect(() => {
//     handleBonus(adoptBirdTotal);
//   }, [cart]);

  
  return (
    <div className="Cart">
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
        { bonus && bonus.map((bonusItem,i) => {
            return (
                <li key={i}>{bonusItem}</li>
            )
        })} 
      </ul>
    </div>
  );
}

export default Cart;
