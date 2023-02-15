export default function CartItem ({bird, cartIndex, cartDeleteThisBird, cart, total}) {
    return (
        <li>{bird.name} ${bird.amount}
        <button onClick={(event)=>cartDeleteThisBird(event, cartIndex, bird, cart, total)}>Delete</button>
        </li>
    );
}