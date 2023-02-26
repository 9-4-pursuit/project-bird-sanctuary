

function Card({bird, handleAddToCart}) {



    return(
        <div className="card">
          <h3>{bird.name}</h3>  
          <p>Price: ${bird.amount}</p>
          <img src={bird.img} alt={bird.name} />
          <div className="birds">
            <button onClick={() => handleAddToCart(bird)}>Adopt</button>
          </div>


        </div>


    )
}

export default Card