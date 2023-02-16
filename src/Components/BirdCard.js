import Birds from "./Birds";

function Birdcard(props) {
  let { birds, cart, setCart } = props;
  
    return (
      <ul>
        {birds.map(({ name, amount, id, img }) => {
          return (
            <li key={id} className="card">
              <Birds
                id={id}
                name={name}
                amount={amount}
                img={img}
                cart={cart}
                setCart={setCart}
              />
            </li>
          );
        })}
      </ul>
    );
  };
  
  export default Birdcard;