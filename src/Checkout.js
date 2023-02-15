export default function Checkout({formSubmission}){
    // complete inputs in the checkout form
    //when complete form with valid input and click submit, alert states purchase successful
    //alert text "You have adopted birds. Thank you!"
    //on closing alert, cart component fully reset no birds, no discount, no total, no bonus
    return(
        <>
        <form onSubmit={formSubmission} className="Checkout">
        <h3>Checkout</h3>
        <label>First Name
            <input type="text" id="firstName" />
        </label>
        <label>Last Name
            <input type="text" id="firstName" />
        </label>
        <label>Email
            <input type="email" id="firstName" />
        </label>
        <label>Zip Code
            <input type="number" id="firstName" />
        </label>
        <input type="submit" />
        </form>
        </>
    );
}