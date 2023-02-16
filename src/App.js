import { useState } from "react";
import birdData from './data/birds'
import BirdCards from "./Components/BirdCards";
import Cart from './Components/Cart'
import Checkout from "./Components/Checkout";
import './App.css'
import bonusItems from "./data/bonusItems"


function App () {
  const[birds, setBird] = useState(birdData)
  const[cart, setCart] = useState([])
  const[cartTotal, setCartTotal] = useState(0)
  const[discount, setDiscount] = useState(0)
  const[bonus, setBonus] = useState([])
  // state that handles putting the bird in the cart


  function handleAdopt(bird) {

    if (cart.includes(bird)) {
      bird = {...bird, id: parseInt(`${bird.id}${cart.length}`)}
    }

    setCart([...cart, bird])
    setCartTotal(cartTotal + bird.amount)
    if(cart.length + 1 >= 3) {
      setDiscount(10)
    }
    // we need to update the cartTotal 
    handleBonus(cartTotal + bird.amount) 
  }

  function handleDelete(bird) {
    const deleteItem = cart.filter((item) => bird.id !== item.id)
    setCart(deleteItem)
    //removes amount of bird from the totL
    setCartTotal(cartTotal - bird.amount)
    // deletes the linpm test
    handleBonus(cartTotal - bird.amount)
    if(cart.length < 4){
      setDiscount(0)
    }
  }

  function handleBonus(cartTotal) {

    console.log([bonusItems[0],bonusItems[1]])

    if(cartTotal >= 100 && cartTotal < 300){
      setBonus([bonusItems[0]])
    }else if(cartTotal >= 300 && cartTotal < 500) {
      // setBonus([bonusItems[0,1]])
      
      setBonus([bonusItems[0],bonusItems[1]])

    }else if(cartTotal >= 500 && cartTotal < 1000){
      setBonus([bonusItems[0],bonusItems[1],bonusItems[2]])

    }else if(cartTotal >= 1000) {
      setBonus(bonusItems)
    }else {
      setBonus([])
    }
    
  }

  function handleSubmit(event) {
    event.preventDefault()
    setCart([])
    setDiscount(0)
    setCartTotal(0)
    setBonus([])
    alert("You have adopted birds. Thank you!")

  }











  //set state to index of bonusitems



  

  //if cart total 100 to 300 li is bonusItems[0]
  // function handleDiscount(cart) {
     
  // }

  // for delete maybe have a function that sets all defaults back to the original state
  // setCart([]) setDiscount(0) setCartTotal(0)



  return (
    <div className="app">
      {/* below is the layout of all the components and how they will be displayed */}
      <Cart  key="cart" 

      cart={cart}
      bird={birds}
      handleDelete={handleDelete}
      // handleAdopt={handleAdopt}
      cartTotal={cartTotal}
      discount={discount}
      bonus={bonus}
       />

      {/* <BirdCards name='name' price="amount" /> */}
      <BirdCards 
      birdData={birdData} 
      // passing the function  handleAdopt & birdData into the component BirdCards
      handleAdopt={handleAdopt}/>

      <Checkout
      handleSubmit={handleSubmit} />

    </div>
  );
};

export default App;
