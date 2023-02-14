import birdData from "../data/birds";


function Card() {
    return (
        <div>
            <p>{birdData[0].name}</p>
            <img src={birdData[0].img} width='200' height='200'></img>
            <p>${birdData[0].amount}</p>
            <button>Adopt</button>
        </div>
    )
}

export default Card;