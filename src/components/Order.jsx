import { useContext, useState, useEffect } from "react";
import Cart from "./Cart";
import CartForm from "./CartForm";
import Title from "./Title";
import { Birds } from "../Context";

const Order = () => {
  const { birds, setBirds } = useContext(Birds);

  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    setTotalPrice(birds.reduce((accu, { amount }) => accu + Number(amount), 0));
  }, [birds]);

  function removeItem(id) {
    setBirds(birds.filter((item) => item.id !== id));
  }

  return (
    <section className="section">
      <Title title="your" subTitle="order" />
      <div className="order-section">
        <div className="section">
          <Cart removeItem={removeItem} totalPrice={totalPrice} />
          <CartForm />
        </div>
      </div>
    </section>
  );
};
export default Order;
