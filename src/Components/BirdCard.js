function BirdCard({birdData, handleAdopt}) {

  return (
    <div className="card">
      {birdData.map((bird) => {
        return (
          <div key={bird.id} className="birds" >
            <li className="bird-card">
              <p>{bird.name}</p>
              <p>Price: ${bird.amount}</p>
              <img src={bird.img} alt="birdimage" />
              <br></br>
              <button onClick={() => handleAdopt(bird)}>Adopt Me</button>
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default BirdCard;
