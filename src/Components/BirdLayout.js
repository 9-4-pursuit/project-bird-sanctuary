import React from "react";
import BirdCard from "./BirdCard";


function BirdLayout(props) {
  const { birds, handleAdopt} = props;

  if (!birds) {
    return null;
  }

  return (
    <div className="layout">
      {birds.map((birdy) => (
        <BirdCard 
          key={birdy.id} 
          birdy={birdy} 
          handleAdopt={handleAdopt}
        />
      ))}
       </div>
    );
}


export default BirdLayout;

