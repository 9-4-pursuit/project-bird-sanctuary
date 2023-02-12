import birdData from "../data/birds";
import { useState } from "react";


function BirdCard () {
    const [birds, setBirds] = useState(birdData)

    function addBird() {
        console.log("Add bird to card")
        //create a new bird 
        //adding a basic object of sorts
        const newBirdCard = {
            img: "https://i.imgur.com/GacKN4tb.jpg",
            name: "Royal Flycatcher",
            amount: 300,
            id: 777,
        };


        //make copy of the birds array using destructuring
        //add Royal Flycatcher

        setBirds([newBirdCard, ...birds])
    }

    function removeBird(birdID) {
        console.log("remove bird number ", birdID);
        //use a filter method to remove any dogs that have a matching ID
        const filterBirdArray = birds.filter((bird) => bird.id !== birdID)
            //this will filter out all birds that do NOT have the id I want to get rid of 
            //set the birds array to the new array that does not include the bird I want to get rid of
        setBirds(filterBirdArray);
    }



    return (
      <div>
        <h1>Hello, BirdCard!</h1>

      </div>
    );
  };
  
export default BirdCard;

//   The bird data comes from src/data/birds.js
// Each bird card displays the name, image, and amount (price)
// Each bird card has a class name of card
// Each bird card has an Adopt button
// The button text should be: Adopt