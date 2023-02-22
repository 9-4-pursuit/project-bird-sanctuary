import birdData from "../data/birds" 
import BirdInfo from "./BirdInfo"


function BirdCards (props) {

    return (
        <div>
            {
                birdData.map((bird, index) => {
                    return <BirdInfo birdCardDisplay={bird} key={index} updateCart={props.updateCart} />
                     
                })
            }
        </div>
    )
}

export default BirdCards