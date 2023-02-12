
function BirdCards (props) {
    const data = props.birdData
    console.log(data)
  
    return (
        <div className="card">
            {data.map((bird) => {
          return (
            <div key={bird.id} className="birds">
              <li>
                <p>{bird.name}</p>
                <p>Price: ${bird.amount}</p>
                <img className = "img" src={bird.img} alt="birdimage" /><br></br>
              <button>Adopt Me</button>
              </li>
              </div>
          );
        })}
        </div>
)
}
export default BirdCards

