import birdData from "../data/birds";
import bonusItems from "../data/bonusItems";

//The cart has a class name of `Cart`
//When I click on a bird card's adopt button
//its name appears in the cart as an `<ol>` list item.
// The total shows up as an `<h4>` element inside the cart
// When I click on an additional item, the total cost is updated and additional bird name(s) is added as a list item to the unordered list
// When there are less than 3 birds in the cart there is a 0% discount
// When there are 3 or more birds in the cart there is a 10% discount
//let elem = birds.elem((a, b) => {return b.amount + a}, 0)

function Cart() {



    return (
        <div className="Cart">
            <div key="" className="birdCart">
                <h2>Cart</h2>
                <h4>Discount: 0%</h4>
                <p>Total: $</p>
                <ol>bird.name</ol>
                <h4>Text Here</h4>

                {/* <Cart/> */}
            </div>
        </div>
    )
}


export default Cart;