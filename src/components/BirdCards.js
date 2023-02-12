import birdData from "../data/birds";


function BirdCards(props) {
  const data = props.birdData;
  // const { name, amount, img } = data;
  console.log(data);
  return (
    <div className="card">
      
        {data.map((bird) => {
          return (
            <>
              <div key={bird.div} className="birds">
                <li className="cards" key={bird.id}>
                  <h4>
                    <strong>{bird.name}</strong>
                  </h4>
                  <p>Price: ${bird.amount}</p>
                  <img className="img" src={bird.img} alt="birdimage" />
                  <br></br>
                  <button>Adopt Me</button>
                </li>
              </div>
              </>
          );
        })}
      
    </div>
  );
}

export default BirdCards;
