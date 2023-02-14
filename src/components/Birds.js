
import BirdCard from "./BirdCard";
import birdData from "../data/birds";

export default function Birds(props) {

    //assign props that were passed down to a variable
    const cart = props.cart;
    const setCart = props.setCart;

    return (<div className="birds">
        {/* iterate through each bird and display the card */}
        {birdData.map((bird) => {
            //pass the bird object down as a prop, along with the carts state and set state function
            return (<BirdCard
                bird={bird}
                cart={cart}
                setCart={setCart}
                key={bird.id} />)
        })
        }

    </div>);
};