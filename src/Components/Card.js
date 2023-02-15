
function Card(props) {
    return (
        <div>
            <p>{props.birdInfo.name}</p>
            <img src={props.birdInfo.img} width='200' height='200'></img>
            <p>${props.birdInfo.amount}</p>
            <button>Adopt</button>
        </div>
    )
}

export default Card;