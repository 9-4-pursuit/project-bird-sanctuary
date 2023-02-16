// when destructuring props 
function Checkout ({setCart, setCartTotal, setBonus, setDiscount,  handleSubmit}) {
    return (
      <>
      <div >
    <form className="Checkout">
        <label htmlFor="firstname">First Name</label>
        <input id="firstname" type="text"/>
        <label htmlFor="lastname">Last Name</label>
        <input id="lastname" type="text"/>
        <label htmlFor="email">Email</label>
        <input id="email" type="email"/>
        <label htmlFor="zipcode">Zip Code</label>
        <input id="zipcode" type="number"/>
        <br></br>
        <input onClick={handleSubmit}  className="button" type="submit" value="Submit"/>
    </form>
      </div>
      </>
    );
  }
  
export default Checkout;
