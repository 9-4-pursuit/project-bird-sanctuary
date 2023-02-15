import birdData from "../../src/data/birds";

function BirdCards({ birds, setBirds}) {

function birdForCarts (bird){
setBirds([...birds, bird])
}
  return( 


    <section>
      <ul className="birds">
        {birdData.map((bird) => (

         <li className="birds" id={bird.id}>
            <h4>{bird.name}</h4>
            <p>Price: ${bird.amount}</p>
            <img
              src={bird.img}
              width="200"
              height="200"
              alt="bird"
            ></img>
            <button className="myButton" onClick={() => birdForCarts(bird)}>
              Adopt
            </button>
          </li>

        ))}
      </ul>
    </section>
  );

 }

 export default BirdCards