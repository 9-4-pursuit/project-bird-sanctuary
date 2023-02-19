import birdData from "../data/birds"




function BirdCards({ callback }) {


    return(
        <div className="card">
            {
                birdData.map((bird) => {
           
                    return (
                        <div key={bird.id} className="birds">
                            <h5>{bird.name}</h5>
                            <p>${bird.amount}</p>
                            <img src={bird.img} style={{maxWidth: "100px"}} id="image" alt="bird"></img>
                            <br></br>
                            <button onClick={() => callback(bird)}>Adopt</button>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default BirdCards