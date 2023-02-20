


function Checkout() {
    
    function handleSubmit(event) {
        event.preventDefault();
        alert('You have adopted birds. Thank you!')
    }
    
    return (
        <div className="checkout">
            <h3>Checkout</h3>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type='text' />
                <label>Last Name</label>
                <input type='text' />
                <label>Email</label>
                <input type='text' />
                <label>Zip Code</label>
                <input type='text' />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Checkout;