


function Checkout ({handleSubmit}) {
    return (
        <div  >
            <form className="Checkout" >
                <label htmlFor="firstName">First Name</label>
                <input id ="firstName" type="text"/>
                <label htmlFor="lastName">Last Name</label>
                <input id ="lastName" type="text"/>
                <label htmlFor="email">Email</label>
                <input id="email" type="email"/>
                <label htmlFor="zipcode">Zip Code</label>
                <input id="zipcode" type="text" autoComplete="postal-code"/>
                <input type="submit" onClick={handleSubmit} ></input> 
            </form>
        </div>
    )
}

export default Checkout;