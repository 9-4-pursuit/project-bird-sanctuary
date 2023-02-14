
export default function Checkout({ cartContent, cartTotal }) {

    function handleSubmit() {
        alert("You have adopted birds.  Thank you!")
    }
    
    return (
        <div className="checkout">
            <h4>Checkout</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first">First Name</label>
                <input type="text" id="first" />
                <label htmlFor="last">Last Name</label>
                <input type="text" id="last" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <label htmlFor="zip-code">Zip-code</label>
                <input type="number" id="zipcode" /><br />
                <input type="submit" value="Submit" className="check-butt" />
            </form>
        </div>
    )
}