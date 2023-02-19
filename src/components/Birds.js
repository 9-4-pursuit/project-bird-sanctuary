import data from "../data/birds";

 function Birds(props) {
  
    const cart = props.cart;
    const setCart = props.setCart;

    return (<div className="birds">
        
        {data.map((bird) => {
            
            return (
            <div className="card" key={bird.id}>
            <strong> {bird.name} </strong>
            <p> Price: ${bird.amount}</p>
            <img src={bird.img} ></img>
            <button onClick={() => setCart([...cart, bird])}> Adopt. </button>
        </div>);
        })
        }
    </div>);
};

export default Birds;