import Birds from "./components/Birds";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";

import birdData from "./data/birds";

import "./App.css"
import { useState } from "react";



function App () {

    //create a state for the cart
    const [cart, setCart] = useState([]);
    

    return (
        <main>
            {/* send the carts, total, and discount state and set state function down as props to birds and cart */}
            <Birds birdData={birdData} cart={cart} setCart={setCart} />

            <Cart cart={cart} setCart={setCart} />

            <Checkout />
        </main>
    );
};

export default App;
