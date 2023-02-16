import { useContext } from "react";
import { Birds } from "../Context";

const BirdCard = ({ bird }) => {
  const { birds, setBirds } = useContext(Birds);

  const birdClickHandler = (item) => {
    const birdExist = birds.find((el) => el.id === item.id);
    if (birdExist) {
      return alert("You have already added this bird to the cart");
    } else {
      setBirds([...birds, { ...item }]);
    }
  };

  const { img, name, amount } = bird;
  return (
    <>
      <article className="bird-card">
        <div className="bird-img-container">
          <img src={img} alt={name} className="bird-img" />
        </div>
        <div className="bird-info">
          <div className="bird-title">
            <h3>{name}</h3>
          </div>
          <div>
            <h4>Price: ${amount}</h4>
            <div>
              <button className="btn" onClick={() => birdClickHandler(bird)}>
                Adopt
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
export default BirdCard;
