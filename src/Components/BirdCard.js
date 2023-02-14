
export default function BirdCard({ bird, adoptBird }) {

    return (
        <div className="card birds">
            <h6>{bird.name}</h6>
            <p value={bird.amount}>Price ${bird.amount}</p>
            <img
                src={bird.img}
                alt={`${bird.name} ID# ${bird.id}`}
                width="125px"
                height="125px"
            /><br/>
            <button onClick={() => adoptBird(bird)}>Adopt</button>

        </div>
    )
}