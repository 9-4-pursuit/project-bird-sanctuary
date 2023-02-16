
import birdData from "../data/birds"
function BirdCards({handleAdopt, birdData}) {
     //const data = props.birdData

    return (

        <div className="card" >
        
                {birdData.map((bird) => {
                    return (
                        <div key={bird.id} className="birds">
                        <li>
                            <h4>{bird.name}</h4>
                            <p>Price: ${bird.amount}</p>
                            <img className="img" src={bird.img} alt="birdimage"/>
                            <br></br>
                            <button onClick={() => handleAdopt(bird)}>Adopt Me</button>
                        </li>
                        </div>
                        
                    )
                })}
            
  

        </div>
    )

}


export default BirdCards


// function BirdCards(props) {
//     const data = props.birdData

   
//    return (

//        <div className="card" >
       
//                {data.map((bird) => {
//                    return (
//                        <div key={bird.id} className="birds">
//                        <li>
//                            <h4>{bird.name}</h4>
//                            <p>Price: ${bird.amount}</p>
//                            <img className="img" src={bird.img} alt="birdimage"/>
//                            <br></br>
//                            <button>Adopt Me</button>
//                        </li>
//                        </div>
                       
//                    )
//                })}
           
 

//        </div>
//    )

// }