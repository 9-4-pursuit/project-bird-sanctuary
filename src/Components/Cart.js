import bonusItems from "../data/bonusItems"

function Cart({ cartItems, defaultStatus, discount}) {
    // const [total, setTotal] = useState(0)

    const total = cartItems.length > 0 ? cartItems.reduce((curr, acc) =>{
        return parseInt(acc.amount) + curr
    }, 0) : []
    
    // const totalArr = 
    // console.log(cartItems)
    
    // function settingTotal(){
    //     const totalArr = cartItems.map((item)=>{
    //         return item = item.amount
    //     })
    //     const sum = totalArr.reduce(
    //         (acc, curr) => parseInt(acc) + parseInt(curr),
    //         (0)
    //         );
    //         setTotal(sum)
    //         console.log(total)
    //     }


    return (
        <div className="Cart">
            <h3>Cart</h3>
            <h5>Discount: {discount}%</h5>
            <h4>Total: ${total}</h4>
            <ol>

                {
                    cartItems.map((item) => {
                        return (
                            <li>
                                {item.name}: ${item.amount}
                            </li>
                        )
                    })
                }
            </ol>
            <div style={defaultStatus ? { display: "none" } : { display: "block" }}>
                    <h6>Your donations have qualified you for the following Items:</h6>
                <ul>
                {total >= 100 ? <li>{bonusItems[0]}</li> : "" }
                {total >= 300 ? <li>{bonusItems[1]}</li> : "" }
                {total >= 500 ? <li>{bonusItems[2]}</li> : "" }
                {total >= 1000 ? <li>{bonusItems[3]}</li> : "" }
                </ul>
            </div>
            
        </div>
    )
}

export default Cart;