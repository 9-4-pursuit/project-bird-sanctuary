import React from 'react';
// import "./BirdCard.css";
function BirdCard({ birdData, cartData, setCartData }) {

    const birds = birdData.map(({ name, id, amount, img }) => {
        return (
            <div className='card'>
                <h3>{name}</h3>
                <p>Price: ${amount}</p>
                <img className='img' src={img} alt={name} />
                <button onClick={() => setCartData([...cartData, { name, amount, id }])}>ADOPT</button>
            </div>
        )
    })

    return (
        <section className='birds'>
            {birds}
        </section>
    )
}

export default BirdCard