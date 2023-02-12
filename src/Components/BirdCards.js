

function BirdCards(props) {
    const data = props.birdData

    return (
        // <div className="birdcard">
        //     <h1>Title</h1>
        //     <h3>Price</h3>
        //     {/* <img> </img> */}
        //     <button>Adopt</button>
        // </div>

        <div className="card" >
        
                {data.map((bird) => {
                    return (
                        <div key={bird.id} className="birds">
                        <li>
                            <h4>{bird.name}</h4>
                            <p>Price: ${bird.amount}</p>
                            <img className="img" src={bird.img} alt="birdimage"/>
                            <br></br>
                            <button>Adopt Me</button>
                        </li>
                        </div>
                        
                    )
                })}
            
  

        </div>
    )
}

export default BirdCards