function Checkout({setBirds, setForm}) {


    const submitForm= (e) => {
        e.preventDefault();
        setBirds([]);
       setForm({})
        alert("You have adopted birds. Thank you!")

    };


    return (
        <div className="Checkout">
            <form onSubmit={submitForm}>
                <h1>Checkout</h1>
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" type='text' />

                    <label htmlFor="lastName">Last Name </label>
                    <input id="lastName" name="lastName" type='text' />

                    <label htmlFor="email">Email </label>
                    <input id="email" name="email" type='text' />

                    <label htmlFor="zipCode">Zip Code </label>
                    <input id="zipCode" name="zipCode" type='text' />
                    <input type ="submit" value="Submit" /> 
            </form>
        </div>
    )


}
export default Checkout;