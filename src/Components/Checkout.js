import { useState } from "react";

function Checkout({ setCart }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [zipCode, setZipCode] = useState('');
    
    function handleSubmit(event) {
        event.preventDefault();
        alert('You have adopted birds. Thank you!')
        setFirstName('');
        setLastName('');
        setEmail('');
        setZipCode('');
        setCart([]);
    }
    
    return (
        <div className="Checkout">
            <h3>Checkout</h3>
            <form onSubmit={handleSubmit}>
                <label>First Name
                    <input 
                        type='text' 
                        id="first-name" 
                        value={firstName}
                        onChange={event => setFirstName(event.target.value)}
                    />
                </label>
                <label>Last Name
                    <input 
                        type='text' 
                        id="last-name" 
                        value={lastName}
                        onChange={event => setLastName(event.target.value)}
                    />
                </label>
                <label>Email
                    <input 
                        type='text' 
                        id="email" 
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </label>
                <label>Zip Code
                    <input 
                        type='text' 
                        id="zip-code" 
                        value={zipCode}
                        onChange={event => setZipCode(event.target.value)}
                    />
                </label>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Checkout;