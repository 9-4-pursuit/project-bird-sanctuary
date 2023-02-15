import Card from "./Components/Card";
import birdData from "./data/birds"
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import { useState } from "react";


function App() {

  const [cartItems, setCartItems] = useState([])
  const [defaultStatus, toggleStatus] = useState(true)
  const [discount, setDiscount] = useState(0)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: ""
  })


  const birdArr = [...birdData]
  
  function addingToCart(birdID) {

    const index = birdArr.findIndex((bird) => birdID === bird.id)

    setCartItems([birdArr[index], ...cartItems])

    if (cartItems.length >= 3) {
      setDiscount(10)
    } else {
      setDiscount(0)
    }

    toggleStatus(false)
  }

  function removeBird(index) {
    const filteredBirdArray = cartItems.filter((item, indexx) => index !== indexx);
    setCartItems(filteredBirdArray);
  }

  function submitForm() {
    alert('You have adopted birds. Thank you!')
  }



  return (
    <div className="app">
      <aside>
        <Cart
          cartItems={cartItems}
          defaultStatus={defaultStatus}
          discount={discount}
          removeBird={removeBird}
        />
        <Checkout submitForm={submitForm} form={form} setForm={setForm} />
      </aside>
      <main>
        <Card birdData={birdData} addingToCart={addingToCart} />

      </main>
    </div>
  );
};

export default App;
