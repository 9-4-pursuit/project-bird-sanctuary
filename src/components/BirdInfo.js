

function BirdInfo (props) {

    return (
        <div>
            <div className="card">
             <div className="container">
                <h3>{props.birdCardDisplay.name}</h3>
                <p>Price: ${props.birdCardDisplay.amount}</p>
                <img src={props.birdCardDisplay.img} />
            </div>

            <div className="birds">
                <button onClick={() => props.updateCart(props.birdCardDisplay)}>ADOPT</button>
            </div>

            </div>
        </div> //CARD CLOSING TAG

        
    )
}

export default BirdInfo