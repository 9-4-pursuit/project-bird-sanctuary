import birdData from './data/birds';
import Bird from './Bird';

export default function BirdCards({birdData, cartAdoptThisBird, cart, total}) {
    return (
        <div className="birds">
            {birdData.map((bird)=> {
                return (
                    <Bird key={bird.id} bird={bird} cartAdoptThisBird={cartAdoptThisBird} cart={cart} total={total} />
                ) // return
            })}
        </div>
    );
}