
export default function Checkout(props) {

    //get the set cart function
    const setCart = props.setCart;

    //function for form submit
    function checkoutSubmit(event){
        event.preventDefault();

        alert("You have adopted birds. Thank you!");

        //empty the cart
        setCart([])

        //clear the fields
        event.target.firstname.value = "";
        event.target.lastname.value = "";
        event.target.email.value = "";
        event.target.zip.value = "";
    }


    return(<div className="Checkout">
        <h2>Checkout</h2>
        {/* form for checking out */}
        <form onSubmit={(event) => checkoutSubmit(event)}>
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" name="firstname" type="text" ></input>

            <label htmlFor="lastname">Last Name</label>
            <input id="lastname" name="lastname" type="text" ></input>

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="text" ></input>

            <label htmlFor="zip">Zip Code</label>
            <input id="zip" name="zip" type="number" ></input>

            <input type="submit"/>
        </form>
        
    </div>)
}