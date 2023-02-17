function BirdCart(props) {
  const { cart, bonusItems } = props;
  
  const areThreePlus = cart.length >= 3;
  const discount = areThreePlus ? 10 : 0;

  let total = 0;
  cart.forEach((bird) => {
    total += areThreePlus ? bird.amount * 0.9 : bird.amount;
  });

  let bonuses;
  if (total >= 1000) {
    bonuses = (
      <ul>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
        <li>{bonusItems[2]}</li>
        <li>{bonusItems[3]}</li>
      </ul>
    );
  } else if (total >= 500 && total < 1000) {
    bonuses = (
      <ul>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
        <li>{bonusItems[2]}</li>
      </ul>
    );
  } else if (total >= 300 && total < 500) {
    bonuses = (
      <ul>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
      </ul>
    );
  } else if (total >= 100 && total < 300) {
    bonuses = (
      <ul>
        <li>{bonusItems[0]}</li>
      </ul>
    );
  }

  function removeBird(event) {
    event.target.parentNode.remove()
  }
  //got event.target.parentNode.remove() from https://stackoverflow.com/questions/47377279/removing-elements-from-the-dom-by-their-id-not-index

  return (
    <div className="Cart" id="box1">
      <h2>Cart</h2>
      <h3>Discount: {discount}%</h3>
      <h4>Total:${total}</h4>
      <ol>
        {cart.map((bird) => {
          return (
            <li>
              {bird.name}: ${bird.amount}
              <button onClick={removeBird}>Remove</button>
            </li>
          );
        })}
      </ol>
      <p>Your donations have qualified you for the following items</p>
      <p>{bonuses}</p>
    </div>
  );
};

export default BirdCart;
