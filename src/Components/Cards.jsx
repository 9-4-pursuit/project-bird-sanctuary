import birdData from "../../src/data/birds";

function BirdCards({ birds, setBirds}) {

function birdForCarts (bird){
setBirds([...birds, bird])
}
  return( 

    <section
    style={{
        fontFamily: '-apple-system',
        fontSize: "2rem",
        fontWeight: 2.5,
        lineHeight: 2.5,
        color: "#292b2c",
        backgroundColor: "beige",
        padding: "0 2em"
      }}
    >
      <ul className="birds">
        {birdData.map((bird) => (

         <li className="birds" id={bird.id}>
            <h4 style={{backgroundColor: "lightblue"}}>{bird.name}</h4>

            <p style={{backgroundColor: "limegreen"}}>Price: ${bird.amount}</p>
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