import birdData from "../data/birds";
import Card from "./Card";


function Birds () {
    return (
        <div>
            {
                birdData.map((birdInfo, index) => {
                    return <Card birdInfo={birdInfo} key={index} />
                })
            }
        </div>
    )
}

export default Birds;