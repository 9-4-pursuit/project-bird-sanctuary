import { React, useState } from 'react';

function Checkout({ setCartData }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [zipCode, setZipCode] = useState("");

    const handleFirstName = (cart) => {
        const { value } = cart.target;
        setFirstName(value);
    }

    const handleLastName = (cart) => {
        const { value } = cart.target;
        setLastName(value);
    }

    const handleEmail = (cart) => {
        const { value } = cart.target;
        setEmail(value);
    }

    const handleZipCode = (cart) => {
        const { value } = cart.target;
        setZipCode(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('You have adopted birds. Thank you!');
        setCartData([]);
        setFirstName("");
        setLastName("");
        setEmail("");
        setZipCode("");
    }

    return (
        <div className='Checkout form'>
            <form onSubmit={handleSubmit}>
                <h3>Checkout</h3>
                <label >First Name <br />
                    <input type="text" onChange={handleFirstName} value={firstName} required /></label>
                <label >Last Name <br />
                    <input type="text" onChange={handleLastName} value={lastName} required /></label>
                <label >Email <br />
                    <input type="email" onChange={handleEmail} value={email} required /></label>
                <label >Zip Code <br />
                    <input type="number" onChange={handleZipCode} value={zipCode} required /></label>

                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    )
}

export default Checkout