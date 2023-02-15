import birdData from "../data/birds";
import { useState } from "react";

//Each bird card displays the name, image, and amount (price)
//Each bird card has a `class` name of `card`
//Each bird card has an `Adopt` button
//The button text should be: `Adopt`

function Card({ birds, setBirds }) {
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
                        <button className="adopt-button" onClick={() => birdCart(birdData)} >
                        Adopt
                        </button>
                        </li>
                    </div>
                );
            })}
            </ul>
        </div>
        // <div className='card'>
        // {birdData.map((bird) => {
        
        //     return <div className='birdCard'>
        //      <h3>{bird.name}</h3>
        //      <h3>${bird.amount}</h3>
        //      <img src={bird.img} width={350} height={300} alt="bird-img" className="img"></img>
        //      <button>Adopt</button>
             
        //      </div>
        // })}
        // </div>
    )
}

export default Card;