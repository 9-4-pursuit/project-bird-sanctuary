
export default function BirdCard(props) {

    //assign the props to variables
    const bird = props.bird;
    const cart = props.cart;
    const setCart = props.setCart;

    //display the bird information
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
};