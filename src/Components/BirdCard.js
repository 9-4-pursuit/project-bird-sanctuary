import { useState } from "react";
import React from "react";




function BirdCard (props) {
  //const {name, phone, cell, picture} = props.person
//  const {name, amount, id} = props.birdy

//  console.log(props.birdy.name)

// console.log(name);
// console.log(amount);
// console.log(id);

  return (
      <div>

<h1>Hello, BirdCard!</h1>
props.name
  <h2>bird name</h2> 
  <p>price of bird</p>
  <p>image of bird</p>
  <img alt="profile pic"/>


        {/* <h2>{props.birdData.name}</h2> */}




        <p>$amountTBD</p> 
        {/* <image src="https://i.imgur.com/GacKN4tb.jpg" />
        <p>{props.birdData.image}</p>
        <p>{props.birdData.img}</p> */}


          {/* <h1>{name.first} {name.last}</h1>

          <img alt="profile pic" src={picture.thumbnail}/> */}

          
      </div>
  )
}


export default BirdCard;
       

