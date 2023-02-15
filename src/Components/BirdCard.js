import { useState } from "react";
import birdData from "../data/birds";
import Birds from "./Birds"
import bonusItems from "../data/bonusItems";

function BirdCard(props) {
    let { birds, cart, id, setCart, bonusItems } = props

    return (
        <ul>
        {birdData.map((bird) => {
            return (
                <li
                key={id} 
            className="card">
                <Birds
                id={bird.id}
                name={bird.name} 
                amount={bird.amount}
                img={bird.img}
                cart={bird.cart}
                setCart={bird.setCart}
                bonus={bonusItems}
                />
                </li>
            );
        })}
    </ul>
 ); 
};
export default BirdCard;

// import { useState } from "react";
// import birdData from "../data/birds";

// function BirdCard(props) {
//     let { name, amount, img, birdType } = props
    
//     return (
//        <div>
//         <h3>{name}</h3>
//         <br></br>
//         <img src={img} alt={name}/>
//        </div>
//     );
// };
// export default BirdCard;


// function BirdCard(props) {
//     let {name, amount, img, setAdopt, setPrice} = props;
//     // const {birds, setAdopt, setPrice} = props

//     return (
//         <section className="card">
//         <div className="birds">
//             <h3>{name}</h3>
//             <br></br>
//             <h4>${amount}</h4>
//             <br></br>
//             <img className="pic" src={img} alt={name} />
//             <br></br>
//             <button>Adopt</button>
//             {/*onClick={} */}
//         </div>
//         </section>
//     );
// };
// export default BirdCard;