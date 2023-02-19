


function Cart({ bonus, prevBird, total, remove}){

    let discount = ""
    
    let theBonus = []

    let sentence = ""

    let idArr = []

    function addName() {
    for(let i = 0; i < idArr.length; i++){
        for(let j = 0; j < idArr.length; j++){
        if(!idArr.length){
            idArr.push(prevBird)
            console.log(idArr)
            console.log(prevBird)
        } 
    }
}
    }
   
    function determineDiscount(){
        if(prevBird.length > 2){
            discount = "10%"
        } else if(prevBird.length <= 2){
        discount = "0%"
    }
    }

    function determineBonus() {
        if(total >= 100){
            sentence = "Your donation has qualified you for the following items. "
            theBonus = bonus[0]
            if (total >= 300){
            theBonus += ", "
            theBonus += bonus[1]
        }   if (total >= 500){
            theBonus += ", "
            theBonus += bonus[2]
        }   if (total >= 1000){
            theBonus += ", "
            theBonus += bonus[3]
        }
    }
    }

    function addLi() {
        if(total >= 100){
            return(
                <div>
                <p>{sentence}</p>
                <li>{theBonus}</li>
                </div>
            )
            
        }
    }

    determineBonus()
    determineDiscount()
    addName()

    let count = 0

    return (
        
        <div className="Cart">
            <h3>Cart</h3>
            <p>Discount: {discount}</p>
            <h4>Total: ${total}</h4>
                {prevBird.map((bird) => {
                    count++
                    return(
                    <div key={bird.id}>
                        <li>
                            {count}. {bird.name}: ${bird.amount}
                            <button onClick={() => remove(bird)}>Remove.</button>
                        </li>
                     </div>
                    )
                })}
                <br></br>
                {addLi()}
        </div>
    )
}


export default Cart