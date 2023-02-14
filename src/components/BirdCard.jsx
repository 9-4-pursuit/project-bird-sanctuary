const BirdCard = ({ bird, birdClickHandler }) => {
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
