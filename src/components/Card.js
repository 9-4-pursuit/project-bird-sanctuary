import birdData from "../data/birds";

//Each bird card displays the name, image, and amount (price)
//Each bird card has a `class` name of `card`
//Each bird card has an `Adopt` button
//The button text should be: `Adopt`

function Card({ birds, setBirds, handleCart }) { //({birdData, handleCart})
    // const [ birds, setBirds ] = useState([]);
    function birdCart() {
        setBirds([...birds, birdData])
    }

    return (
        <div className="card">
            <ul>
                {birdData.map((bird) => {

                return (
                    <div className="birdCard">
                        <li key={bird.id}>
                        <h3>{bird.name}</h3>
                        <p>Price: ${bird.amount}</p>
                        <img src={bird.img} width={250} height={200} alt="bird-img" className="img"></img>
                        <button className="birds-button" onClick={() => handleCart(bird)}>
                        Adopt
                        </button>
                        </li>
                    </div>
                );
            })}
            </ul>
        </div>
    );
}

export default Card;