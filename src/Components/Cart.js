function Cart({ cart, adoptBirdTotal, setAdoptBirdTotal }) {
  //console.log(adoptBirdTotal)

  //   function calculateTotal() {
  //     let total = adoptBirdTotal;
  //     cart.map((bird) => {
  //        return  adoptBirdTotal += bird.amount
  //     })
  //     return total
  //   }

  //onClick={() => calculateTotal(adoptBirdTotal)}

  return (
    <div className="cart">
      <h1>Cart</h1>
      <p>Discount: %0 </p>
      <h4>
        <strong>Total:$ {adoptBirdTotal}</strong>
      </h4>
      {cart.map((birdItem) => {
        setAdoptBirdTotal(birdItem.amount);

        return (
          <ol key={birdItem.id}>
            <li>
              {birdItem.name} ${birdItem.amount}.00
            </li>
            <button>delete</button>
          </ol>
        );
      })}
      <p>Your donations has qualified you for the follwing items</p>
    </div>
  );
}

export default Cart;
