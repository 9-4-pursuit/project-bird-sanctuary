
export default function BirdCard(props) {

    //assign the props to variables
    const bird = props.bird;
    const cart = props.cart;
    const setCart = props.setCart;

    //create a function that adds the bird to the cart
    function adoptBird(){
        //check if the bird is in your cart
        if (!cart.includes(bird)){
            setCart([ ...cart,bird]);
            
        } else {
            alert("Bird is already in cart")
        }
        
    }


    //display the bird information
    return(<div className="card">
        <h5>{bird.name}</h5>
        <p>Price: ${bird.amount}</p>
        <img src={bird.img} alt={bird.name} width="150px"></img>
        {/* set the onclick to the button */}
        <button className="adopt" onClick={adoptBird} >Adopt</button>
    </div>)
}