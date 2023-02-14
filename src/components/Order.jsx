import Cart from "./Cart";
import CartForm from "./CartForm";
import Title from "./Title";

import { useState, useEffect } from "react";

const Order = ({ birds, setBirds }) => {
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
