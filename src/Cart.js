import CartItem from './CartItem';
export default function Cart({ cart, cartDeleteThisBird, total, discount, setDiscount, bonusItems, setBonus, bonuses, runOnce, setRunOnce}) {
    //discount 10% 3 or more birds
    //series of bonus items for increasing cart totals
    //form checkout cart, on checkout resets cart
    // setDiscount 

    /*
    The bonus items are added as list items in an <ul> list item as follows:
1 bonus (first array item) is given if the total is between 100 and 300
2 bonuses (first and second array items) are given if the total is between 300 and 500
3 bonuses are given if the total is between 500 and 1000
4 bonuses are given if the total is more than 1000
    */

    // if (runOnce) {
    //     // let hamsterCount = 0;
    //     setRunOnce(false);
    //     // hamsterCount++;
    //     // console.log(hamsterCount);

    //     if (cart.length >= 3) {
    //         setDiscount(10);
    //     } else {
    //         setDiscount(0);
    //     }
    //     if (total < 100) {
    //         setBonus(previous => []);
    //     }
    //     if (total >= 100 && total <= 300) {
    //         setBonus(previous => bonusItems.slice(0, 1));
    //     }
    //     else if (total > 300 && total <= 500) {
    //         setBonus(previous => bonusItems.slice(0, 2));
    //     }
    //     else if (total > 500 && total <= 1000) {
    //         setBonus(previous => bonusItems.slice(0, 3));
    //     }
    //     else if (total > 1000) {
    //         setBonus(previous => bonusItems.slice(0, 4));
    //     }
    // }


    return (
        <div className="Cart">
            <h3> Discount: {discount}%</h3>
            <h4>Total: ${total}</h4>
            <ol>
                {cart.map((bird, index) => {
                    return <CartItem bird={bird} key={index} cartDeleteThisBird={cartDeleteThisBird} cartIndex={index} cart={cart} total={total} />
                })}
            </ol>
            <p>Your donations have qualified you for the following items!</p>
            <ul>
                {bonuses.map((bonusItem, index) => {
                    return <li key={index}>{bonusItem}</li>
                })}
            </ul>
        </div>
    );
}