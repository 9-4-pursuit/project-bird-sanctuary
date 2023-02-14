import Bonus from "./Bonus";

const Cart = ({ birds, totalPrice, removeItem }) => {
  return (
    <>
      <h2>Cart</h2>
      <h4>Discount: {birds.length < 3 ? 0 : 10}%</h4>
      <h5>Total: ${totalPrice}</h5>
      {birds.map(({ id, name, amount }) => {
        return (
          <div className="order-cart" key={id}>
            <ol>
              <li>
                {name}: ${amount}
                <span
                  onClick={() => {
                    removeItem(id);
                  }}
                >
                  x
                </span>
              </li>
              <hr />
            </ol>
          </div>
        );
      })}
      <p style={{ fontWeight: "bold", marginTop: "1rem" }}>
        Your donation has qualified you for the following items:
      </p>
      <ul>
        <Bonus totalPrice={totalPrice} />
      </ul>
    </>
  );
};
export default Cart;
