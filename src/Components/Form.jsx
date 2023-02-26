

function Form({ resetAll }) {



    return (

        <>
            <h2>Checkout</h2>
            <form action="submit"
                onSubmit={resetAll}
                className="Checkout"
            >

                <label>
                    First Name
                    <br />
                    <input type="text" />
                </label>
                <label>
                    Last Name
                    <br />
                    <input type="text" />
                </label>
                <label>
                    Email
                    <br />
                    <input type="text" />
                </label>
                <label>
                    Zip Code
                    <br />
                    <input type="text" />
                </label>

                <input type="submit" />
            </form>
        </>

    )
}

export default Form