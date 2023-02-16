import Cart from "./Cart";
import CartForm from "./CartForm";
import Title from "./Title";

const Order = () => {
  return (
    <section className="section">
      <Title title="your" subTitle="order" />
      <div className="order-section">
        <div className="section">
          <Cart />
          <CartForm />
        </div>
      </div>
    </section>
  );
};
export default Order;
