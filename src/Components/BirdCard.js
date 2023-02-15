import React from 'react'
import App from '../App';
function BirdCard (props) {

    return (
        <div className="Bird-container">

            <h1>{props.name}</h1>
            <img src={props.image} alt=""></img>
            <p>Price ${props.amount}.00</p>
            <button onClick={() => props.adoptMe(props.bird)}>Adopt</button>
        </div>
    )
}

export default BirdCard;