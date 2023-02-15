// import { useState } from "react";
import React from "react";

function BirdCard(props) {
  console.log(props.birdy.name);
  const { name, amount, id, img } = props.birdy;

  function handleAdopt() {
    console.log("Adopt button clicked");
  }



  return (
    <div className="card">
      <div className="image-box">
        <img alt={`${name} profile pic`} src={img} />
      </div>
      <div className="details">
        <h2>{name}</h2>
        <p>Price: ${amount}</p>
        <p>id: {id}</p>
        <button name="adopt" id="adopt" onClick={handleAdopt}>
        Adopt
        </button>
      </div>
    </div>
  );
}

export default BirdCard;

// <h2>{props.birdy.name}</h2>
//<p>Price: ${props.birdy.amount} OR {amount}</p>
// <p>id: {props.birdy.id}</p> OR {id}
// <img alt="profile pic" src="{props.birdy.image}/> */}
//
