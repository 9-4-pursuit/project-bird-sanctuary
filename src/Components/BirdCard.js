import { useState } from "react";
import React from "react";

function BirdCard(props) {
  console.log(props.birdy.name);
  const { name, amount, id, img } = props.birdy;

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Price: ${amount}</p>
      <p>id: {id}</p>
      <img alt={`${name} profile pic`} src={img} />
    </div>
  );
}

export default BirdCard;

// <h2>{props.birdy.name}</h2>
//<p>Price: ${props.birdy.amount} OR {amount}</p>
// <p>id: {props.birdy.id}</p> OR {id}
// <img alt="profile pic" src="{props.birdy.image}/> */}
// <button name="adopt" id="adopt" >Adopt</button>
