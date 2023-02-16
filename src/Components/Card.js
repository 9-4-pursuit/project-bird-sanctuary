

function Card({bird, adoptBird}) {

    const { img, name, amount, id } = bird;

    return (
        <div className="card birds" >
            <h5>{name}</h5>
            <p>Price ${amount}</p>
            <img src={img} alt={id} width='200' height='200'></img>
            <button onClick={() => adoptBird(bird)} >Adopt</button>
        </div>
    )
}

export default Card;