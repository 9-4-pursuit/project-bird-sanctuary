import React from 'react';

function Cart({ cartData, bonusData, setCartData }) {

    const data = cartData.map(({ name, amount }, i) => {
        return (
            <li key={i}>{name} ${amount}
                <button key={i} onClick={() => setCartData([...cartData.filter((item, i) => i)])}>x</button>
            </li>)
    });
    let total = cartData.map(({ amount }) => amount).reduce((a, b) => a + b, 0);
    const discount = cartData.length > 2 ? 10 : 0;
    total = discount ? total -= total * 0.1 : total;

    const bonus = () => {
        if (total >= 100 && total < 300) {
            return <li>{bonusData[0]}</li>
        } else if (total >= 1000) {
            return (
                <>
                    <li>{bonusData[0]}</li>
                    <li>{bonusData[1]}</li>
                    <li>{bonusData[2]}</li>
                    <li>{bonusData[3]}</li>
                </>
            )
        } else if (total >= 500) {
            return (
                <>
                    <li>{bonusData[0]}</li>
                    <li>{bonusData[1]}</li>
                    <li>{bonusData[2]}</li>
                </>
            )
        } else if (total >= 300) {
            return (<>
                <li>{bonusData[0]}</li>
                <li>{bonusData[1]}</li>
            </>
            )
        }
    }

    return (
        <div className='Cart'>
            <h3> Cart</h3>
            <h3> Discount: {discount}%</h3>
            <h4> Total: ${total}</h4>
            <ol>{data}</ol>
            <p>Your adoption has qualified you for the following bonus!</p>
            <ul>{bonus()}</ul>
        </div>
    )
}

export default Cart