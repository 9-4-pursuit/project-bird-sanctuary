import birdData from "../data/birds";

function BirdCards ({ updateBird, setUpdateBird, totalAmount }) {
    return (
      <div className="birds">
        {birdData.map(bird => {
            return (
                <div className="card" key={bird.id}>
                    <p>{bird.name}</p>
                    <p>Price: ${bird.amount}</p>
                    <img src={bird.img} alt={bird.name} />
                    <button className="adopt"
                        onClick={() => {
                            // //to only add if the cart is empty or not duplicated.
                            // if(!updateBird || !updateBird.some(eachBird => eachBird.id === bird.id)) {}
                            totalAmount(bird.amount);
                            setUpdateBird([
                                ...updateBird,
                                {
                                    id: bird.id,
                                    name: bird.name,
                                    amount: bird.amount
                                }
                            ]);
                        }}
                    >
                        Adopt
                    </button>
                </div>
            )
        })}
      </div>
    );
  };
  
  export default BirdCards;
  