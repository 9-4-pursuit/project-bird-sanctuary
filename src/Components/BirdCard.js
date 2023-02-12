function BirdCard(props) {


  const data = props.birdData;
//   const [{ name, amount, img }] = data;

  return (
    <div className="card">
      <ul>
        {data.map((bird) => {
          return (
            <>
              <li key={bird.id} >
                <p>{bird.name}</p>
                <p>Price: ${bird.amount}</p>
                <img src={bird.img} alt="birdimage" />
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

export default BirdCard;
