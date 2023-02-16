
function BirdCards({handleAdopt, birdData}) {
  return (
    <div className="card">
      
        {birdData.map((bird, i) => {
          return (
            <div key={bird.id} className="birds">
                <li className="cards" key={bird.id}>
                  <h4>
                    <strong>{bird.name}</strong>
                  </h4>
                  <p>Price: ${bird.amount}</p>
                  <img className="img" src={bird.img} alt="birdimage" />
                  <br></br>
                  {/* PLEASE ADD A BUTTON BELOW TO SEND DOWN THE CALLBACK FUNCTION 
                  TO ADOPT BIRD AND ADD THE TEMPLATE TO CART */}
                  <button onClick={() => handleAdopt(bird, i)}>Adopt Me</button>
                </li>
              </div>
          );
        })}
    </div>
  );
}

export default BirdCards;
