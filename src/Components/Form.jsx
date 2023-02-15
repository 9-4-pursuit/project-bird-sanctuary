function Checkout({setBirds, setForm}) {

// resets form while also adding an alert and keeps the page from constantly refreshing 
    const submitForm= (event) => {
        event.preventDefault()
        setBirds([])
        setForm({})
        alert("You have adopted birds. Thank you!")
    };


    return (
        <div style={{backgroundColor: "beige"}} className="Checkout">
            <form onSubmit={submitForm}>
                <h1 style={{backgroundColor: "lightblue"}}>Checkout</h1>
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" type='text' />

                    <label htmlFor="lastName">Last Name </label>
                    <input id="lastName" name="lastName" type='text' />

                    <label htmlFor="email">Email </label>
                    <input id="email" name="email" type='text' />

                    <label htmlFor="zipCode">Zip Code </label>
                    <input id="zipCode" name="zipCode" type='text' />
                    <br></br>
                    <input type ="submit" value="Submit" /> 
            </form>
        </div>
    )


}
export default Checkout;