import "../App.css";
function CheckOut (props ) {


//should I handleCheckOut here or in cart or in app?

 function handleCheckOut() {

 }


  return (
    <div className="none">
    <form className="Checkout">
    <h4>Checkout</h4>

    <fieldset>
          <label>
            <p> First Name </p>
            <input type="text" className="first-name" />
          </label>
    </fieldset>
    <fieldset>
          <label>
            <p> Last Name </p>
            <input type="text" className="last-name" />
          </label>
    </fieldset>
    <fieldset>
          <label>
            <p> Email </p>
            <input type="email" className="email" />
          </label>
     </fieldset>

     <fieldset>
          <label>
            <p> Zip Code </p>
            <input type="number" className="zip-code" />
          </label>
     </fieldset>


        <input
          className="flair"
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
        />

        <p className="success-alert" id="success-alert"></p>
</form>
</div>
    )
}



export default CheckOut

/* 
need form with first name, last name, email, submit button

Move the submit button I had in Cart here, to Checkout.

*/