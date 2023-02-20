import birdData from "../data/birds";
import Card from "./Card";


function Birds({adoptBird}) {

    return (
        <div className="main">
            {
                birdData.map((bird) => {
                    return <Card bird={bird} key={bird.id} adoptBird={adoptBird}/>
                })
            }
        </div>
    )
}

export default Birds;