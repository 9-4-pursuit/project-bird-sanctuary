import Cart from "./Cart";
import CartForm from "./CartForm";
import Title from "./Title";

const Order = ({ birds, setBirds }) => {
  let totalPrice = birds.reduce((accu, { amount }) => accu + amount, 0);
  if (birds.length >= 3) {
    totalPrice -= totalPrice * 0.1;
  }

  function removeItem(id) {
    setBirds(birds.filter((item) => item.id !== id));
  }

  return (
    <section className="section">
      <Title title="your" subTitle="order" />
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <div className="section">
          <Cart birds={birds} removeItem={removeItem} totalPrice={totalPrice} />

          <CartForm birds={birds} setBirds={setBirds} />
        </div>
      </div>
    </section>
  );
};
export default Order;
