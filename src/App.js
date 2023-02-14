import Birds from "./components/Birds";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import "./App.css";
import { useState } from "react";

function App() {

    //create a state for the cart
    const [cart, setCart] = useState([]);

    return (
        <main>
            {/* send the carts state and set state function down as props */}
            <Birds
                cart={cart}
                setCart={setCart} />

            <Cart
                cart={cart}
                setCart={setCart} />

            <Checkout
                setCart={setCart} />
        </main>
    );
};

export default App;
