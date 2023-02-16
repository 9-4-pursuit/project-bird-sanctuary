import { useState, useEffect } from "react";

function Cart({ cart, adoptBirdTotal, deleteBird, bonusItems }) {
  const [bonus, setBonus] = useState([]);

  useEffect(() => {
    handleBonus(adoptBirdTotal);
  }, [cart]);

  function handleBonus(adoptBirdTotal) {

if (adoptBirdTotal === 0) {
setBonus([])
}    else if (adoptBirdTotal >= 100 && adoptBirdTotal <= 300) {
      setBonus([bonusItems[0]]);
    } else if (adoptBirdTotal > 300 && adoptBirdTotal <= 500) {
      setBonus([bonusItems[0], bonusItems[1]]);
    } else if (adoptBirdTotal > 500 && adoptBirdTotal < 1000) {
      setBonus([bonusItems[0], bonusItems[1], bonusItems[2]]);
    } 
    else {
      setBonus(bonusItems);
    }
  }

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
        {bonus &&
          bonus.map((item, i) => {
            return <li key={`bonus${i}`}>{item}</li>;
          })}
      </ul>
    </div>
  );
}

export default Cart;
