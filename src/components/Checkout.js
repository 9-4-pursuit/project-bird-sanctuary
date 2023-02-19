export default function Checkout(props) {

    const setCart = props.setCart;

    function submit() {
            
            alert("You have adopted birds. Thank you!");
            setCart([]);       
    };

    return (
        <>
      <div className="Checkout">
        <form>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" type="text"/>
          <label for="lastName">Last Name</label>
          <input id="lastName" type="text"/>
          <label for="email">Email</label>
          <input id="email" type="email"/>
          <label for="zipcode">Zip Code</label>
          <input id="zipcode" type="number" autoComplete="postal-code"/>
          <br></br>
          <input type="submit"></input>
        </form>
      </div>
      </>
    );
};