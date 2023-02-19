import Birds from "./components/Birds";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import "./App.css";
import { useState } from "react";

export default function App() {

    const [cart, setCart] = useState([]);

    return (
        <>
            <Birds
                cart={cart}
                setCart={setCart} />
            <Cart
                cart={cart}
                setCart={setCart} />
            <Checkout
                setCart={setCart} />
        </>
    );
};

