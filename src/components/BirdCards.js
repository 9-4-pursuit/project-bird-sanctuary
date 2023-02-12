import { v1 as generateUniqueID } from "uuid";


function BirdCards(props) {
    const imgStyle = {
        width: "100px",
        length: "100px"
    }

    const cardStyle = {
        borderStyle: "solid",
        padding: "25px",
        width: "120px",
        textAlign: "center",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
        gridTemplateRows: "max-content 200px 1fr"
    }



    return(
        <div className="card">
            {
                props.birds.map((bird) => {
                    return (
                    <div className="birds">
                    <h5>{bird.name}</h5>
                    <p>${bird.amount}</p>
                    <img src={bird.img} style={{maxWidth: "100px"}} id="image"></img>
                    <br></br>
                    <button>Adopt</button>
                    </div>
                    )
                })
            }
        </div>
    )
}


export default BirdCards