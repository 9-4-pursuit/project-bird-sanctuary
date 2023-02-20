import React, {useState} from "react";

function Cart3 () {
const [cart3, setCart3] = useState ([]);
const addToCart3 = (e) => {
    setCart3([...cart3, el])
}
const cartItems3 = cart3.map((el) => (
    <div key={el.id}>
        {`${el.name}: $${el.price}`}
        <input type="submit"  value="remove" onClick={() => removeFromCart(el)} />
        </div>
))

const removeFromCart = (el) => {
    let hardCopy = [...cart3];
    hardCopy=hardCopy.filter((cartItem) => cartItem.id !== el.id);
    e.setCart3(hardCopy);
};




return (
<div>


{listItems}
{cartItems3}
Total: ${cartTotal}
</div>

)

}

export default Cart3