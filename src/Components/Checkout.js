
import "../App.css";

function CheckOut (props ) {



//should I handleCheckOut here or in cart or in app?

 function handleCheckOut() {

 }


  return (
    <>
    <form className="Checkout">
    <h4>Checkout</h4>

    <fieldset>
          <label>
            <p> First Name </p>
            <input type="text" name="first-name" />
          </label>
    </fieldset>



    <fieldset>
          <label>
            <p> Last Name </p>
            <input type="text" name="last-name" />
          </label>
    </fieldset>

    <fieldset>
          <label>
            <p> Email </p>
            <input type="email" name="email" />
          </label>
     </fieldset>

     <fieldset>
          <label>
            <p> Zip Code </p>
            <input type="number" name="zip-code" />
          </label>
     </fieldset>


        <button
          className="submit"
          type="submit"
          content="Submit"
          onClick={() => {
            alert("You have adopted birds. Thank you!");
            //  setCart({
            //    birds: [],
            //    total: 0,
            //    discount: 0,
            //    bonuses: [],
            //  });
          }}
        >
          Submit
        </button>
        <p className="success-alert" id="success-alert"></p>
      


</form>
</>
    )
}






export default CheckOut

/* 
need form with first name, last name, email, submit button

Move the submit button I had in Cart here, to Checkout.

*/