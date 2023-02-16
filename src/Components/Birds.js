import birdData from "../data/birds";
import Card from "./Card";
import '../styles/Birds.css'

function Birds({adoptBird}) {

    return (
        <div>
            {
                birdData.map((bird) => {
                    return <Card bird={bird} key={bird.id} adoptBird={adoptBird}/>
                })
            }
        </div>
    )
}

export default Birds;