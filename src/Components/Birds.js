import { useState } from "react";
import birdData from "../data/birds";

function Birds(props) {
    let { name, amount, img, id, cart, setCart } = props

    return (
       <div className="birds">
        <h4>{name}</h4>
        <p>${amount}</p>
        <img src={img} alt={name} 
        width="125"
        height="100"/>
        <br></br>
        <button value={id} 
        // onClick={() => setCart([...cart, { name, amount }])}
        >
            Adopt</button>
       </div>
    );
};
export default Birds;



// import { useState } from "react";
// import birdData from "../data/birds";
// import BirdCard from "./BirdCard";

// function Birds(props) {
//     const {birdType, setBirdType} = props

//     return (
//        <div id="allBirds">
//         {birdData.map((bird) => {
//             return (<BirdCard
//                 className="card"
//                 name={bird.name} 
//                 birdType={birdType}
//                 img={bird.img}
//                 />
//             )
//         })

//         }
//        </div>
//     );
// };
// export default Birds;
