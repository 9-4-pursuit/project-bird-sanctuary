// I can complete the inputs in the checkout form.
// When I complete the form with valid input and click `Submit`, an alert tells me the purchase was successful.
// Alert text should include: `You have adopted birds. Thank you!`
// When I close the alert box, the cart component should fully reset (no birds, no discount, total = 0, no bonus items listed)

function Checkout() {
    const submitForm = (e) => {
        e.preventDefault()
        alert("You have adopted birds. Thank you!")
        document.querySelector("form").reset()
    }

    return (
        <aside className="Checkout">
            <form onSubmit={submitForm}>
                <label htmlFor="fName">First Name: </label>
                <input type="text" id="fName" />

                <label htmlFor="lName">Last Name: </label>
                <input type="text" id="lName" />

                <label htmlFor="email">Email: </label>
                <input type="email" id="email" />

                <label htmlFor="zip">Zipcode: </label>
                <input type="number" id="zip" />

                <button className="submit-button">Submit</button>
            </form>
        </aside>
    );
}


export default Checkout;