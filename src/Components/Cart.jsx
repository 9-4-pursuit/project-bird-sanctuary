import bonusItems from "../data/bonusItems";


function Cart({ birds, setBirds }) {
  const updateBirdsArray = (bird) => {
    birds.splice(birds.indexOf(bird), 1);

    setBirds([...birds]);
  };

  const total = birds.reduce((a, b) => {
    return b.amount + a;
  }, 0);

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>
        Total: $
        {total}
      </h4>
      <p>Discount: {birds.length >= 3 ? "10%" : "0%"}</p>
      <ol>
        {/*  */}
        {birds.map((bird) => {
          return (
            <li key={bird.id}>
              {bird.name}: ${bird.amount}
              <button 
                onClick={() => {
                  updateBirdsArray(bird)
                }}
              ></button>
            </li>
          );
        })}
      </ol>
      <p>Your donations have qualified you for the following items:</p>
      <ul>
      {total > 99 ? <li>{bonusItems[0]} </li> : null}
       {total> 100 ? <li>{bonusItems[1]} </li> : null}
        {total > 499 ? <li>{bonusItems[2]}</li> : null}
        {total > 999 ? <li>{bonusItems[3]} </li> : null}
      </ul>
    </div>
  );
}



export default Cart;