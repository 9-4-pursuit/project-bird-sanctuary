


function Checkout ({handleSubmit}) {
    return (
        <div >
            <form className="Checkout" >
                <label htmlFor="firstname">First Name</label>
                <input type="text"/>
                <label htmlFor="lastname">Last Name</label>
                <input type="text"/>
                <label htmlFor="email">Email</label>
                <input type="email"/>
                <label htmlFor="zipcode">Zip Code</label>
                <input type="text" autoComplete="postal-code"/>
                <button type="submit" onClick={handleSubmit} >Submit</button> 
            </form>
        </div>
    )
}

export default Checkout;