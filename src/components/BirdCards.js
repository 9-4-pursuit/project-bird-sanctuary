import React from 'react';
import BirdCard from './BirdCard';

function BirdCards({ birdData, cartData, setCartData }) {
    return (

        <div className='birdcard'>
            <BirdCard
                birdData={birdData}
                cartData={cartData}
                setCartData={setCartData}
            />
        </div>
    )
}

export default BirdCards;