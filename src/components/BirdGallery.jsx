import BirdCard from "./BirdCard";
import Title from "./Title";
import Order from "./Order";
import birdData from "../data/birds";

const BirdGallery = () => {
  return (
    <>
      <section className="section" id="gallery">
        <Title title="featured" subTitle="Birds" />

        <div className="section-center featured-center">
          {birdData.map((bird) => (
            <BirdCard bird={bird} key={bird.id} />
          ))}
        </div>
      </section>
      <Order />
    </>
  );
};
export default BirdGallery;
