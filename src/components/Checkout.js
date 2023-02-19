


function Checkout({ submit }){


    return (
        <div className="Checkout"> 
            <h3>Checkout</h3>
            <form>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" />
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text"/>
                <label htmlFor="email">Email</label>
                <input id="email" type="email"/>
                <label htmlFor="zipCode">Zip Code</label>
                <input id="zipCode" type="number"/>
                <input type="submit" onClick={submit}/>
            </form>
        </div>
    )


}


export default Checkout