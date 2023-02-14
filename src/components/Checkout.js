
function Checkout () {
    return (
        <div>
            <form className="form">
                <label htmlFor="firstname">First Name</label>
                <input type="text"></input>
                <label htmlFor="lastname">Last Name</label>
                <input type="text"></input>      
                <label htmlFor="email">Email</label>
                <input type="email"></input>  
                <label htmlFor="zipcode">Zip Code</label>
                <input type="number"></input>          
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Checkout
