
export default function BirdCard(props) {
    return (
        <div className="card">
            <h6>{props.bird.name}</h6>
            <p value={props.bird.amount}>Price ${props.bird.amount}</p>
            <img 
            src={props.bird.img}
            alt={`${props.bird.name} ID# ${props.bird.id}`}
            width="125px"
            height="125px"
            />
            <br/>
            <button>Adopt</button>


        </div>
    )
}