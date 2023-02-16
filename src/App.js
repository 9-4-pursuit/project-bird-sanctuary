import React, { useState } from 'react'
import './App.css';
import BirdCards from './Components/BirdCards';
import birdData from "./data/birds";
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import bonusItems from './data/bonusItems';
function App() {
  const [bonus, setBonus] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  // const [checkoutForm, setCheckOutForm] = (["firstname", "lastname", "email", "creditCard", "zipcode"]);


  function handleSubmit(event){
    event.preventDefault();
    alert("You have adopted birds. Thank you!");
    cartReset();
  }
 
 

  function cartReset(){
  setTotal(0);
  setCart([]);
  setDiscount(0);
  setBonus([]);
 }

  // const handleCheckoutForm = (event) => {
  //   setCheckOutForm(checkoutForm => ({ ...checkoutForm, [event.target.name] : event.target.value}));
  // }

  const handleAddCart = (bird) => {
    if(cart.includes(bird)){
      bird = {...bird, id: parseInt(`${bird.id}${cart.length}`)};
    }
    setCart([...cart, bird])
    console.log(cart);
    setTotal(total + bird.amount)
   setBonus([...bonus, bonusItems])
   if (cart.length + 1 >= 3) {
    setDiscount(10)
   } 
   }
  
  
function handleDelete(bird) {
  const newCart = cart.filter((cart) => bird.id !== cart.id);
  setCart(newCart);
  setTotal(total - bird.amount)
  console.log(newCart)
  if (cart.length + 1 < 3) {
    setDiscount(0)
   } 
}
  return (
    <main className='App'>
      
      <Cart 
      cart={cart} 
      discount={discount} 
      total={total} 
      bonus={bonusItems}
      handleDelete={handleDelete}
      />
      
      <Checkout 
      handleSubmit={handleSubmit} 
      />
    { 
    birdData.map((bird) => {
        return <div key={bird.id} className='card'>
          <BirdCards 
          name={bird.name} 
          amount={bird.amount} 
          img={bird.img} 
          handleAddCart={handleAddCart}
          bird={bird}
          />
        </div>
      })
    }
    </main>
  );
}

export default App;
