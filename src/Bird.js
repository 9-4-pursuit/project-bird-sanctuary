export default function Bird({bird, cartAdoptThisBird, cart, total}) {
    return (
        <span className="card" key={bird.id}>
            <h3>{bird.name}</h3>
            <p>Price: ${bird.amount}</p>
            <img height={250} src={bird.img} alt={bird.id}/>
            <br/>
            <button onClick={(event) => cartAdoptThisBird(event, bird, cart, total)}>Adopt</button>
        </span>
    );
}