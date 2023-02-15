

function Checkout({ submitForm, form, setForm }) {
    function handleTextChange(event) {
        event.preventDefault()
        setForm(event.target.value)
    }

    return (
        <div className="Checkout">
            <form onSubmit={submitForm}>
                <label>First Name
                    <input onChange={handleTextChange} value={form.firstName} type="text" name="firstName" id="firstName" />
                </label>
                <label>Last Name
                    <input onChange={handleTextChange} value={form.lastName} type="text" />
                </label>
                <label>Email
                    <input onChange={handleTextChange} value={form.email} type="email" />
                </label>
                <label>Zip Code
                    <input onChange={handleTextChange} value={form.zipCode} type="number" />
                </label>
                <input type="submit" value="SUBMIT" />

            </form>
        </div>
    )
}

export default Checkout;