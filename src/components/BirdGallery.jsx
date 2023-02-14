import { useState } from "react";
import BirdCard from "./BirdCard";
import Title from "./Title";
import Order from "./Order";
import birdData from "../data/birds";

const BirdGallery = () => {
  const [birds, setBirds] = useState([]);

  const birdClickHandler = (item) => {
    const birdExist = birds.find((el) => el.id === item.id);
    if (birdExist) {
      return alert("You have already added this bird to the cart");
    } else {
      setBirds([...birds, { ...item, name: item.name, amount: item.amount }]);
    }
  };

  return (
    <>
      <section className="section" id="gallery">
        <Title title="featured" subTitle="Birds" />

        <div className="section-center featured-center">
          {birdData.map((bird) => (
            <BirdCard
              bird={bird}
              key={bird.id}
              birdClickHandler={birdClickHandler}
            />
          ))}
        </div>
      </section>
      <Order birds={birds} setBirds={setBirds} />
    </>
  );
};
export default BirdGallery;
