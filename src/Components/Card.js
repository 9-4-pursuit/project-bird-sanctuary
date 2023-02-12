

function Card({addingToCart, birdData}){
    let bird = birdData
    return(
        <div className="card">
        <ul id="bird" key={bird.id} className="birds">
            {
                bird.map((data)=>{
                    return(
                        <li key={data.id}><h6>{data.name}</h6>
                        <img src={data.img} alt={data.name}/>
                        <p>amount: ${data.amount}</p>
                        <button onClick={()=>addingToCart(data.id)}>Adopt</button>
                        </li>
                    )
                })
            }

        </ul>
    </div>
    )
}

export default Card;