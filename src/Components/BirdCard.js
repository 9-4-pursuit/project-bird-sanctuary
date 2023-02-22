import React from "react";

function BirdCard(props) {

  //add guard clause so I won't get an undefined error
  if (!props.birdy) {
    return null;
  }

  const { name, amount, id, img } = props.birdy;


  return (
    <div className="card">
      <div className="image-box">
        <img alt={`${name} profile pic`} src={img} />
      </div>
      <div className="birds">
        <h2>{name}</h2>
        <p>Price: ${amount}</p>
        <p>id: {id}</p>
        <button className="birds" id="adopt" onClick={() => props.handleAdopt(props.birdy)}>
        Adopt
        </button>
      </div>
    </div>
  );
}

export default BirdCard;

