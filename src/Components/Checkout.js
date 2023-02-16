function Checkout({handleSubmit}) {
    return (
        <div className="form">
            <h2>Checkout</h2>
            <form className="Checkout">
                <label htmlFor="firstname">First Name</label>
                <input id="firstname" type="text"/>
                <label htmlFor="lastname">Last Name</label>
                <input id="lastname" type="text"/>
                <label htmlFor="email">Email</label>
                <input id="email" type="email"/>
                <label htmlFor="zipcode">Zip Code</label>
                <input id="zipcode" type="number"/>
                {/* <input onClick={handleSubmit} type="submit">Submit</input> */}
                <input onClick={handleSubmit} type="submit" value="Submit" ></input>
 
            </form>

        </div>
    )
}

export default Checkout