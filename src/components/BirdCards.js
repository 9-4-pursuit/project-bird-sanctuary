
function BirdCards (props) {
    const data = props.birdData
    const { name, amount, img } = data;
    console.log(data)
    return (
        <div className="card">
            <ul>
        {data.map((bird) => {
            return (
            <>
      <li key={bird.id}>
        <p><strong>{bird.name}</strong></p>
        <p>Price: ${bird.amount}</p>
        <img className="img" src={bird.img} alt="birdie" />
        <br></br>
        <button>Adopt Me</button>
        
      </li>
      </>
       );
        })}
        </ul>
        </div>
 );
 }

export default BirdCards;
