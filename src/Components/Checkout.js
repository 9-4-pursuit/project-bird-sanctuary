import React from "react";
function Checkout() {
  return (
    <div className="Checkout">
      <form>
        <label htmlFor="firstname">
          First Name <br></br>
          <input type="text" />
        </label>
        <label htmlFor="lastname">
          Last Name <br></br>
          <input type="text" />
        </label>
        <label htmlFor="email">
          Email <br></br>
          <input type="email" />
        </label>
        <label htmlFor="zipcode">
          Zip Code <br></br>
          <input type="number" autoComplete="postal-code" />
        </label>
        <br></br>
        <input className="submit" type="submit" />
      </form>
    </div>
  );
}

export default Checkout;
