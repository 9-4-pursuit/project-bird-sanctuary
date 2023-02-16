export default function checkout(props) {

    return (
        <form>
            <div className="Checkout">
                <h1>Checkout</h1>
                <label>
                    <p>First Name</p>
                    <input type="text"></input>
                </label>
                <label>
                    <p>Last Name</p>
                    <input type="text"></input>
                </label>
                <label>
                    <p>Email</p>
                    <input type="text"></input>
                </label>
                <label>
                    <p>Zip Code</p>
                    <input></input>
                </label>
                <input type="submit" onClick={props.submit} />
            </div>
        </form>
    )
}