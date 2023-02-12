import Checkout from "./Checkout"

export default function Cart(props) {
    return (
        <>
            <div className="cart">
                <h4>Cart</h4>
                <p>Discount: {}%</p>
                <h4>Total: ${props.cartTotal}</h4>
                <ol></ol>

            </div>
            <Checkout />
        </>
    )
}