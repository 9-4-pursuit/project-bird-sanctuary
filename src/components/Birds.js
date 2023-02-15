
import birdData from "../data/birds";

export default function Birds(props) {

    //assign props that were passed down to a variable
    const cart = props.cart;
    const setCart = props.setCart;

    return (<div className="birds">
        {/* iterate through each bird and display the card */}
        {birdData.map((bird) => {
            //create the bird card with necessary information
            return (<div className="card">
            <h5>{bird.name}</h5>
            <p>Price: ${bird.amount}</p>
            <img
                src={bird.img}
                alt={bird.name}
                width="150px"></img>
            {/* add bird to cart on button click */}
            <button
                className="adopt"
                onClick={() => setCart([...cart, bird])} >Adopt</button>
        </div>);
        })
        }

    </div>);
};