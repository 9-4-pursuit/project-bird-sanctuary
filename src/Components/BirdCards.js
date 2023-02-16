export default function BirdCards(props) {

  const data = props.birdData;
  
  return (
    <div className="card">
      
        {data.map((bird) => {
          
          const { name, amount, img } = bird;
          return (
            <>
            <div key={bird.id} className="birds">
              
                <p><strong>{name}</strong></p>
                <p><strong>Price: ${amount}</strong></p>
                <img className="img" src={img} alt="birdimage" />
                <br></br>
                <button onClick={() => (props.handleAdoptBird(bird))}>Adopt Me</button>
                
                
              
            </div>
            </>
          );
        })}
    </div>

  );
}
