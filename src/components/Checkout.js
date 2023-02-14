import React from 'react';

function Checkout(props) {
    
    function handleSubmit() {
        alert("You have adopted birds. Thank you!")
    }
    return (
        <form onSubmit={handleSubmit} class="Checkout" >
              <h3>Checkout</h3>
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
              />
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
              />
            <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
              />
              <label htmlFor="zip">Zip Code</label>
              <input
                type="text"
                pattern="[0-9]{5}"
                id="zip"
              />
              <input type="submit" />
            </form>
    );
}

export default Checkout;