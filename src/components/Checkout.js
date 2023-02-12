
export default function Checkout() {
    return(<div className="Checkout">
        <h2>Checkout</h2>
        {/* form for checking out */}
        <form>
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