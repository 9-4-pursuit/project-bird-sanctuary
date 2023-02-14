// In our App.js, we MAPPED through the entire array from birds.js
// Here we are pulling data from our individual BIRD OBJECT to populate our bird cards
// We are also assigning our passed down adoptBird func and passing in the entire BIRD OBJECT again
// So our BIRD OBJECT is getting passed from App.js --> BirdCard.js -then on click of the adopt button --> App.js -to our adoptBird func

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