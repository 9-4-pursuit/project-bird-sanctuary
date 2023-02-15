import React from 'react'
function Checkout () {


    return (
        <div className="CheckOutItems">
        <form>
          <label htmlFor="firstname">First Name</label>
          <input type="text"/>
          <label htmlFor="lastname">Last Name</label>
          <input type="text"/>
          <label htmlFor="email">Email</label>
          <input type="email"/>
          <label htmlFor="zipcode">Zip Code</label>
          <input type="number" autoComplete="postal-code"/>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>

    )
}

export default Checkout;