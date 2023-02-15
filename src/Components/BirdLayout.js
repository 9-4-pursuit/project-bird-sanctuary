import React from "react";
import birdData from "../data/birds";
import BirdCard from "./BirdCard";


// const BirdLayout = ({handleAdopt}) => {
//   return (
//     <section>
//       {
//         birdData.map((item)=> {
//           <Cards item={item} handleAdopt={handleAdopt} />
//         })
//       }
//     </section>
//   )
// }


function BirdLayout(props) {

  const data = props.birds;

    return (
        <div className="layout">
            {data && data.map((birdy, index) => {
                return <BirdCard birdy = {birdy} handleAdopt={props.handleAdopt} />
            })
            }
<BirdCard birdy={bird} handleAdopt={() => handleAdopt(bird)} setCart={setCart} />

     <section>
       {birdData.map((item) => 
      <Cards item={item} handleAdopt={handleAdopt} />
         )}
     </section>

        </div>
    )
}

export default BirdLayout;


