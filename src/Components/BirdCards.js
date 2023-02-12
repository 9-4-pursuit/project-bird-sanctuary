export default function BirdCards(props) {
  const data = props.birdData;
  const { name, amount, img } = data;

  return (
    <div className="card">
      <ul>
        {data.map((bird) => {
          return (
            <div>
              <li id={bird.id}>
                <p>{bird.name}</p>
                <p>Price: ${bird.amount}</p>
                <img className="img" src={bird.img} alt="birdimage" />
                <br></br>
                <button>Adopt Me</button>
                
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
