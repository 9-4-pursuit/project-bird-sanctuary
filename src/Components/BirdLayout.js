import React from "react";
import birdData from "../data/birds";
import BirdCard from "./BirdCard";


function BirdLayout(props) {
  const { birds, handleAdopt} = props;

  if (!birds) {
    return null;
  }

  return (
    <div className="layout">
      {birds.map((bird) => (
        <BirdCard key={bird.id} bird={bird} handleAdopt={handleAdopt} />
      ))}
       </div>
    );
}


export default BirdLayout;

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

//  const data = props.birds;

// <div className="layout">
// {data && data.map((birdy, index) => {
//     return <BirdCard birdy = {birdy} handleAdopt={props.handleAdopt} />
// })

/*
<BirdCard birdy={bird} handleAdopt={() => handleAdopt(bird)} setCart={setCart} />


     <section>
       {birdData.map((item) => 
      <Cards item={item} handleAdopt={handleAdopt} />
         )}
     </section>

*/