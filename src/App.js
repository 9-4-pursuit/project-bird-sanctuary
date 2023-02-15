import Card from "./Components/Card";
import birdData from "./data/birds"
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import { useState } from "react";
// import bonusItems from "./data/bonusItems";


function App() {

  const [cartItems, setCartItems] = useState([])
  const [defaultStatus, toggleStatus] = useState(true)
  // const [bonusIndex, setBonusIndex] = useState(0)
  // const [bonusItem, setBonusItem] = useState([])
  // const [total, setTotal] = useState(0)
  // const [totalArr, setTotalArr] = useState([])
  const [discount, setDiscount] = useState(0)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: ""
  })

  // let cartItems = []
  // let itemName;

  // let totalArr = []

  // function handleTextChange(event) { 
  //   setForm(event.target.value)
  // }

  const birdArr = [...birdData]
  function addingToCart(birdID) {
    
    const index = birdArr.findIndex((bird) => birdID === bird.id)
    // const bonusArr = [...bonusItems]

    // setBonusIndex(bonusIndex + 1)

    setCartItems([birdArr[index], ...cartItems])
    // cartItems.push(birdArr[index])
    // setCartItem(birdArr[index])

    // setBonusItem([...bonusItem, bonusArr)
    // settingTotal()

    if (cartItems.length >= 3) {
      setDiscount(10)
    } else {
      setDiscount(0)
    }
    // console.log(cartItems)

    toggleStatus(false)
  }

  function removeBird(index) {
    // const index = cartItems.findIndex((bird) => birdID === bird.id)
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
          // bonusItem={bonusItem} 
          // total={total} 
          discount={discount}
        // settingTotal={settingTotal}
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
