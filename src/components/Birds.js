
import BirdCard from "./BirdCard"

export default function Birds(props) {

    //assign props that were passed down to a variable
    const birdData = props.birdData;
    const cart = props.cart;
    const setCart= props.setCart;



    return(<div className="birds">
        {/* iterate through each bird and display the card */}
        {birdData.map((bird) => {
            //pass the bird object down as a prop, along with the state and set state function
            return(<BirdCard bird={bird} cart={cart} setCart={setCart} key={bird.id}/>)
            })
        }
        
    </div>)
}