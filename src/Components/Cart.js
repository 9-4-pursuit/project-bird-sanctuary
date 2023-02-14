

function Cart({ cartItems, defaultStatus, bonusItem, discount}) {
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
            <h4>Discount: {discount}%</h4>
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
                    {
                        bonusItem.map((item)=>{
                            return(
                                <li>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default Cart;