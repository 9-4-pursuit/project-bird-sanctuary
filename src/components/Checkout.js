
function Checkout () {
    return (
      <>
      <div >
    <form className="form">
        <label htmlFor="firstname">First Name</label>
        <input type="text"/>
        <label htmlFor="lastname">Last Name</label>
        <input type="text"/>
        <label htmlFor="email">Email</label>
        <input type="email"/>
        <label htmlFor="zipcode">Zip Code</label>
        <input type="number"/>
        <br></br>
        <button type="submit">Submit</button>
    </form>
      </div>
      </>
    );
  };
  
export default Checkout;
